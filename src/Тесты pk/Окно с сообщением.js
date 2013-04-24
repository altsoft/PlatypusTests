/**
 * @name 124748782000516432
*/
function btnClose_actionPerformed(ev)
{
	form.close();
}

function rbResultOk_actionPerformed(ev)
{
	if (form.rbResultOk.selected)
	{
		modalResult = "ok";
	}
}

function rbResultCancel_actionPerformed(ev)
{
	if (form.rbResultCancel.selected)
	{
		modalResult = "cancel";
	}
}

function btnCancel_actionPerformed(ev)
{
	modalResult = "cancel";
	form.close();
}

function btnOk_actionPerformed(ev)
{
	modalResult = "ok";
	form.close();
}

/*
function close()
{
	var window = getWindow(form);
	if (window != null)
		window.visible = false;
}

function getWindow(formComponent)
{
	var internalFrameClass = java.lang.Class.forName("javax.swing.JInternalFrame"),
	    dialogClass = java.lang.Class.forName("javax.swing.JDialog"),
	    frameClass = java.lang.Class.forName("javax.swing.JFrame");
	var parent = formComponent.parent;
	while (parent != null)
	{
		var isWindow = false;
		if (internalFrameClass.isInstance(parent) || frameClass.isInstance(parent) || dialogClass.isInstance(parent))
			return parent;
		parent = parent.parent;
	}
	return null;
}
*/
function root_windowClosed(ev)
{
java.lang.System.out.println('root_windowClosed');
	//alert('root_windowClosed', form.title);
}

function root_windowClosing(ev)
{
java.lang.System.out.println('root_windowClosing');
	//alert('root_windowClosing', form.title);
}

function root_windowOpened(ev)
{
java.lang.System.out.println('root_windowOpened ('+dsOrders.size+')');
	//alert('root_windowOpened ('+dsOrders.size+')', form.title);
	form.title = 'Загловок Runtime';
	form.icon = Icons.load('battery-full.png');
}