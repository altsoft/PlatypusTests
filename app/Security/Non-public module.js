/**
 * Module functions is avaliable to every user from other modules, but not from network
 * @author vv
 */
function NonPublicModule() {

    var self = this;

    self.test = function() {
        P.Logger.info("test");
        return "test";
    };
}