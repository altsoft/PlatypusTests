/**
 * Module functions is avaliable to every user from other modules, but not from network
 * @name a136255099211989
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