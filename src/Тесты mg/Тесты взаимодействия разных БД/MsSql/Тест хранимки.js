/**
 * @name 128774879807841
*/
function actionPerformed(ev)
{
	var q = model.createQuery(128774353782853);
	q.execute();
	params.returnCode = q.params.ReturnCode.value;
	model.deleteQuery(q);
}