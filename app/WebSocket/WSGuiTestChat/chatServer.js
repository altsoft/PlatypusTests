var sessionStore;
/**
 * 
 * @author user
 * @public
 * @stateless
 */
function chatServer() {
    var self = this;

    self.onopen = function (session) {
        P.Logger.info("ID: " + session.id);
    };

    self.onclose = function (evt) {
    };
    self.onmessage = function (evt) {
        P.Logger.info("WebSocket Got message " + evt.data);
        self.sendMessage(evt.data);
    };
    self.onerror =  function (aError){
        P.Logger.info("Got Error " + aError);
    };

    self.sendMessage = function (msg) {
        // TODO: broadcast a message...
    };

}

