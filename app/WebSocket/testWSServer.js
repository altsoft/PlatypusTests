
/**
 * 
 * @author jskonst
 * @public
 * @stateless
 */
function testWSServer() {
    var self = this, model = P.loadModel(this.constructor.name);
    var i = 0;

    self.sendSimpleMessage = function () {
        P.Logger.info('HERE');
        P.Logger.info('HERE 1');
        
    };
    self.onopen = function(session){
//        session = new P.WebSocketSession();
        session.send("Hello");
    }
    
}
