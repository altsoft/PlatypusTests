/**
 * 
 * @author jskonst
 * @public
 */
function test() {
    var self = this, model = P.loadModel(this.constructor.name);
    var i = 0;

    /**
     * @rolesAllowed admin
     **/
    self.execute = function () {
        P.Logger.info(P.principal.name);
        P.Logger.info("i'ma here");
//        var pusher = Java.type("com.eas.server.websocket.TaggedFeedEndPoint");
//        pusher.broadcast("MyTag", "hello");
//        P.Logger.info(pusher);
//        P.Logger.info(i);
//        i+=1;
    };
}
