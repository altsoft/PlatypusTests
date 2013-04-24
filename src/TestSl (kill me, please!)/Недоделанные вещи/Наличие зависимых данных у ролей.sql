/**
 * @name 126278353388225
*/
Select * 
From EAS_ROLES roles
 Inner Join USER_ROLES userRoles on roles.EAS_ROLES_ID = userRoles.ROLE_ID
 Inner Join ROLE_ACCESS_LIST roleAcls on roles.EAS_ROLES_ID = roleAcls.ROLE_ID
 Where :PARAM_ROLE_ID = roles.EAS_ROLES_ID