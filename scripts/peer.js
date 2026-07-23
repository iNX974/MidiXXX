var isPeerClient = false;
var peerId = "MidiXXXPeer";
var peer = null; // own peer object
var conn = null;

function InitializePeer()
{
    return;
    isPeerClient = window.location.href.indexOf("client=true") > -1
    if(isPeerClient === true)
    {
        InitializePeerClient();
    }
    else
    {
        InitializePeerServer();
    }
}
function SendPeerMessage(msg)
{
    if (conn && conn.open) {
        conn.send(msg);
    }
}
function InitializePeerClient()
{
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(null, {
        debug: 2
    });

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id

        LogError('ID: ' + peer.id);
        JoinPeerServer();
    });
    peer.on('connection', function (c) {
        // Disallow incoming connections
        c.on('open', function() {
            c.send("Sender does not accept incoming connections");
            setTimeout(function() { c.close(); }, 500);
        });
    });
    peer.on('disconnected', function () {
        LogError('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        //peer.id = peerId;
        //peer._lastServerId = peerId;
        //JoinPeerServer();
    });
    peer.on('close', function() {
        conn = null;
        LogError('Connection destroyed');
    });
    peer.on('error', function (err) {
        LogError(err);
    });
}

function JoinPeerServer() {
    // Close old connection
    if (conn) {
        conn.close();
    }
    LogError("join");
    // Create connection to destination peer specified in the input field
    conn = peer.connect(peerId, {
        reliable: true
    });
    LogError("joined");
    conn.on('open', function () {
        LogError("Connected to: " + conn.peer);
    });
    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        console.log("Data recieved", data);
        if(data.type=="Resync")           
        {
            AppData = data.value;
            UpdateButtons();
        }
    });
    conn.on('close', function () {
        LogError("close");
    });
    conn.on('error', function (err) {
        LogError(err);
    });
};
function InitializePeerServer()
{
    peer = new Peer(peerId, {
        debug: 2
    });

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = peerId;
        } else 

        LogError('ID: ' + peer.id);
    });
    peer.on('connection', function (c) {
        // Allow only a single connection
        if (conn && conn.open) {
            c.on('open', function() {
                c.send("Already connected to another client");
                setTimeout(function() { c.close(); }, 500);
            });
            return;
        }
        conn = c;
        console.log("Connected to: " + conn.peer);
        conn.on('data', function (data) {
            console.log("Data recieved", data); 
            if(data.type=="ClickButton")           
            {
                var page = GetCurrentPage();
                var obj = undefined;    
                if(page.id == data.value.idPage)
                {
                    obj = $("div-element-"+data.value.idButton);
                }
                ClickButton(AppData.Pages[data.value.idPage].items[data.value.idButton], obj);
                ResyncClientPeer();
            }
        });
        conn.on('close', function () {
            conn = null;
        });
    });
    peer.on('disconnected', function () {
        LogError('Connection lost. Please reconnect');
        peer.id = peerId;
        peer._lastServerId = peerId;
        peer.reconnect();
    });
    peer.on('close', function() {
        conn = null;
        LogError('Connection destroyed');
    });
    peer.on('error', function (err) {
        LogError(err);
    });
}
function ResyncClientPeer()
{
    SendPeerMessage(new MidiXActionPeer("Resync", AppData));
}