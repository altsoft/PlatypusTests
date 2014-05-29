/**
 * Module level security constraint
 * @name 133189149718000
 * @module
 * @rolesAllowed role1, role2
 * @public
 * @author vv
 */

function SecureModule() {

    var self = this;

    self.test = function() {
        return "test";
    };

}