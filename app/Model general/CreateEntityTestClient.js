/**
 * 
 * @author mg
 * @constructor
 */ 
function CreateEntityTestClient() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function (onSuccess, onFailure) {
        var proxy = new P.ServerModule('Create_Entity_Test');
        proxy.execute(onSuccess, onFailure);
    };
}
