var sessionStore;
/**
 * 
 * @author user
 * @public
 * @stateless
 */
function chatServer() {
    var self = this, model = P.loadModel(this.constructor.name);

    // TODO : place constructor code here

    self.onopen = function (session) {
        if (sessionStore==null){
            sessionStore = [];
        }
        session.onclose = function (){
            //переберем список сессий и удалим эту
            for (var i=0; i<sessionStore.length; i++) {
                if (sessionStore[i]==session){
                    sessionStore.splice(i,1);
                }
        }
        };
        sessionStore.push(session);
    };

    self.sendMessage = function (msg) {
        for (var i=0; i<sessionStore.length; i++) {
            sessionStore[i].send(msg);
        }
    };
    
    
}

