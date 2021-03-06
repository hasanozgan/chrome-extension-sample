// Create a client instance
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

// called when a message arrives
function onMessageArrived(message) {
  console.log(message);
  var box = $('#root').html(message.payloadString)
  if (message.payloadString === 'occupied') {
    box.css("backgroundColor", "red")
  } else {
    box.css("backgroundColor", "green")
  }
}
