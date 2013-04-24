/**
 * @name 126224833187893
*/
var RoleListID = 126217656549045;

function btnSave_onClick(ev)
{
  try
     { 
       DS_RoleList.save();
       DS_UserRoles.save();	
     }
  catch(e)
     {
       alert('Нельзя сохранить : возможно не соблюдена уникальность роли у пользователя');
     }   
}

function btnRefresh_onClick(ev)
{
  DS_RoleList.requery();	
}

function btnAdd_onClick(ev)
{
     var FormRoleList = new FormRunner(RoleListID);
     var UniqLocator = DS_UserRoles.createLocator(DS_UserRoles.md.USER_PK,DS_UserRoles.md.ROLE_ID); 
            if (FormRoleList.showModal() == ok)
                                          {
                                            if (!UniqLocator.find(DS_Users.USR_ID, FormRoleList.DS_RoleList.EAS_ROLES_ID))
                                              {
                                               DS_RoleList.requery();
                                               DS_UserRoles.insertSingleRow(DS_UserRoles.md.ROLE_ID, FormRoleList.DS_RoleList.EAS_ROLES_ID);
                                              }
                                            else 
                                               alert('Такое полномочие у пользователя уже есть', form.title);   
                                          }
	
}

function windowClosing(ev)
{
        try
            {	
 	if (model.modified && confirm('Сохранить изменения?', form.title))
		model.save();	
           }
        catch(e)
            {
             alert('Нельзя сохранить : возможно не соблюдена уникальность роли у пользователя');
            }    		
}

function actionPerformed(ev)
{
  form.close();	
}