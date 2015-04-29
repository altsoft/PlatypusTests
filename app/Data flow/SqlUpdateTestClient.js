/**
 * 
 * @author mg
 * @constructor
 */
function SqlUpdateTestClient() {
    var self = this, model = P.loadModel(this.constructor.name);

    self.execute = function (aOnSuccess) {
        var proxy = new P.ServerModule('SqlUpdateTest');
        proxy.execute(aOnSuccess, function (e) {
            P.Logger.severe(e);
        });
    };
}
