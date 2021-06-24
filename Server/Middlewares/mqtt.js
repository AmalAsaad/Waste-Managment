const mqtt = require('mqtt')
const options = {
    username: "iTi_2021_Waste",
    password: "iTi_2021_Wastepass",
    reconnectPeriod: 1000
};
let client;
exports.mqttLogIn = (floor) => {
    client = mqtt.connect('mqtt://beta.masterofthings.com', options)
    client.on('connect', function () {
        console.log("Connected Successfully");
    })
    client.subscribe(`iTi/2021/Waste/Floor${floor}`);
    client.on('error', (error) => {
        console.log("Can't connect" + error);
        process.exit(1);
    })
}
exports.mqttDashboard = () => {
    client.on('message', function (topic, message) {
        console.log(message.toString())
        return message.toString();
    })
}
exports.mqttLogOut = () => {
    client.end();
    client.on('error', (error) => {
        console.log("Can't connect" + error);
        process.exit(1);
    })
    console.log("end");
}


