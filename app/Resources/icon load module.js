/**
 * 
 * @author mg
 * @constructor
 */
function Icon_load() {
    var self = this, model = P.loadModel(this.constructor.name);
    var btn = new P.Button();

    var asyncLoaded = 0;
    var asyncExpCount = 4;
    self.execute = function () {
        var isCompatible;
        if (P.agent !== P.HTML5) {
            asyncExpCount = 4;
            // sync resources loading test       
            var loadedIcon = P.Icon.load('Resources/wrench.png');
            try {
                btn.icon = loadedIcon;
            } catch (e) {
                throw 'loaded.icon violation 1';
            }
            var loadedResource = P.Resource.load('Resources/resource load.model');

            try {
                btn.icon = loadedResource;
                isCompatible = true;
            } catch (e) {
                //This is right behaviour - types are incompartible 
                isCompatible = false;
            }
            if (isCompatible) {
                throw 'loaded.icon violation types incompatible 1';
            }

            try {
                var loadedResource = P.Icon.load('Resources/resource load.model');
                isCompatible = true;
            } catch (ex) {
                //This is right behaviour - we have loaded not image 
                isCompatible = false;
            }
            if (isCompatible) {
                throw 'loaded.icon violation types incompatible 2';
            }

            var loadedFormInet = P.Icon.load('http://lh6.googleusercontent.com/-UXdNdTTGgXg/AAAAAAAAAAI/AAAAAAAAAAA/b3u7m4nqaNo/s32-c/photo.jpg');
            try {
                btn.icon = loadedIcon;
            } catch (e) {
                throw 'loaded.icon violation 2';
            }


//            try {
                isCompatible = false;
                P.Icon.load('Resources/resource load.model', function (aLoaded) {
                    //it cannot be loaded
                    isCompatible = true;
                }, function (e) {
                    isCompatible = false;
                    if (++asyncLoaded === asyncExpCount)
                        P.Logger.info('Icon_load passed');
                });
//            } catch (ex) {
//                isCompatible = false;
//
//            }
//            if (isCompatible) {
//                throw 'loaded.icon violation types incompatible 3';
//            }

        } else {
            P.Icon.load('Resources/resource load.model', function (aLoaded) {
                //it cannot be loaded by Html5
                throw 'loaded.icon violation types incompatible 3';
            }, function (e) {
                if (++asyncLoaded === asyncExpCount)
                    P.Logger.info('Icon_load passed');
            });
        }

        P.Icon.load('Resources/wrench.png', function (aLoaded) {
            btn.icon = aLoaded;
            if (++asyncLoaded === asyncExpCount)
                P.Logger.info('Icon_load passed');
        }, function (e) {
            P.Logger.severe(e);
        });

        P.Resource.load('Resources/wrench.png', function (aLoaded) {
            try {
                btn.icon = aLoaded;
                isCompatible = true;
            } catch (e) {
                isCompatible = false;
            }
            if (isCompatible) {
                throw 'loaded.icon violation types incompatible 4';
            }
            if (++asyncLoaded === asyncExpCount)
                P.Logger.info('Icon_load passed');
        }, function (e) {
            P.Logger.severe(e);
        });

        P.Icon.load('http://lh6.googleusercontent.com/-UXdNdTTGgXg/AAAAAAAAAAI/AAAAAAAAAAA/b3u7m4nqaNo/s32-c/photo.jpg', function (aLoaded) {
            btn.icon = aLoaded;
            if (++asyncLoaded === asyncExpCount)
                P.Logger.info('Icon_load passed');
        }, function (e) {
            P.Logger.severe(e);
        });
    };
}
