/**
 * 
 * @author user
 */
function AnonymousChat() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var userName;
    // TODO : place your code here
    var chat = new P.ServerModule("chatServer");

    model.requery(function () {
        // TODO : place your code here
    });


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

        webSocket = new WebSocket(wsProtocol + "//" + window.location.host + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/chatServer");
        console.log(webSocket);
        webSocket.onopen = function () {
            P.Logger.info("onOpen");
        };

        webSocket.onerror = function () {
            P.Logger.info("onError");
        };

        webSocket.onmessage = function (aEventData) {
            P.Logger.info("onMessage");
//            form.txtChatField.text += aEventData.data;
            var msgBox = new P.BoxPane();
//            msgBox.width = form.ffWidth.value;
//            msgBox.height = 20;
           

            var redColor = Math.round(Math.random() * 255);
            var greenColor = Math.round(Math.random() * 255);
            var blueColor = Math.round(Math.random() * 255);
            msgBox.background = new P.Color(redColor, greenColor, blueColor);
            msgBox.element.innerHTML ="<div>" + aEventData.data + "</div>";
            
            form.panel.add(msgBox);
            
        };
        webSocket.onclose = function () {
            P.Logger.info("onClose");
        };
    }

    var uNameCallback = function (aName) {
        userName = aName;
        form.txtMessage.focus();
        form.toFront();
    };

    self.show = function () {
        var uNameForm = new askUserName();
        form.show();
        uNameForm.showModal(uNameCallback);
        addEventsListener();

    };

    form.btnSend.onActionPerformed = function (event) {
        webSocket.send(form.txtMessage.value);
        form.txtMessage.value = "";
    };

}
