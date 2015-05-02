/**
 * 
 * @author mg
 * @constructor
 */
function ResourceLoadTest() {
    var self = this, model = P.loadModel(this.constructor.name);

    var asyncLoaded = 0;
    self.execute = function (aOnSuccess) {
        function complete(){
            if (++asyncLoaded === 3)
                aOnSuccess();
        }
        
        if (P.agent !== P.HTML5) {
            // sync resources loading test       
            var loadedResource = P.Resource.load('Resources/resource load.model');
            if (loadedResource.length !== 249)
                throw 'loaded.length violation 1';
            var loadedPicture = P.Resource.load('Resources/wrench.png');
            var len = loadedPicture.length;
            if (loadedPicture.length !== 75920)
                throw 'loaded.length violation 1.1';
            var loadedFormInet = P.Resource.load('http://lh6.googleusercontent.com/-UXdNdTTGgXg/AAAAAAAAAAI/AAAAAAAAAAA/b3u7m4nqaNo/s32-c/photo.jpg');
            var len = loadedFormInet.length;
            if (loadedFormInet.length !== 1160)
                throw 'loaded.length violation 2'

            P.Resource.load('http://lh6.googleusercontent.com/-UXdNdTTGgXg/AAAAAAAAAAI/AAAAAAAAAAA/b3u7m4nqaNo/s32-c/photo.jpg', function (aLoaded) {
                if (aLoaded.length !== 1160)
                    throw 'loaded.length violation 4';
                complete();
            }, function (e) {
                P.Logger.severe(e);
            });

        } else {
            //When loading from external - must cause CORS
            P.Resource.load('http://lh6.googleusercontent.com/-UXdNdTTGgXg/AAAAAAAAAAI/AAAAAAAAAAA/b3u7m4nqaNo/s32-c/photo.jpg', function (aLoaded) {
                    throw 'loaded.length violation 4';
            }, function (e) {
                complete();
            });
        }
        // async resources loading test
        P.Resource.loadText('Resources/resource load.model', function (aLoaded) {
            if (aLoaded.length !== 249)
                throw 'loaded.length violation 3';
            complete();
        }, function (e) {
            P.Logger.severe(e);
        });
        P.Resource.load('Resources/wrench.png', function (aLoaded) {
            if (aLoaded.length !== 75920)
                throw 'loaded.length violation 3.1';
            complete();
        }, function (e) {
            P.Logger.severe(e);
        });

    };
}
