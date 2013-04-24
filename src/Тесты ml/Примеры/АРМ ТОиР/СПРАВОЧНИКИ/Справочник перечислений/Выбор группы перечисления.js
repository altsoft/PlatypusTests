/**
 * @name 124904892981268
*/
function btnOk_actionPerformed(ev)
{
	modalResult  = "ok";
//	isModalResult()
	close();
}

function btnCancel_actionPerformed(ev)
{
	modalResult  = "cancel";
//	isModalResult()
	close();
}

function isModalResult()
{
	if (modalResult  == ok)
		alert("Значение выбрано");
	if (modalResult  == cancel)	
		alert("Значение не выбрано");
}

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