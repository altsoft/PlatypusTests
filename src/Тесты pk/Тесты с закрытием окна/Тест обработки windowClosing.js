/**
 * @name 125178739600899
*/
function windowClosing(ev)
{
	alert('Closing');
	var confirmed = confirm("Действительно закрыть окно?", 'Закрытие окна');
	if (confirmed)
	{
		form.window.dispose();
	}
}

function windowClosed(ev)
{
	alert('Closed');
}

function windowDeactivated(ev)
{
}

function windowActivated(ev)
{
	//form.window.defaultCloseOperation = javax.swing.WindowConstants.DO_NOTHING_ON_CLOSE;
}