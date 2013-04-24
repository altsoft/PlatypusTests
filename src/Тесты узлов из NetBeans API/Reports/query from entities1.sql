/**
 * @name 130198481999681
*/
Select entities.MDENT_ID, entities.MDENT_NAME, entities.MDENT_TYPE, 
entities.MDENT_CONTENT_TXT_SIZE, entities.MDENT_CONTENT_TXT_CRC32 
From MTD_ENTITIES entities
 Where :appElementType = entities.MDENT_TYPE