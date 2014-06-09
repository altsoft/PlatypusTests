/**
 * @name 130875427140021 
*/
Select t.MDENT_ID, t.MDENT_NAME, t.MDENT_PARENT_ID, 
t.MDENT_TYPE, t.MDENT_ORDER 
From MTD_ENTITIES t
 Where (:ENTITY_ID = t.MDENT_ID or :ENTITY_ID is null)
 Order by t.MDENT_NAME asc