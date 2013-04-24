/**
 * @name 128265640745305
*/
function actionPerformed(ev)
{
	model.save();
}

function btnRAWLoad_actionPerformed(ev)
{
	var blob = model.loadBlobFromFile(fileDialog("", false));
	if(dsRaw.empty)
		dsRaw.insert();
	dsRaw.first();
	dsRaw.FIELD_ROW = blob;
}

function btnLONG_RAWLoad_actionPerformed(ev)
{
	var blob = model.loadBlobFromFile(fileDialog("", false));
	if(dsLongRaw.empty)
		dsLongRaw.insert();
	dsLongRaw.first();
	dsLongRaw.LONGRAW_FIELD = blob;
}

function btnRAW1Load_actionPerformed(ev)
{
	var blob = model.loadBlobFromFile(fileDialog("", false));
	if(dsLongRaw.empty)
		dsLongRaw.insert();
	dsLongRaw.first();
	dsLongRaw.RAW_FIELD = blob;
}