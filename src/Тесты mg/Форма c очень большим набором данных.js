/**
 * @name 124703137948447024
*/
function actionPerformed(ev)
{
	alert(dsLargeData.size);
}

var sorting = null;

function actionPerformed1(ev)
{
	if(sorting == null)
		sorting = dsLargeData.createSorting(dsLargeData.md.OPTYPE, true, dsLargeData.md.OPDATE, false);
	dsLargeData.sort(sorting);
}