/**
 * @name 124885636823486
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
}

function actionPerformed1(ev)
{
	dsCustomers.save();
}

function actionPerformed2(ev)
{
	dsCustomers.requery();
}

var sorting1 = null;

function actionPerformed3(ev)
{
	if(sorting1 == null)
		sorting1 = dsCustomers.createSorting(dsCustomers.md.CUSTOMER_ADDRESS, false, dsCustomers.md.CUSTOMER_NAME, true);
	dsCustomers.sort(sorting1);
}
function selectValue() {//GEN-FIRST:event_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_selectValue
