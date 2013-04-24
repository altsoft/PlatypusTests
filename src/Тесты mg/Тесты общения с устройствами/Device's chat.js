/**
 * @name 129163130932834
*/
var sensors = new ServerScript("sensors");
var requestStyle = new javax.swing.text.SimpleAttributeSet();
javax.swing.text.StyleConstants.setForeground(requestStyle, java.awt.Color.gray);
var answerStyle = new javax.swing.text.SimpleAttributeSet();
javax.swing.text.StyleConstants.setForeground(answerStyle, new java.awt.Color(0, 157/255, 0));
var timer = new java.util.Timer();

params.imei = "354776039107120";

function btnRecieve_onClick(ev)
{
	recieve();
}

function btnClose_actionPerformed(ev)
{
	form.close();
}

function btnSend_actionPerformed(ev)
{
	send();
}

function recieve()
{
	if(params.imei != null)
	{
		var answer = null;
		do
		{
			var answer = sensors.poll(params.imei);
			if(answer != null && answer != undefined)
				txtDialog.document.insertString(txtDialog.document.length, "A >> "+answer+"\n", answerStyle);
			else
				answer = null;
		}while(answer != null)
	}
}

function send()
{
	if(params.imei != null)
	{
		if(params.request != null && params.request != "")
		{
			sensors.push(params.imei, params.request);
			if(params.request != null)
				txtDialog.document.insertString(txtDialog.document.length, "R >> "+params.request+"\n", requestStyle);
			params.request = null;
		}
	}
}

function model_afterChange(field, oldValue, newValue)
{
	if(field == params.md.request)
	{
		send();
	}
}

function btnClear_onClick(ev)
{
	txtDialog.getDocument().remove(0, txtDialog.getDocument().getLength());
}

function windowOpened(ev)
{
	timer.schedule(new ScriptTask(recieve), 3*1000, 1500);
}

function windowClosed(ev)
{
	timer.cancel();
}