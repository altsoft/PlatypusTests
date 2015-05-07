/**
 * 
 * @author user
 * @constructor
 */ 
function ModelModyfiedTestClient() {
    var self = this, model = P.loadModel(this.constructor.name);
    
   self.execute = function (aOnSuccess) {
        var proxy = new P.ServerModule('ModelModyfiedTest');
         proxy.execute(aOnSuccess, function (e) {
            P.Logger.severe(e);
        });
    };
}
