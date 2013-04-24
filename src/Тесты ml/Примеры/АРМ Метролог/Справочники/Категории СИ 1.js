/**
 * @name 124930070828165
*/
function btnAdd_onClick(ev)
{
	DsMTCategory.insertSingleRow();	
}

function btnDelete_onClick(ev)
{
	DsMTCategory.deleteRow();	
}

function btnRefresh_onClick(ev)
{
	DsMTCategory.requery();	
}

function btnSave_onClick(ev)
{
	DsMTCategory.save();	
}

function Grid_WORKKIND_selectValue()
{
	var DsMSKinds1_ID =  DsMSKinds1.ID;
	//var ds = DsMSKinds1;
	//alert(DsMSKinds1_ID);
	//DsMTCategory.WORKKIND = DsMSKinds1_ID;
	return DsMSKinds1.ID;
    //DsMTCategory.save();
    //DsMTCategory.requery();
	//alert("Полю <Вид> левой таблицы присвоено значение первичного ключа правой таблицы ");
}

function Grid_colWORKKIND_selectValue()
{
	return Grid_WORKKIND_selectValue();
}

function afterChange(field, oldValue, newValue)
{
	
}

function Grid_NAME_selectValue()
{
	
}

var filter = null;

function btnFilter_onClick(ev)
{
	if(filter == null)
		filter = DsMTCategory.createFilter(/*DsMTCategory.md.SHORTNAME,*/ DsMTCategory.md.WORKKIND);	
	filter.apply(/*"Э", */DsMSKinds1.ID);
}

function btnCancelFilter_onClick(ev)
{
	filter.cancel();
}
function Grid_NAME_selectValue() {//GEN-FIRST:event_Grid_NAME_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_Grid_NAME_selectValue

function Grid_colWORKKIND_selectValue() {//GEN-FIRST:event_Grid_colWORKKIND_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_Grid_colWORKKIND_selectValue
