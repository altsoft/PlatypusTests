/**
 * @name 125680006417631
*/
const SCRIPT1_ID = 125679899814137;

function btnDoEntitiesQuery_actionPerformed(ev)
{
	var sr = new ScriptRunner(SCRIPT1_ID);
	alert(sr.getEntitiesSizes());
}