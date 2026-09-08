import asyncio
import json
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from websockets.asyncio.server import serve


ROOT = Path(__file__).resolve().parent
HTTP_HOST = "0.0.0.0"
HTTP_PORT = 8000
WS_HOST = "0.0.0.0"
WS_PORT = 8765

master = None
mirrors = set()


class QuietStaticHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        return


def run_http_server():
    server = ThreadingHTTPServer(
        (HTTP_HOST, HTTP_PORT),
        lambda *args, **kwargs: QuietStaticHandler(
            *args, directory=str(ROOT), **kwargs
        ),
    )
    print(f"HTTP: http://<IP-DE-CE-PC>:{HTTP_PORT}/index.html")
    server.serve_forever()


async def send_json(connection, message):
    await connection.send(json.dumps(message, separators=(",", ":")))


async def websocket_handler(connection):
    global master
    role = None

    try:
        async for raw_message in connection:
            message = json.loads(raw_message)
            message_type = message.get("type")

            if message_type == "register":
                role = message.get("role")
                if role == "master":
                    master = connection
                    await send_json(connection, {"type": "registered", "role": "master"})
                    print("Maitre connecte")
                elif role == "mirror":
                    mirrors.add(connection)
                    await send_json(connection, {"type": "registered", "role": "mirror"})
                    if master:
                        await send_json(master, {"type": "mirror-connected"})
                continue

            if role == "mirror" and master and message_type in {
                "ClickButton",
                "page-change",
                "state-request",
            }:
                await master.send(raw_message)
            elif role == "master" and message_type == "state-update":
                for mirror in tuple(mirrors):
                    try:
                        await mirror.send(raw_message)
                    except Exception:
                        mirrors.discard(mirror)
    except Exception as error:
        print(f"Connexion fermee: {error}")
    finally:
        mirrors.discard(connection)
        if master is connection:
            master = None
            print("Maitre deconnecte")


async def run_websocket_server():
    print(f"WebSocket: ws://<IP-DE-CE-PC>:{WS_PORT}")
    async with serve(websocket_handler, WS_HOST, WS_PORT):
        await asyncio.Future()


def main():
    threading.Thread(target=run_http_server, daemon=True).start()
    asyncio.run(run_websocket_server())


if __name__ == "__main__":
    main()
