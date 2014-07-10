/**
 * Module functions is avaliable to every user from other modules, but not from network
 * @name a136255099211989
 * @author vv
 */
function UnsecureNonPublicModule() {

    var self = this;

    self.test = function() {
        P.Logger.info("test");
        return "test";
    };

    /**
     * @rolesAllowed role1
     */
    self.test = function() {
        return "test";
    };
}