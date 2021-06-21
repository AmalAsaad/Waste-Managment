import axios from "axios";
import React, { Component } from "react";
import { formContext } from "../Contexts";
import mqtt from "mqtt";
// import { options } from "../../../Server/Routes/auth";
class UserDashboard extends Component {

    static contextType = formContext;
    state = { data: [{}], message: "" };
    componentDidMount() {
        const options = {
            username: "iTi_2021_Waste",
            password: "iTi_2021_Wastepass",
            reconnectPeriod: 1000
        };
        const userFloor = this.context.userFloor;
        this.client = mqtt.connect('wss://beta.masterofthings.com:1883/mqtt', options);
        if(this.client){
            this.client.subscribe(`iTi/2021/Waste/Floor${userFloor}`);
        }

        this.client.on('connect', function () {
            console.log("Connected Successfully");
        })
        
        this.client.on("reconnect", () => {
            console.log("Reconnecting");
        });
        this.client.on('error', (error) => {
            console.log("Can't connect" + error);
            process.exit(1);
        })
        this.client.on('message', function (topic, message) {
            console.log(message.toString())
            this.handleMqttMessage(JSON.parse(message.toString()));
        })


        axios({
            method: "POST",
            url: "http://localhost:5000/floor",
            data: {
                floor: userFloor
            }
        }).then(res => {
            if (res.status === 200) {
                this.setState({ data: res.data });
                // this.setState({ message: res.data[1] });
                // console.log(res.data);
            }
        })
        console.log(userFloor)
    }
    handleMqttMessage = (json) => {
        this.setState({ message: json });
    }
    render() {
        return (
            <>
                <img src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" />
                <table className="border-separate border border-green-800 ...">
                    {
                        <tr key={"header"}>
                            {Object.keys(this.state.data[0]).map((val) => (
                                <th className="border border-green-600 ...">{val}</th>
                            ))}
                        </tr>
                    }
                    {this.state.data.map((item) => (
                        <tr key={item.id}>
                            {Object.values(item).map((val) => (
                                <td className="border border-green-600 ...">{val}</td>
                            ))}
                        </tr>
                    ))}
                </table>
                <div className="bg-yellow-500">

                    {this.state.message}
                </div>
            </>
        );
    }
}
export default UserDashboard;