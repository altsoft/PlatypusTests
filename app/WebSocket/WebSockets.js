/**
 * 
 * @author jskonst
 */
function WebSockets() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var value = 0;
    var setv = new P.ServerModule("test");
    
    self.show = function () {
        form.show();
//        addEventsListener();
    };

    model.requery(/*function(){}*/);

//    var webSocket = null;
//    function addEventsListener() {
//        P.Logger.info("adding listener");
//        var eventsTypes = "";
//        var delimiter = "";
//
//        if (webSocket) {
//            webSocket.close();
//            webSocket = null;
//        }
//        var wsProtocol = "ws:";
//        if (window.location.protocol == 'https:')
//            wsProtocol = "wss:";
//        webSocket = new WebSocket(wsProtocol + "//" + window.location.host + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/taggedfeed");
//        console.log(webSocket);
//        webSocket.onopen = function () {
//            P.Logger.info("onOpen");
//            webSocket.send("MyTag");
//        };
//
//        webSocket.onerror = function (aError) {
//            P.Logger.info("onError");
//            P.Logger.info(aError);
//        };
//
//        webSocket.onmessage = function (aEventData) {
//            P.Logger.info("onMessage");
//            form.formattedField.text = aEventData;
//        };
//        webSocket.onclose = function () {
//            P.Logger.info("onClose");
//        };
//    }

    form.btnUp.onActionPerformed = function (event) {
        value += 1;
        form.formattedField.text = value;
        setv.execute();
    };

    form.btnDown.onActionPerformed = function (event) {
        value -= 1;
        form.formattedField.text = value;
    };
}
