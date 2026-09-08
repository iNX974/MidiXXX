var isPeerClient = false;
var networkSocket = null;
var networkConnected = false;

function GetNetworkRole() {
	var params = new URLSearchParams(window.location.search);
	if (params.get("role") === "mirror" || params.get("mirror") === "true" || params.get("client") === "true") {
		return "mirror";
	}
	if (params.get("role") === "master") {
		return "master";
	}
	return null;
}

function IsNetworkMirror() {
	return GetNetworkRole() === "mirror";
}

function SwitchToMirror() {
	var url = new URL(window.location.href);
	url.searchParams.set("role", "mirror");
	url.searchParams.delete("mirror");
	url.searchParams.delete("client");
	window.location.href = url.toString();
}

function SwitchToMaster() {
	var url = new URL(window.location.href);
	url.searchParams.set("role", "master");
	url.searchParams.delete("mirror");
	url.searchParams.delete("client");
	window.location.href = url.toString();
}

function InitializeNetwork() {
	var role = GetNetworkRole();
	isPeerClient = role === "mirror";
	if (!role) {
		console.log("MidiXXX network disabled; local mode");
		return;
	}
	var host = window.location.hostname || "localhost";

	try {
		networkSocket = new WebSocket("ws://" + host + ":8765");
		networkSocket.onopen = function () {
			networkConnected = true;
			networkSocket.send(JSON.stringify({ type: "register", role: role }));
			console.log("MidiXXX network connected as " + role);
		};
		networkSocket.onmessage = function (event) {
			HandleNetworkMessage(JSON.parse(event.data));
		};
		networkSocket.onclose = function () {
			networkConnected = false;
			console.warn("MidiXXX network disconnected");
		};
		networkSocket.onerror = function (error) {
			console.error("MidiXXX network error", error);
		};
	} catch (error) {
		console.error("Unable to initialize local network", error);
	}
}

function SendPeerMessage(message) {
	if (!networkConnected || !networkSocket) return;
	networkSocket.send(JSON.stringify(message));
}

function RequestNetworkPageChange(direction) {
	if (isPeerClient) {
		SendPeerMessage({
			type: "page-change",
			value: direction
		});
		return;
	}

	if (direction === "previous") PreviousPage();
	if (direction === "next") NextPage();
}

function HandleNetworkMessage(message) {
	if (message.type === "registered" && isPeerClient) {
		SendPeerMessage({ type: "state-request" });
		return;
	}

	if (message.type === "mirror-connected" && !isPeerClient) {
		BroadcastNetworkState();
		return;
	}

	if (message.type === "ClickButton" && !isPeerClient) {
		var page = AppData.Pages[message.value.idPage];
		if (!page || !page.items[message.value.idButton]) return;

		var item = page.items[message.value.idButton];
		var element = GetCurrentPage().id === page.id
			? $("div-element-" + item.id)
			: null;
		ClickButton(item, element);
		return;
	}

	if (message.type === "page-change" && !isPeerClient) {
		RequestNetworkPageChange(message.value);
		return;
	}

	if (message.type === "state-request" && !isPeerClient) {
		BroadcastNetworkState();
		return;
	}

	if (message.type === "state-update" && isPeerClient) {
		var currentPage = GetCurrentPage();
		var currentPageId = currentPage ? currentPage.id : null;
		AppData = message.value;
		var nextPage = GetCurrentPage();
		if (nextPage && nextPage.id !== currentPageId) {
			BuildButtons();
			BuildExp();
		} else {
			UpdateButtons();
		}
	}
}

function BroadcastNetworkState() {
	if (isPeerClient || !networkConnected) return;
	SendPeerMessage(new MidiXActionPeer("state-update", AppData));
}
