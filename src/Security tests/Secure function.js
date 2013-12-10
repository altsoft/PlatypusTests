/**
 * Module and function level security constraint
 * @name 133189629266067
 * @module
 * @public
 * @rolesAllowed role1, role2
 * @author vv
 */

function SecureFunctionModule() {

    var self = this;

    /**
     * @rolesAllowed role3
     */
    self.test = function() {
        return "test";
    }

}