/**
 * Module and function level security constraint
 * @name 133300898183656
 * @module
 * @rolesAllowed role1, role2
 * @author vv
 */

function SecureFunctionReport() {

    var self = this;

    /**
     * @rolesAllowed role3
     */
    self.test = function() {
        return "test";
    };

}