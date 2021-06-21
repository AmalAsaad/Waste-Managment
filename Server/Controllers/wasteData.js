const axios = require("axios");
const mqttController = require("../Middlewares/mqtt");
exports.getFloorData = async (req, res) => {
  const { floor } = req.body;
  try {
    const userFloor = await axios.post("https://beta.masterofthings.com/GetAppReadingValueList", {
      AppId: 31,
      Auth: {
        "Key": "QC3Xh34JCn5yT4LP1623668412098waste_devices_form"
      },
      ConditionList: [{
        "Reading": "Floor",
        "Condition": "e",
        "Value": `${floor}`
      }]
    })
    const sensorIdCons = userFloor.data.Result[0].SensorIdConsole;
    const response = await axios.post("https://beta.masterofthings.com/GetSensorReadingValueList", {
      SensorId: `${sensorIdCons}`,
      Aggregate: [
        {
          function: "max",
          reading: "id"
        }
      ],
      GroupBy: ["SensorId"],
      Auth: {
        DriverManagerId: "1",
        DriverManagerPassword: "123"
      }
    });
    const sensorsList = response.data.Result;
    var sensorsIdsList = [];
    for (let i = 0; i < sensorsList.length; i++) {
      sensorsIdsList.push(sensorsList[i]['max(id)']);
    }
    var finalReading = [];
    for (let index = 0; index < sensorsIdsList.length; index++) {
      const sensors = await axios.post("https://beta.masterofthings.com/GetSensorReadingValueList", {
        SensorId: `${sensorIdCons}`,
        ConditionList: [{
          reading: "id",
          condition: "e",
          value: `${sensorsIdsList[index]}`
        }],
        Auth: {
          DriverManagerId: "1",
          DriverManagerPassword: "123"
        }
      });
      finalReading.push(sensors.data.Result[0]);
    }
    // const message = mqttController.mqttDashboard();
    // const finalRes = [finalReading, message];
    return res.status(200).json(finalReading);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
