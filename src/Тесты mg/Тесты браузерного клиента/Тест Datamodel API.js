/**
 * Platypus module script.
 * @name DatamodelAPI
 */

function test_a(){
    // some rowsets
    var m = measurands;
    var prm = params;
    // parameters
    var p1 = Param1;
    p1 = params.Param1;//default row syntax
    p1 = params[0].Param1;// array-like syntax    
    // metadata
    var prmMd = md;
    prmMd = params.md;    
    var p1Md = md.Param1;
    p1Md = params.md.Param1;
    p1Md = params.md[0];    
    Logger.info("Test 'a' passed");
}

function test_u(){
    test();
    var u = units;
    var uMd = u.md;
    var uMdIsBasic = u.md.ISBASIC;
    uMdIsBasic = u.md[5];
    var uMdLength = u.md.length;
    Logger.info("Test 'u' passed");
    return uMdLength;
}
function test_b(){
    /*
    var a = assets;
    a.first();
    var a1Field4Value = a.FIELD4;//default row syntax
    var a1 = a.getRow(1);//table-pattern row syntax
    a1Field4Value = a1.FIELD4; 
    a1 = a[0];// array-like syntax
    a1Field4Value = a1.FIELD4; 
    var aLenth = a.length;

    a.insert(4, 'true');
    a.insert(4, 0.56);
    a.insert(4, false);
    a.insert(4, new Date());
    a.insert(4, null);
    */
    /*
    a.insert(a.md.FIELD4, 'true');
    a.insert(a.md.FIELD4, 0.56);
    a.insert(a.md.FIELD4, false);
    a.insert(a.md.FIELD4, new Date());
    a.insert(a.md.FIELD4, null);
    */
   
   
    /*
    var oneFieldDefDirection = assets.createSorting(a.md.FIELD5);
    a.sort(oneFieldDefDirection);
    var oneField = assets.createSorting(a.md.FIELD5, false);
    a.sort(oneField);
    var oneColIndexDefDirection = assets.createSorting(5);
    a.sort(oneColIndexDefDirection);
    var oneColIndex = assets.createSorting(5, false);
    a.sort(oneColIndex);
    a.sort(function(asset1, asset2){ return 0;});
    */
   
    /*
    var lengthBefore = assets.length;
    var f = assets.createFilter(assets.md.FIELD4, assets.md.FIELD6);
    f.apply("rmrjtjgicbxbdk", 877834.444);
    var lengthAfter = assets.length;
    if(f.isApplied())
      f.cancel();
    var lengthAfterAfter = assets.length;
    return [lengthBefore, lengthAfter, lengthAfterAfter].toString();
    */
    /*
   var foundIds = [];
   var loc = assets.createLocator(assets.md.FIELD4);
   var found = loc.find('fg67');
   if(found)
   {
       var i=0;
       while(loc.next())
       {
           var assetsId1 = assets.ID;
           var assetsRow = loc.getRow(i++);
           var assetsId2 = assetsRow.ID;
           foundIds.push(" assetsId1: "+assetsId1 + " assetsId2: "+assetsId2);           
       }
   }
   return foundIds.join("\n");
*/
    /*
   var found = assets.find(assets.md.FIELD4, 'fg67');
   var s = found.toString();
   return 'found.length: ' + found.length+' found[0]:'+found[0]+' found[0].ID:'+found[0].ID;
  */   
    /*  
   var found = assets.findById('128015357440672');// long values can't be processed by js. Rely on rowset converter.
   return 'found.length: ' + found.length+' found[0]:'+found[0]+' found.ID:'+found.ID;
*/
    /*
   // Matrix-like syntax test
  return 'assets[0][1]: '+assets[0][1]+' assets[1][1]: '+assets[1][1];
*/   
 
    /*
  // scroll to method test
  assets.beforeFirst();
  assets.scrollTo(assets[1]);
  return 'assets.rowIndex: ' + assets.rowIndex;
  */
 
    /*
  // substitues tests
 assets.substitute = units;   
 assets[0].NAME = null;
 return 'assets[0].NAME: ' + assets.NAME;// only at rowset's level
 */

    // Array methods tests

    /*
    var lengthBefore = assets.length;
    assets.pop();
    var lengthAfter = assets.length;
    assets.shift();
    var lengthAfter1 = assets.length;
    return 'lengthBefore: ' + lengthBefore + '; lengthAfter: ' + lengthAfter + '; lengthAfter1: ' + lengthAfter1;
*/   
    /*
    var lengthBefore = assets.length;
    assets.push(
        {ID:57950, NAME: "Только что вставленная запись 0"},
        {ID:57951, NAME: "Только что вставленная запись 1"},
        {ID:57952, NAME: "Только что вставленная запись 2"}
    );
    var lengthAfter = assets.length;
    assets.unshift(
        {ID:57953, NAME: "Только что вставленная запись 3"},
        {ID:57954, NAME: "Только что вставленная запись 4"},
        {ID:57955, NAME: "Только что вставленная запись 5"}
    );
    var lengthAfter1 = assets.length;
    return 'lengthBefore: ' + lengthBefore + '; lengthAfter: ' + lengthAfter + '; lengthAfter1: ' + lengthAfter1;
    */
   
    /*
   var sBefore = assets.toString();
   assets.splice(0);
   var sAfter = assets.toString();
   return 'sBefore: '+sBefore+'; sAfter: '+sAfter;
   */
  
    var sBefore = assets.toString();
    var purged = assets.splice(0, assets.length, 
    {
        ID:57950, 
        NAME: "Только что вставленная запись 0"
    },

    {
        ID:57951, 
        NAME: "Только что вставленная запись 1"
    },

    {
        ID:57952, 
        NAME: "Только что вставленная запись 2"
    }
    );
    var sAfter = assets.toString();
    return 'sBefore: '+sBefore+'; sAfter: '+sAfter;   
  
/*
   var sBefore = assets + "";//.toString();
   assets.sort(function(r1, r2){
        if(r1.NAME > r2.NAME) 
            return 1;
        else if(r1.NAME < r2.NAME)
            return -1;
        else
            return 0;
       });
   var sAfter = assets.toString();
   return 'sBefore: '+sBefore+'; sAfter: '+sAfter;
    */
/*
  var concated = assets.concat(
        ["Только что вставленная запись 0",
        "Только что вставленная запись 1",
        "Только что вставленная запись 2"]
    );
   return concated.toString();
  */
 
/*
  return assets.lastIndexOf(assets[1]) + "";
    */
/*  
 var filtered = assets.filter(
    function(asset, index, arr){
        return asset.NAME == 'building1';
    });
    return 'filtered.length: '+filtered.length;
*/
/*
   var assetsNames = "";
   assets.forEach(function(asset, index, arr){
       assetsNames += ", "+asset.NAME;
   });
   return assetsNames;
    */
/*
  var res = assets.every(function(asset, index, arr){
      return asset.NAME == 'building1' || asset.NAME == 'building2';      
  }) + "";
  return res;
    */

/*
  var res = assets.some(function(asset, index, arr){
      return asset.NAME == 'building1';      
  }) + "";
  return res;
    */
/*
  var mapped = assets.map(function(asset, index, arr){
      if(asset.NAME == 'building1')
          return "b1111";
      else if (asset.NAME == 'building2')
          return "b2222";
      else
          return "unknown";
  }).join(", ");
    return mapped;
    */
/*
 var reduced = assets.reduce(function(previousValue, currentValue, index, array){
     return {NAME: previousValue.NAME + " " + currentValue.NAME};
 } , {NAME: "init"}).NAME;
 return reduced;
    */
/*
 var reduced = assets.reduceRight(function(previousValue, currentValue, index, array){
     return {NAME: previousValue.NAME + " " + currentValue.NAME};
 } , {NAME: "init"}).NAME;
 return reduced;
 */
}