/**
 * @name 129362624525041
*/
function windowClosing(ev)
{
	if(model.modified && confirm("Сохранить изменения?"))
		model.save();
}