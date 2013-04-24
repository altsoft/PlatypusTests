/**
 * @name 124575801000097808
*/
function btnDelete_onClick(ev)
{
	entities.deleteRow();
}

function btnAdd_onClick(ev)
{
	entities.insertSingleRow();
}

function btnRefresh_onClick(ev)
{
	entities.requery();
	filter = null;	
}

function btnSave_onClick(ev)
{
	entities.save();
}

function MDENT_NAME_selectValue()
{
	
}

function MDENT_TYPE_selectValue()
{
	return 100;
}

function MDENT_PARENT_ID_selectValue()
{
	return 0;	
}

function afterScroll(scrolledFrom)
{
	
}

var filter = null;
//var locator = null;

function dsAppEntitiesTypes_afterScroll(scrolledFrom)
{
	if (filter == null)
		filter = entities.createFilter(entities.md.MDENT_TYPE);	
	filter.filterRowset(dsAppEntitiesTypes.MDENT_TYPE);
	entities.first();
//	if(locator == null)
//		locator = entities.createLocator(entities.md.MDENT_TYPE);
//	if(locator.find(dsAppEntitiesTypes.MDENT_TYPE))
//		locator.first();
}

function entities_afterChange(field, oldValue, newValue)
{
}

function btnRecolor_onClick(ev)
{
//	grid.background = Color.blue;
	grid.background = new Color(0.1,0.20,0.30);

	var dt = new Date(2,2,2006);
	var cl = Calendar.getInstance();
	cl.setTime(dt);
	alert(Calendar.DAY_OF_YEAR);
}

function btnCancelFilter_onClick(ev)
{
	filter.cancelFilter();
}
function MDENT_PARENT_ID_selectValue() {//GEN-FIRST:event_MDENT_PARENT_ID_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_MDENT_PARENT_ID_selectValue

function MDENT_NAME_selectValue() {//GEN-FIRST:event_MDENT_NAME_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_MDENT_NAME_selectValue

function MDENT_TYPE_selectValue() {//GEN-FIRST:event_MDENT_TYPE_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_MDENT_TYPE_selectValue
