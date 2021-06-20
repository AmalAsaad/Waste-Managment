const axios = require("axios");
const mqtt = require('mqtt')
const options = {
    username: "iTi_2021_Waste",
    password: "iTi_2021_Wastepass",
    reconnectPeriod: 1000
};
let client;

exports.signIn = async (req, res) => {
    const { name, password } = req.body;
    try {
        const response = await axios.post("https://beta.masterofthings.com/GetAppReadingValueList", {
            AppId: 30,
            Auth: {
                "Key": "CCY5Xbab7jU3FMJe1623667639892waste_users_form"
            },
            ConditionList: [{
                "Reading": "Name",
                "Condition": "e",
                "Value": `${name}`
            }]
        })
        const userData = response.data.Result[0];
        // const floor = userData.Floor;
        if (userData === undefined) {
            return res.status(400).json({ message: "Not Valied UserName OR Not User! Please SinUp!" })
        }
        else if (userData !== undefined && password !== userData.Password) {
            return res.status(400).json({ message: "Not Valied Password!" });
        }
        // client = mqtt.connect('mqtt://beta.masterofthings.com', options)
        // client.on('connect', function () {
        //     console.log("Connected Successfully");
        // })
        // client.subscribe(`iTi/2021/Waste/Floor${floor}`);
        // client.on('error', (error) => {
        //     console.log("Can't connect" + error);
        //     process.exit(1);
        // })
        // client.on('message', function (topic, message) {
        //     console.log(message.toString())
        // })
        
        return res.status(200).json(userData);

    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error!" });
    }
};
exports.signOut = (req, res) => {
    // client.unsubscribe(topic);
    // client.end();
    return res.status(200).json({ message: "Signed out!" });
};
