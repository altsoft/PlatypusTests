/**
 * @name 126215578181494
*/
function actionPerformed(ev)
{
  if (JPF_EditUserPassword.text == JPF_PasswordConfirm.text)
           {
             modalResult = ok;
             form.close();
           }
  else alert('Пароль не совпадает с его подтверждением');         
  	
}

function windowOpened(ev)
{
  modalResult = escape;	
}





function btnClose_actionPerformed(ev)
{
  form.close();	
}