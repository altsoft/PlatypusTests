/**
 * @name 124755580681294416
*/
const id1 = 124757805065673008, // форма "Категории СИ"
            id2 = 124757448139094576, // форма "Виды метрологического обслуживания"
            id3 = 124764407890616608, // форма "Наименования СИ"
            id4 =  124766266298410384; //Измеряемые величины
function btnFormClose_onClick(ev)
{
	close();
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

function showForm(FormID, aTitle)
{
	var popupForm = new com.eas.client.forms.FormRunner(FormID);
	popupForm.show();
	var frame = popupForm.getFrame();
	popupForm.visible;
	frame.title = aTitle;
}

function showFormAsInternal(FormID, aTitle)
{
	var frameRunner = new FormRunner(FormID);
	frameRunner.showInternalFrame(Desktop);
	var internalFrame = frameRunner.getInternalFrame(Desktop);
	internalFrame.setTitle(aTitle);
	internalFrame.setResizable(true);
	internalFrame.maximizable = true;
	internalFrame.closable = true;
	internalFrame.iconifiable = true;
}

function mnuMTCategory_onClick(ev)
{
//	showForm(id1, "Категории СИ");	
	showFormAsInternal(id1, "Категории СИ");
}

function mnuMSKinds_onClick(ev)
{
//	showForm(id2, "Виды МО");
	showFormAsInternal(id2, "Виды МО");
}

function mnuMTNames_onClick(ev)
{
	showFormAsInternal(id3, "Наименования СИ");	
}

function mnuMeasurands_onClick(ev)
{
	showFormAsInternal(id4, "Измеряемые величины");	
	
}