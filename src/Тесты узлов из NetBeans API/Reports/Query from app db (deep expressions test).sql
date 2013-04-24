/**
 * @name 130307092846805
*/
Select * 
From dual as t Inner Join eas.access_list as al on t.DUMMY = al.KEY_WORD
 Where t.DUMMY = al.ACCESS_NAME