/**
 * Devices communication module.
 * Note! Server modules methods are synchronized!
 * So don't try to add any synchronization code here. It's all already safe. 
 * @name 134148360246876
 * @public
 * @acceptor
 * @stateless
 * @constructor
 */
function Asc6Acceptor() {
    var self = this, model = P.loadModel(this.constructor.name);
    /** 
     *  Variables section
     */
// Queues of the user's or application's requests (typically strings), classified by imei.
    var requestsQueues = new Array();
// Queues of the device's answers (typically strings), classified by imei.
    var answersQueues = new Array();

    /**
     * Device interaction part.
     */
    /**
     * Method is called by the server, when a packet is recieved from a device.
     * @param p A PositioningPacket instance, representing a recieved information packet
     * from the device. The device imei is contained inside th packet.
     * If the packet is string answer, it should be placed in answers queue for further polling by client.
     * If the packet is data packet with coordinates and in-values, it should be saved in database.
     */
    self.recieved = function(p){
        if (p.valid){
            if (p.text != null){
                if (answersQueues[p.imei] == undefined)
                    answersQueues[p.imei] = new Array();
                answersQueues[p.imei].push(p.text);
                P.Logger.info("imei: " + p.imei + "; text: " + p.text);
            } else {
                // put the packet to the db
                P.Logger.severe("imei: " + p.imei + "; Пакет действительный (valid);");
                //throw "пакет не принялся";
            }
        } else {
            P.Logger.severe("imei: " + p.imei + "; Пакет не действительный (not valid);");
        }
    };

    /**
     * Method is called by the server, when there is an idle time in opened session,
     * that belongs to device with passed in imei. This method should return earliest
     * request to device from the user or application in FIFO order.
     * The returned request will be sent to the device. If nothing is returned it is normal situation
     * and nothing will be sent to the device.
     */
    function pending(imei)
    {
        if (requestsQueues[imei] == undefined)
            requestsQueues[imei] = new Array();
        return requestsQueues[imei].shift();
    }

    /**
     * Client interaction part.
     */

    /**
     * Pushs a request string into device's requests queue.
     */
    function push(imei, request)
    {
        if (requestsQueues[imei] == undefined)
            requestsQueues[imei] = new Array();
        requestsQueues[imei].push(request);
    }

    /**
     * Polls a recieved answer from device's answers queue.
     */
    function poll(imei)
    {
        if (answersQueues[imei] == undefined)
            answersQueues[imei] = new Array();
        return answersQueues[imei].shift();
    }
}