/**
 * @name 124878952207822
*/
Select enumerations.NAME as GROUPNAME, T_ENUMERATIONS_1.NAME as NAME 
From EAS.ENUMERATIONS T_ENUMERATIONS_1
 Inner Join EAS.ENUMERATIONS enumerations on T_ENUMERATIONS_1.GROUP_ID = enumerations.ID
 Order by enumerations.NAME asc