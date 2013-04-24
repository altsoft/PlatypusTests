/**
 * @name 124636791857833168
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
	model.requery();
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
function selectValue() {//GEN-FIRST:event_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_selectValue
