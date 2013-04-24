/**
 * @name 126226040549280
*/
var userLocator = null;
function getCurrentUserID()
{
    var userID = false;
    if(userLocator == null)
        userLocator = dsUsers.createLocator(dsUsers.md.USR_NAME);
    if (userLocator.find(Client.loginPrincipal.userName))
    {
        if(userLocator.first())
            userID = dsUsers.USR_ID;
    }
	
    return userID;
}

function Permetted(Key_Word, FormID)
{
    Parameter_User_ID = getCurrentUserID();
    Parameter_Key_Word = Key_Word;
    Parameter_Form_ID = FormID;

    if (DS_AccessValid.size > 0)
        return true                               
    else
        return false;     
             
}