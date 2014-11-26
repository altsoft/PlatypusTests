/**
 * 
 * @author mg
 * @constructor
 */ 
function CreateEntityTestClient() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function (onSuccess, onFailure) {
        var proxy = new P.ServerModule('CreateEntityTest');
        proxy.execute(onSuccess, onFailure);
    };
}
