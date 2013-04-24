/**
 * @name 126217859753436
*/

function btnRefresh_onClick(ev)
{
 model.requery();	
}

function actionPerformed(ev)
{
 modalResult = ok;
 form.close();	
}

function windowOpened(ev)
{
//	modalResult = escape;	
}



function btnSave_onClick(ev)
{
// DS_Access.save();
 model.save();	
}

function FORM_ID_selectValue()
{
	var selector = new EntitySelector();
	selector.selection =  DS_Access.FORM_ID;
	var selectedEntity = selector.selectEntityFiltered(new Array(selector.ET_FORM), form , "Выбор формы");
//	alert(selectedEntity);
	if (selectedEntity != null)
		return selectedEntity ;
}

function windowClosing(ev)
{
	if (model.modified && confirm('Сохранить изменения?', form.title))
		model.save();
}

function btnSelectAll_onClick(ev)
{
   var SelectedRows = dbgAccess.getSelection();
                  DS_Access.first();
                 while (!DS_Access.eof())
                         {
                           SelectedRows.add(DS_Access.ACCESS_LIST_ID);
                           DS_Access.next();
                         }	
}

function btnUnselectAll_onClick(ev)
{
   var SelectedRows = dbgAccess.getSelection();
                DS_Access.first();
                 while (!DS_Access.eof())
                         {
                           SelectedRows.remove(DS_Access.ACCESS_LIST_ID);
                           DS_Access.next();
                         }
}




function btnClose_actionPerformed(ev)
{
  form.close();	
}
function FORM_ID_selectValue() {//GEN-FIRST:event_FORM_ID_selectValue
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_FORM_ID_selectValue
