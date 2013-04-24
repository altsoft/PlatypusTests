/**
 * @name 124764446353581024
*/
const FORM_ID = 124748782000516435;
var internalFrame = null;
function btnAddFrame_actionPerformed(ev)
{
	var frameRunner = new FormRunner(FORM_ID);
	frameRunner.showInternalFrame(desktop);
	java.lang.System.out.println("Showed internal frame");
	internalFrame = frameRunner.getInternalFrame(desktop);
	internalFrame.resizable = true;
	internalFrame.maximizable = true;
	internalFrame.closable = true;
	internalFrame.iconifiable = true;
}

function btnCreateEmpty_actionPerformed(ev)
{
	internalFrame = new javax.swing.JInternalFrame();
	desktop.add(internalFrame);
	internalFrame.title = "Empty internal frame";
	internalFrame.resizable = true;
	internalFrame.visible = true;
	internalFrame.setSize(640, 480);
}


function btnRestoreSize_actionPerformed(ev)
{
}


function btnFrame_actionPerformed(ev)
{
	var frameRunner = new FormRunner(FORM_ID);
	frameRunner.show();
}

function btnDialog_actionPerformed(ev)
{
	var frameRunner = new FormRunner(FORM_ID);
	frameRunner.showModal();
}
