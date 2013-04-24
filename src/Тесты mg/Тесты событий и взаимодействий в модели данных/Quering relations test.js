/**
 * @name 128049741937589
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