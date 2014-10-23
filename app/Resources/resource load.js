/**
 * 
 * @author mg
 * @constructor
 */
function Resource_load() {
    var self = this, model = P.loadModel(this.constructor.name);

    var asyncLoaded = 0;
    self.execute = function () {
        if (P.agent !== P.HTML5) {
            // sync resources loading        
            var loadedReource = P.Resource.load('Resources/resource load.model');
            if (loadedReource.length !== 10)
                throw 'loaded.length violation 1';
            var loadedFormInet = P.Resource.load('http://lh6.googleusercontent.com/-UXdNdTTGgXg/AAAAAAAAAAI/AAAAAAAAAAA/b3u7m4nqaNo/s32-c/photo.jpg');
            if(loadedFormInet.length !== 10)
                throw 'loaded.length violation 2'
        }
        // async test
        P.Resource.load('Resources/resource load.model', function (aLoaded) {
            if (aLoaded.length !== 10)
                throw 'loaded.length violation 3';
            if(++asyncLoaded === 2)
                P.Logger.info('Resource_load passed');
        }, function (e) {
            P.Logger.severe(e);
        });
        P.Resource.load('http://lh6.googleusercontent.com/-UXdNdTTGgXg/AAAAAAAAAAI/AAAAAAAAAAA/b3u7m4nqaNo/s32-c/photo.jpg', function (aLoaded) {
            if (aLoaded.length !== 10)
                throw 'loaded.length violation 4';
            if(++asyncLoaded === 2)
                P.Logger.info('Resource_load passed');
        }, function (e) {
            P.Logger.severe(e);
        });
    };
}
