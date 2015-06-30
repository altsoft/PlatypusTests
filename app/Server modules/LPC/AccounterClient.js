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
        var dt = new Date();
        accounter.execute(1000000, function (aRes) {
            var dt1 = new Date();
            aOnSuccess(aRes);
            P.Logger.info("Accounter test time: " + (dt1 - dt) + "ms");
        });
    };
}
