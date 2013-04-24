/**
 * @name 126226468456987
*/
Select * 
From USER_ROLES roles
 Inner Join ROLE_ACCESS_LIST roleAcl on roles.ROLE_ID = roleAcl.ROLE_ID
 Inner Join ACCESS_LIST acl on roleAcl.ACCESS_ID = acl.ACCESS_LIST_ID
 Where ((:USER_ID = roles.USER_PK)
 and (:KEY_WORD = acl.KEY_WORD))
 and (roles.ENABLED = 1)