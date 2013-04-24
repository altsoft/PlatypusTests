/**
 * @name 126209050509285
*/
var form_two = new FormRunner(125682752737836);
Form_Cashe_User_ID = 126215578181494;
var Form_Cashe_User = null;


function btn_Add_User_onClick(ev)
{
   Form_Cashe_User = new FormRunner(Form_Cashe_User_ID);
   if (Form_Cashe_User.showModal() == ok)
      {
       DS_Users.insertSingleRow(DS_Users.md.USR_NAME, Form_Cashe_User.JTF_EditUserName.text,
                                                           DS_Users.md.USR_PASSWD,Form_Cashe_User.JPF_EditUserPassword.text);
      var CurrentRecordID = DS_Users.USR_NAME;                                                     
      var SortingUsers = DS_Users.createSorting(DS_Users.md.USR_NAME, true);  
      DS_Users.sort(SortingUsers);                                                      
      DS_Users.save();
     
      var LocatorCurrentRecordID = DS_Users.createLocator(DS_Users.md.USR_NAME);
      LocatorCurrentRecordID.find(CurrentRecordID);
      LocatorCurrentRecordID.first();                                          
                                                         
 //      fdmUsers.DS_Users.beginInsert();
 //      fdmUsers.DS_Users.USR_NAME = Form_Cashe_User.JTF_EditUserName.text;
 //      fdmUsers.DS_Users.USR_PASSWD = Form_Cashe_User.JPF_EditUserPassword.text;
 //      fdmUsers.DS_Users.insertRow();
 //      fdmUsers.DS_Users.endInsert();
      }	
}

function windowOpened(ev)
{
var SortingUsers = DS_Users.createSorting(DS_Users.md.USR_NAME, true);
 DS_Users.sort(SortingUsers); 
 modalResult = escape; 
}

function btn_Edit_User_onClick(ev)
{
 Form_Cashe_User = new FormRunner(Form_Cashe_User_ID);
 Form_Cashe_User.JTF_EditUserName.text = DS_Users.USR_NAME;
 Form_Cashe_User.JPF_EditUserPassword.text = DS_Users.USR_PASSWD; 
 Form_Cashe_User.JPF_PasswordConfirm.text = DS_Users.USR_PASSWD;
  if (Form_Cashe_User.showModal() == ok)
   {
    DS_Users.USR_NAME =  Form_Cashe_User.JTF_EditUserName.text;
    DS_Users.USR_PASSWD = Form_Cashe_User.JPF_EditUserPassword.text;
   } 	
   model.save();
}

function btn_Refresh_Users_onClick(ev)
{
	model.requery();
}

function btn_Save_User_onClick(ev)
{
	model.save();
}



function actionPerformed(ev)
{
  modalResult = ok;
  form.close();	
}

function windowClosing(ev)
{
  	if (model.modified && confirm('Сохранить изменения?', form.title))
		model.save();	
}


function btnRefreshUserGroup_onClick(ev)
{
  model.requery();	
}

function btnSaveUserGroup_onClick(ev)
{
  model.save();	
}



function btnDeleteUserGroup_onClick(ev)
{
  if (confirm('При удалении группы пользователя удалятся все пользователи этой группы. Удалить группу пользователей?'))
  	DS_UserGroups.deleteRow();
}



function btnClose_actionPerformed(ev)
{
  form.close();	
}

function btn_Search_User_onClick(ev)
{
  DS_UserGroups.first();
  UserSearchLocator = DS_Users.createLocator(DS_Users.md.USR_NAME);
  while (!DS_UserGroups.eof())
         {
             if (UserSearchLocator.find('Чешихин'))
                {
                   UserSearchLocator.first()
                   while (!UserSearchLocator.afterLast)
                    {         
                     dbg_Users.makeVisible(DS_Users.USR_ID);
                     if (confirm('Дальше?', 'ПОИСК'))
                         {
                           UserSearchLocator.next();
                           if (UserSearchLocator.afterLast)
                             {
                               alert('Больше ничего не найдено','ПОИСК');
                               UserSearchLocator.prev();
                               return null;
                             }
                         }
                     else return null;    
                    }  
               }
           DS_UserGroups.next();    
         }      	
         
}

function DS_UserGroups_afterScroll(scrolledFrom)
{
  FOR_GROUP = DS_UserGroups.USR_GROUP_ID;	
}