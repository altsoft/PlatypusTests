/**
 * Module functions is avaliable to every user from anywhere
 * @name 133189621201879
 * @public
 * @author vv
 */

function UnsecureModule() {

    var self = this;

    self.test = function() {
        java.lang.System.out.println("test");
        return "test";
    };

    /**
     * @rolesAllowed role1
     */
    self.testSecure = function() {
        return "testSecure";
    };
}