/**
 * @name 130518572153150
*/
Select * 
From TRANS.ADRESSES t
 Where (:parent is null and t.PARENT is null) or :parent = t.PARENT