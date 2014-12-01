/**
 * 
 * @author user
 * @constructor
 */
function testWSConnection() {
    var self = this, model = P.loadModel(this.constructor.name);

    var server = new P.ServerModule("testWSServer");
    
    var webSocket = null;
    function addEventsListener() {
        var eventsTypes = "";
        var delimiter = "";
       

        if (webSocket) {
            webSocket.close();
            webSocket = null;
        }
        var wsProtocol = "ws:";
        if (window.location.protocol == 'https:')
            wsProtocol = "wss:";
        webSocket = new WebSocket(wsProtocol + "//" + window.location.host + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/testWSServer");
        webSocket.onopen = function () {
            P.Logger.info("Sucsessfully connected");
        };

        webSocket.onerror = function () {
            P.Logger.info('Error ocured in connection');
        };

        webSocket.onmessage = function (aEventData) {
            P.Logger.info("onMessage");
            P.Logger.info("Success, got correct message on start - " + aEventData.data);
            if (aEventData.data == "Hello"){
                webSocket.send("Echlo");
            }else{
                P.Logger.info("Success, got second message - " + aEventData.data);
                webSocket.close();
            }
        };
        webSocket.onclose = function () {
            P.Logger.info("Sucsessfully Tested");
        };
    }

    self.execute = function () {
        addEventsListener();
        // после подключения, посылаем сообщение серверу с указанием - закрыть соединение
        P.Logger.info('Done');
    };
}
