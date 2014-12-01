var sessionStore;
/**
 * 
 * @author jskonst
 * @public
 * @stateless
 */
function testWSServer() {
    var self = this, model = P.loadModel(this.constructor.name);
    var i = 0;

    self.onopen = function (session) {
//        session = new P.WebSocketSession();
        P.Logger.info("Sucsessfully opened connection with client ID: " + session.id);
        P.Logger.info("Protocol Version: " + session.protocolVersion);
        P.Logger.info("URI: " + session.uri);
        P.Logger.info("ID: " + session.id);

        if (sessionStore == null) {
            sessionStore = [];
        }
        session.onclose = function () {
            P.Logger.info("Sucsessfully closed connection by client");
            for (var i = 0; i < sessionStore.length; i++) {
                if (sessionStore[i] == session) {
                    sessionStore.splice(i, 1);
                }
            }
        };
        session.onmessage = function (message) {
            P.Logger.info("WebSocket Got message " + message.data);
            if (message.data == "Echlo") {
                var info = "Session.ID " + session.id + "; ";
                info += "Protocol Version: " + session.protocolVersion + "; ";
                info += "URI: " + session.uri + ";";
                session.send(info);
            }
        };

        session.onerror = function (aError) {
            P.Logger.info("Error " + aError);
        };

        sessionStore.push(session);
        session.send("Hello");
    }

}
