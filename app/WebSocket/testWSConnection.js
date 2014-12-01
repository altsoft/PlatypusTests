/**
 * 
 * @author user
 * @constructor
 */
function testWSConnection() {
    var self = this, model = P.loadModel(this.constructor.name);

    
    var webSocket = null;
    function addEventsListener(tag) {
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
            webSocket.send(tag);
        };

        webSocket.onerror = function (aError) {
             throw 'Error ocured when connecting with tag - ' + tag;
        };

        webSocket.onmessage = function (aEventData) {
            if (aEventData.data == tag){
               P.Logger.info('Correctly get message');
            }else{
                throw 'Must not get this tag - ' + tag;
            }
        };
        webSocket.onclose = function () {
            P.Logger.info("onClose");
        };
    }

    addEventsListener('MyTag');
    self.execute = function () {
        
        var support = new testSupport();
       
        
           P.Logger.info('Done');
    };
}
