/**
 * @name 126218128212723
*/
var AccessListID = 126217859753436;

function windowClosing(ev)
{
              try
                 {
  	   if (model.modified && confirm('Сохранить изменения?', form.title))
		model.save();	
	  }
	catch(e)
	  {
	    alert('Нельзя сохранить: возможно не соблюдена уникальность полномочия роли', form.title);
	  }	
}


function btnDeleteRole_onClick(ev)
{
   if (confirm('С этой ролью могут быть связаны другие записи. Удалить роль?'))
    Role_List.deleteRow(); 	
}

function btnSaveRole_onClick(ev)
{
  Role_List.save();	
}

function btnRefreshRole_onClick(ev)
{
  Role_List.requery();	
}

function btnAddAccess_onClick(ev)
{
               var FormAccessList = new FormRunner( AccessListID);
	 var UniqLocator = DS_RoleAccess.createLocator(DS_RoleAccess.md.ROLE_ID,DS_RoleAccess.md.ACCESS_ID);
	 if (FormAccessList.showModal() == ok)
	   {
	               dsAccessList.requery();
	               dsFormName.requery();
	               var SelectedRows = FormAccessList.dbgAccess.getSelection();
	               SelectedRows.first();
	               while (!SelectedRows.eof())
	                        {
	                         if (!UniqLocator.find(Role_List.EAS_ROLES_ID, FormAccessList.DS_Access.ACCESS_LIST_ID))
	                            {
		               DS_RoleAccess.insertSingleRow(DS_RoleAccess.md.ACCESS_ID, FormAccessList.DS_Access.ACCESS_LIST_ID);
		              }
		              
		            SelectedRows.next(); 
		          }	 			
	   }		
}

function btnSaveAccess_onClick(ev)
{
   try
  { 
   DS_RoleAccess.save();
   }
 catch(e)
  { 
   alert('Нельзя сохранить: возможно не соблюдена уникальность полномочия роли', form.title);
  }    	
}

function btnRefreshAccess_onClick(ev)
{
  DS_RoleAccess.requery();	
}

function actionPerformed(ev)
{
  form.close();	
}