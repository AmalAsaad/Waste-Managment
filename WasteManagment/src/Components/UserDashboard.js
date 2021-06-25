import axios from "axios";
import React, { Component } from "react";
import { formContext } from "../Contexts";
import io from "socket.io-client";
// import { options } from "../../../Server/Routes/auth";

const socket = io("http://localhost:8080");
class UserDashboard extends Component {    
    static contextType = formContext;
    state = { data: [{}], message: "" };
    componentDidMount() {
        const userFloor = this.context.userFloor;
        socket.on("floor"+userFloor, message => {
            console.log(message.toString());
            this.setState({ message:message.toString() });
        });
        axios({
            method: "POST",
            url: "http://localhost:3000/floor",
            data: {
                floor: userFloor
            }
        }).then(res => {
            if (res.status === 200) {
                this.setState({ data: res.data });
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
                <div >
                    <div >
                       title: [name]
                       body:
                    </div>

                </div>
                <div className="bg-yellow-500">
                    {this.state.message}
                </div>
            </>
        );
    }
}
export default UserDashboard;