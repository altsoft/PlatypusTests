/**
 * @name 124843976937537232
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
	entities.save();
}

function actionPerformed2(ev)
{
	dsCustomers.requery();
}

var customersLocator = null;

function gridCustomers_colVeer_calcCell(rowId, colId, cell)
{
	if(customersLocator == null)
		customersLocator = dsCustomers.createLocator(dsCustomers.md.CUSTOMER_ID);
	if(customersLocator.find(rowId) && customersLocator.first())
	{
		var parentId = dsCustomers.PARENT;
		if(customersLocator.find(parentId) && customersLocator.first())
		{
			if(dsCustomers.CUSTOMER_NAME == 'Microsoft')
			{
				if(cell.data != null)
					cell.data += ' подлый ';
				else
					cell.data = ' подлый ';
				return true;
			}
		}
	}
	if(cell.data == null)
	{
		cell.data = '<.>';
		return true;
	}
}
function selectValue() {//GEN-FIRST:event_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_selectValue

function gridCustomers_colVeer_calcCell(aRowId, aColumnId, aCell) {//GEN-FIRST:event_gridCustomers_colVeer_calcCell
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_gridCustomers_colVeer_calcCell
