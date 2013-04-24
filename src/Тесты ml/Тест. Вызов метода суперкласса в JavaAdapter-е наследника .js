/**
 * @name 131772107537984
*/
function createMyObj()
{
	var lObj = new JavaAdapter(java.lang.Object, {
		toString : function() 
		{
			var lStr = this.super$toString();
			return 'MyString ' + lStr;
		}
	});
	return lObj;	
}