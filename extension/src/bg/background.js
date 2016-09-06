// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });



    // called when the client connects
    function onConnect() {
      // Once a connection has been made, make a subscription and send a message.
      console.log("onConnect");
      client.subscribe("twtr/office/loo/occupancy");
      // message = new Paho.MQTT.Message("Hello CloudMQTT");
      // message.destinationName = "/cloudmqtt";
      // client.send(message);
    }

    function doFail(e){
      console.log(e);
    }

    // called when the client loses its connection
    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
      }
    }

    var redIcon = {
      "16": "/icons/icon16-red.png",
      "48": "/icons/icon48-red.png",
      "128": "/icons/icon128-red.png"
    };

    var greenIcon = {
      "16": "/icons/icon16-green.png",
      "48": "/icons/icon48-green.png",
      "128": "/icons/icon128-green.png"
    };

    // called when a message arrives
    function onMessageArrived(message) {
      if (message.payloadString === 'occupied') {
          console.log("red")
          chrome.browserAction.setIcon({path:redIcon});
      } else {
          console.log("green")
          chrome.browserAction.setIcon({path:greenIcon});
      }
    }


          client = new Paho.MQTT.Client("m21.cloudmqtt.com", 32493, "web_" + parseInt(Math.random() * 100, 10));

            // set callback handlers
            client.onConnectionLost = onConnectionLost;
            client.onMessageArrived = onMessageArrived;
            var options = {
              useSSL: true,
              userName: "rbdwbliw",
              password: "sShPV_FsitC2",
              onSuccess:onConnect,
              onFailure:doFail
            }

            // connect the client
            client.connect(options);




//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
});
