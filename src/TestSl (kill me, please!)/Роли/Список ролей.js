/**
 * @name 126217656549045
*/
function btnSave_onClick(ev)
{
 model.save();	
}



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
  modalResult = escape;	
}

function windowClosing(ev)
{
  	if (model.modified && confirm('Сохранить изменения?', form.title))
		model.save();	
}

function btnDelete_onClick(ev)
{
  if (confirm('С этой ролью могут быть связаны другие записи. Удалить роль?'))
     DS_RoleList.deleteRow();	
}

function btnClose_actionPerformed(ev)
{
  form.close();	
}