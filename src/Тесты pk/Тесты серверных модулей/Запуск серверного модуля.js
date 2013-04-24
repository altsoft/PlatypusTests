/**
 * @name 125532805095616
*/
function btnRemote_actionPerformed(ev)
{
	var runner = new com.eas.client.scripts.ServerScriptRunner(125532786173476);
	var x=null;
	try {
		x = runner.createFile("/tmp/createFile");
	} finally {
		runner.dispose();
	}
	alert(x);
}



function btnAddition_actionPerformed(ev)
{
	var runner = new com.eas.client.scripts.ServerScriptRunner(125532786173476);
	var x=null;
	try {
		for (var i=0; i < 10000; i++)
			x = runner.addition(i, 4);
	} finally {
		runner.dispose();
	}
	alert(x);
}

function btnUnknown_actionPerformed(ev)
{
	var runner = new com.eas.client.scripts.ServerScriptRunner(125532786173476);
	var x=null;
	try {
		x = runner.WILL_THROW_EXCEPTION(2, 4);
	} finally {
		runner.dispose();
	}
	alert(x);
}

function btnBgTask1_actionPerformed(ev)
{
	var runner = new com.eas.client.scripts.ServerScriptRunner("bgtask1");
	var phrase = runner.saySomething();
	alert(phrase);
}