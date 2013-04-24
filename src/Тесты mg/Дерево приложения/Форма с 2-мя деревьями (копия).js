/**
 * @name 126114336332234
*/
function selectValue()
{
	
}

function mnu1_onClick(ev)
{
	
}

function ghjghj_onClick(ev)
{
	
}

function hh_onClick(ev)
{
	
}

function actionPerformed(ev)
{
    java.lang.System.gc();
    var cal = Calendar.getInstance();
    var dt = new Date(2007, 0, 15);
    cal.time = dt;
    cal.time = dt;
}

function actionPerformed1(ev)
{
    entities.save();
}

function actionPerformed2(ev)
{
    dsCustomers.requery();
}

var sel = null;

function actionPerformed3(ev)
{
    if(sel != null)
    {
        sel.next();
        alert(entities.MDENT_ID, 'platypus');
    }
}

function actionPerformed4(ev)
{
    sel = gridEntities.selection;	
}

function actionPerformed5(ev)
{
    if(sel != null)
    {
        sel.prev();
        alert(entities.MDENT_ID, 'platypus');
    }
}

function gridCustomers_calcCell(rowId, colId, cell)
{
    cell.display = 'rowId: '+rowId+' colId: '+colId;
    return true;
}

function gridCustomers_CUSTOMER_NAME_calcCell(rowId, colId, cell)
{
    cell.display = 'rowId: '+rowId+' colId: '+colId;
    return true;
}

function gridCustomers_PARENT_calcCell(rowId, colId, cell)
{
    cell.display = 'rowId: '+rowId+' colId: '+colId;
    return true;
}
function gridCustomers_CUSTOMER_NAME_calcCell(aRowId, aColumnId, aCell) {//GEN-FIRST:event_gridCustomers_CUSTOMER_NAME_calcCell
// TODO Добавьте здесь свой код:
}//GEN-LAST:event_gridCustomers_CUSTOMER_NAME_calcCell

function gridCustomers_PARENT_calcCell(aRowId, aColumnId, aCell) {//GEN-FIRST:event_gridCustomers_PARENT_calcCell
// TODO Добавьте здесь свой код:
}//GEN-LAST:event_gridCustomers_PARENT_calcCell

function selectValue() {//GEN-FIRST:event_selectValue
// TODO Добавьте здесь свой код:
}//GEN-LAST:event_selectValue

function gridCustomers_calcCell(aRowId, aColumnId, aCell) {//GEN-FIRST:event_gridCustomers_calcCell
// TODO Добавьте здесь свой код:
}//GEN-LAST:event_gridCustomers_calcCell
