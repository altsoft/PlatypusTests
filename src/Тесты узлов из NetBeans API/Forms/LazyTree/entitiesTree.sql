/**
 * @name 130512041184355
*/
Select * 
From MTD_ENTITIES t
 Where ((:parent is null
 and t.MDENT_PARENT_ID is null) or (:parent = t.MDENT_PARENT_ID)) and :toExclude <> t.MDENT_TYPE