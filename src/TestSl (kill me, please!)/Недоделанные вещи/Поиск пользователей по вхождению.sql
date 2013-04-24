/**
 * @name 126295780479277
*/
Select * 
From USER_GROUPS userGroups
 Right Outer Join MTD_USERS users on userGroups.USER_GROUPS_ID = users.USR_GROUP_ID
 Where (((users.USR_NAME Like :ENTERING1) or (users.USR_NAME Like :ENTERING2)) or (users.USR_NAME Like :ENTERING3)) or (users.USR_NAME Like :ENTERING4)
 Order by users.USR_NAME asc