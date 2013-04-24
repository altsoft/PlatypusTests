/**
 * @name 126898173850853
*/
const MODULE_ID = 126898176844183;

var mod = null;

function btnRunModule_actionPerformed(ev)
{
	if (mod == null)
		mod = new ClientScript(MODULE_ID);
	mod.test("Blah-blah!");
}