(function() {
    var javaClass = Java.type("com.eas.client.forms.api.events.ContainerEvent");
    javaClass.setPublisher(function(aDelegate) {
        return new P.ContainerEvent(aDelegate);
    });
    
    /**
     * Generated constructor.
     * @constructor ContainerEvent ContainerEvent
     */
    P.ContainerEvent = function ContainerEvent() {

        var maxArgs = 0;
        var delegate = arguments.length > maxArgs ?
              arguments[maxArgs] 
            : new javaClass();

        Object.defineProperty(this, "unwrap", {
            value: function() {
                return delegate;
            }
        });
        if(ContainerEvent.superclass)
            ContainerEvent.superclass.constructor.apply(this, arguments);
        /**
         * The source component object of the event.
         * @property source
         * @memberOf ContainerEvent
         */
        Object.defineProperty(this, "source", {
            get: function() {
                var value = delegate.source;
                return P.boxAsJs(value);
            }
        });

        /**
         * The child component the operation is performed on.
         * @property child
         * @memberOf ContainerEvent
         */
        Object.defineProperty(this, "child", {
            get: function() {
                var value = delegate.child;
                return P.boxAsJs(value);
            }
        });


        delegate.setPublished(this);
    };
})();