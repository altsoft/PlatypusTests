/**
 * Module functions is avaliable to every user from anywhere
 * @name 133189621201879
 * @public
 * @author vv
 */

function test() {
    java.lang.System.out.println("test");
    return "test";
}

/**
 * @rolesAllowed role1
 */
function testSecure() {
    return "test";
}