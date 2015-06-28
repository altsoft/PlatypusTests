/* global P */

/**
 * 
 * @author Марат
 * @constructor
 */
function InvokeLaterDelayedClient() {
    var self = this, model = P.loadModel(this.constructor.name);

    this.execute = function (aOnSuccess) {
        var proxy = new P.ServerModule('InvokeLaterDelayedTest');
        proxy.execute(100, function(){
            aOnSuccess();
        });
    };
}
