/**
 * @name 126226792998869
*/
var FormUserListID = 126209050509285;
var FormAccessListID = 126217859753436;
var ModuleID = 126226040549280; 

var SelectedUserID = null;
var SelectedAccessKeyWord = null;



function btnUser_actionPerformed(ev)
{
   var FormUserList = new FormRunner(FormUserListID);
                       if (FormUserList.showModal() == ok)
                            {
                              SelectedUserID = FormUserList.DS_Users.USR_NAME;
                              JTF_User.text = SelectedUserID;
                            }	
}

function btnAccess_actionPerformed(ev)
{
   var FormAccessList = new FormRunner(FormAccessListID);
                       if (FormAccessList.showModal() == ok)
                            {
                              SelectedAccessKeyWord = FormAccessList.DS_Access.KEY_WORD;
                              JTF_Access.text = SelectedAccessKeyWord;
                            }		
}

function btnAnswer_actionPerformed(ev)
{
  var Module = new ScriptRunner(ModuleID);
  lbUser.text = Module.getCurrentUserID(); 
  
  userLocator = DS_Users.createLocator(DS_Users.md.USR_ID);
  if (userLocator.find(Module.getCurrentUserID()))
   {
    if (userLocator.first())
    lbLogin.text = DS_Users.USR_NAME;
    }

        if (Module.Permetted( SelectedAccessKeyWord, 126226792998869) == true)
            lbAnswer.text = 'Разрешено'
        else  lbAnswer.text = 'Запрещено';    	
}

function windowOpened(ev)
{
	
}