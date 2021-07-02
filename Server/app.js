const cors = require("cors");
const mqtt = require('mqtt')
const options = {
  username: "iTi_2021_Waste",
  password: "iTi_2021_Wastepass",
  reconnectPeriod: 1000
};
const topicArr = ['iTi/2021/Waste/Floor1', 'iTi/2021/Waste/Floor2', 'iTi/2021/Waste/Floor3'];
const authRoutes = require("./Routes/auth");
const wastingDataRoutes = require("./Routes/wastingData");
const express = require("express");

const app = express();

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: '*',
    methods: '*'
  }

});
httpServer.listen(8080);
io.on('connection', (socket) => {
  console.log("Connect to webSocket");

})

client = mqtt.connect('mqtt://beta.masterofthings.com', options);
client.on('connect', function () {
  console.log("Connected Successfully");
})
client.subscribe(topicArr);
client.on('error', (error) => {
  console.log("Can't connect" + error);
  process.exit(1);
})
client.on('message', function (topic, message) {
  let floorNum = topic[topic.length - 1];
  switch (floorNum) {
    case "1":
      io.emit("floor1", message.toString());
      break;
    case "2":
      io.emit("floor2", message.toString());
      break;
    case "3":
      io.emit("floor3", message.toString());
      break;
  }
  console.log(message.toString());
  console.log(JSON.parse(message.toString()));
  return message.toString();
})

app.use(express.json());
app.use(cors());


app.use(wastingDataRoutes);
app.use(authRoutes);

app.listen(3000, () => {
  console.log("Server started");
});
