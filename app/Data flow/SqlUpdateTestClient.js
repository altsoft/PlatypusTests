/**
 * 
 * @author mg
 * @constructor
 */
function SqlUpdateTestClient() {
    var self = this, model = P.loadModel(this.constructor.name);

    self.execute = function () {
        var proxy = new P.ServerModule('SqlUpdateTest');
        proxy.execute(function () {
        }, function (e) {
            P.Logger.severe(e);
        });
    };
}
