const axios = require("axios");

const mqttController = require("../Middlewares/mqtt");

exports.signUp = async (req, res) => {
    try {
        const { name, floor, password } = req.body;
        console.log(req.body);
        // const response=signIn();
        const response = await axios.post("https://beta.masterofthings.com/PostAppData", {
            AppInfo: {
                "AppId": 30,
                "Auth": {
                    "SecretKey": "CCY5Xbab7jU3FMJe1623667639892waste_users_form"
                }
            },
            AppDate: [{
                "Name": `${name}`,
                "Floor": `${floor}`,
                "Password": `${password}`
            }]

        })
        return res.status(200).json(response.data.Result);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

exports.signIn = async (req, res) => {
    try {
        const { name, password } = req.body;
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

        if (userData === undefined) {
            return res.status(202).json({ message: "Not Valied UserName OR Not User! Please SinUp!" })
        }
        else if (userData !== undefined && password !== userData.Password) {
            return res.status(201).json({ message: "Not Valied Password!" });
        } else {
            const floor = userData.Floor;
            // mqttController.mqttLogIn(floor);
            return res.status(200).json(userData);
        }
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error!" });
    }
};
exports.signOut = (req, res) => {
    // mqttController.mqttLogOut();
    return res.status(200).json({ message: "Signed out!" });
};



