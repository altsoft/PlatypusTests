/**
 * @name 124651465442179632
*/
var pk=8;

function btnNewRecord_onClick(ev)
{
	orders.insertSingleRow();	
}

function btnDelRecord_onClick(ev)
{
    orders.enqueueUpdate();
    model.save();
    orders.deleteRow();
}

function btnRefresh_onClick(ev)
{
	orders.requery();
}

function orders_beforeInsert()
{
	orders.ORDER_ID = pk++;
}