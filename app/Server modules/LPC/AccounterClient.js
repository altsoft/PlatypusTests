/* global P */

/**
 * 
 * @author mg
 * @constructor
 */
function AccounterClient() {
    var self = this, model = P.loadModel(this.constructor.name);

    self.execute = function (aOnSuccess) {
        var accounter = new P.ServerModule("Accounter");
        accounter.execute(100, function (aRes) {
            aOnSuccess(aRes);
        });
    };
}
