/**
 * @module task
 * @name task
 * Platypus module script.
 * Script may be used as library, form or report module, server module and etc.
 */

/**
 * Резидентный серверный модуль.js
 *
 * Created on 23.03.2012, 12:23:45
 */


/**
 *
 * @author mg
 */

var j = 0; 

function testMethod()
{
    return 'test result'+(j++);
}

function testModuleGet()
{
    var m = Modules.get(133249636927215);
}

function testModuleCreate()
{
    var m = new Module(133249639632386);
}