/**
 * @name 128049472406262
*/
function actionPerformed(ev)
{
	model.save();
}

function windowClosing(ev)
{
	if(model.modified && confirm("Сохранить изменения?", form.title))
		model.save();
}