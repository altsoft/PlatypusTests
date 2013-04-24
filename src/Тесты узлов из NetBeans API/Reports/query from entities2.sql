/**
 * @name 130261275789586
*/
Select t.ID, t.NAME, t1.CUSTOMER_ID, 
t1.CUSTOMER_ADDRESS, t1.CUSTOMER_NAME 
From ASSET_KINDS as t, CUSTOMER as t1
 Where t.NAME is null
 and  not (t1.CUSTOMER_ID is null) or :Param1 is not null
 and :Param1 = t.NAME