/**
 * @name 126269632292257
*/
function btnAddCurrentUser_onClick(ev)
{
AddedUserID  =  DS_UnlinkedUsers.USR_ID;
AddedUserName  =  DS_UnlinkedUsers.USR_NAME;
AddedUserPassword  = DS_UnlinkedUsers.USR_PASSWD;

DS_UnlinkedUsers.deleteRow();
DS_Users.insertSingleRow(DS_Users.md.USR_ID,AddedUserID, DS_Users.md.USR_GROUP_ID, DS_UserGroups.USER_GROUPS_ID,
                                                    DS_Users.md.USR_NAME, AddedUserName, DS_Users.md.USR_PASSWD, AddedUserPassword);
                                                    
var UserListLocator = DS_UserList.createLocator(DS_UserList.md.USR_ID);
if (UserListLocator.find(AddedUserID))
  {
   if (UserListLocator.first())
     {
      DS_UserList.USR_GROUP_ID =  DS_UserGroups.USER_GROUPS_ID;
     }
  }
	
}

function btnRemoveCurrentUser_onClick(ev)
{
 RemovedUserID  =  DS_Users.USR_ID;
 RemovedUserName  =  DS_Users.USR_NAME;
 RemovedUserPassword  = DS_Users.USR_PASSWD;

  DS_Users.deleteRow();
  DS_UnlinkedUsers.insertSingleRow(DS_UnlinkedUsers.md.USR_ID, RemovedUserID, DS_UnlinkedUsers.md.USR_GROUP_ID,null, 
                                                                      DS_UnlinkedUsers.md.USR_NAME, RemovedUserName, DS_UnlinkedUsers.md.USR_PASSWD, RemovedUserPassword );
 
var UserListLocator = DS_UserList.createLocator(DS_UserList.md.USR_ID);
if (UserListLocator.find(RemovedUserID))
  {
   if (UserListLocator.first())
     {
      DS_UserList.USR_GROUP_ID =  null;
     }
  }	
}

function btnAddAllUsers_onClick(ev)
{
  DS_UnlinkedUsers.first();
  var UserListLocator = DS_UserList.createLocator(DS_UserList.md.USR_ID);
  while(!DS_UnlinkedUsers.eof())
        {
          AddedUserID  =  DS_UnlinkedUsers.USR_ID;
     //     AddedUserName  =  DS_UnlinkedUsers.USR_NAME;
     //     AddedUserPassword  = DS_UnlinkedUsers.USR_PASSWD;
          DS_Users.insertSingleRow(DS_Users.md.USR_ID,DS_UnlinkedUsers.USR_ID, DS_Users.md.USR_GROUP_ID, DS_UserGroups.USER_GROUPS_ID,
                                                    DS_Users.md.USR_NAME, DS_UnlinkedUsers.USR_NAME, DS_Users.md.USR_PASSWD, DS_UnlinkedUsers.USR_PASSWD);
          DS_UnlinkedUsers.deleteRow(); 
          if (UserListLocator.find(AddedUserID))
             {
              if (UserListLocator.first())
                {
                   DS_UserList.USR_GROUP_ID =  DS_UserGroups.USER_GROUPS_ID;
                }
            }
       }
}

function btnRemoveAllUsers_onClick(ev)
{
  DS_Users.first();
  var UserListLocator = DS_UserList.createLocator(DS_UserList.md.USR_ID);
  while (!DS_Users.eof())
         {
           RemovedUserID  =  DS_Users.USR_ID;
      //    RemovedUserName  =  DS_Users.USR_NAME;
      //    RemovedUserPassword  = DS_Users.USR_PASSWD;
           DS_UnlinkedUsers.insertSingleRow(DS_UnlinkedUsers.md.USR_ID,DS_Users.USR_ID, DS_UnlinkedUsers.md.USR_GROUP_ID,null, 
                                                                      DS_UnlinkedUsers.md.USR_NAME,DS_Users.USR_NAME, DS_UnlinkedUsers.md.USR_PASSWD,DS_Users.USR_PASSWD );
           DS_Users.deleteRow();
           if (UserListLocator.find(RemovedUserID))
             {
               if (UserListLocator.first())
                 {
               DS_UserList.USR_GROUP_ID =  null;
                }
             }	
         }          	
}

function actionPerformed(ev)
{
  form.close();	
}


function btnSave_actionPerformed(ev)
{
  DS_UserList.save();
  DS_Users.requery();
  DS_UnlinkedUsers.requery();
  	
}

function windowClosing(ev)
{
 if (model.modified)
   {
    if (confirm('Сохранить изменения?', form.title))
       {
        DS_UserList.save();
    //    DS_Users.requery();
    //    DS_UnlinkedUsers.requery();
       }
   
   }	
}