function Dog() {
    this.run = function () {
    };
}

/**
 * 
 * @author mg
 * @name ORM_Relations_Test
 * @constructor
 */
function ORM_Relations_Test() {
    var self = this,
            model = P.loadModel(this.constructor.name);

    self.execute = function () {
        var appElements1 = model.appElements1;
        appElements1.elementClass = Dog;
        appElements1.onRequeried = function (event) {
            P.Logger.info(appElements1.length);
            var processed = 0;
            var processed1 = 0;
            appElements1.forEach(function (aAppElement) {
                if (aAppElement.run != Dog) {
                    throw 'ORM data element methos violation!';
                }
                var ch = aAppElement.children;
                var ch1 = aAppElement.children;
                var ch2 = aAppElement.children;
                if (!((ch == ch1) && (ch == ch2)))
                    throw "ORM equality violation for collection property 'children'!";
                var par = aAppElement.parent;
                var par1 = aAppElement.parent;
                var par2 = aAppElement.parent;
                if (!((par == par1) && (par == par2)))
                    throw "ORM equality violation for collection property 'parent'!";
                if (aAppElement.parent != null) {
                    var _par = aAppElement.parent;
                    var oldChildrenCount = _par.children.length;
                    aAppElement.parent = null;
                    var newChildrenCount = _par.children.length;
                    aAppElement.parent = _par;
                    var newestChildrenCount = _par.children.length;
                    if (oldChildrenCount != newestChildrenCount)
                        throw 'ORM changes results violation with property "parent"';
                    if (newChildrenCount >= oldChildrenCount || newChildrenCount >= newestChildrenCount)
                        throw 'Another ORM changes results violation with property "parent"';
                    if (_par != aAppElement.parent)
                        throw 'Yet another ORM changes results violation with property "parent"'
                    processed1++;
                }
                processed++;
            });
            P.Logger.info(processed + " application elements processed. " + processed1 + " of them with scalar property 'parent' editing and collections review.");
            if (self.onSuccess)
                self.onSuccess(processed + processed1);
        };
    };
    model.requery();
}