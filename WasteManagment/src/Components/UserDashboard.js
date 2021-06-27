import axios from "axios";
import React, { Component } from "react";
import { formContext } from "../Contexts";
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { FaBatteryQuarter, FaTrash, FaCommentDots, FaBoxOpen } from "react-icons/fa";

// import { options } from "../../../Server/Routes/auth";

const socket = io("http://localhost:8080");

class UserDashboard extends Component {
    static contextType = formContext;
    state = { data: [{}], arrB1: {}, arrB2: {}, arrB3: {} };
    componentDidMount() {
        const userFloor = this.context.userFloor;

        socket.on("floor" + userFloor, message => {
            if (JSON.parse(message.toString()).bName === "f1b1") {
                this.state.arrB1 = JSON.parse(message.toString());
            }
            else if (JSON.parse(message.toString()).bName === "f1b2") {
                this.state.arrB2 = JSON.parse(message.toString());
            }
            else if (JSON.parse(message.toString()).bName === "f1b3") {
                this.state.arrB3 = JSON.parse(message.toString());
            }
            // console.log(this.state.arrB1);

            this.handleMqttMessage(JSON.parse(message.toString()));
        })


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
                {/* <img src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" /> */}

                <div className="container">
                    <div className="row justify-content-md-center">
                        <Card class="col-lg-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" />
                            <Card.Body >
                                <Card.Title className="w-auto h-auto relative">
                                    Basket 1 <FaCommentDots class="block absolute bottom-2 right-44 left-20" />
                                </Card.Title>
                                <div className=" border-2 border-black">
                                    <Card.Text >
                                        < FaBatteryQuarter />{this.state.arrB1.battery}
                                    </Card.Text>
                                    <Card.Text>
                                        <FaTrash /> {this.state.arrB1.fillLevel}

                                    </Card.Text>
                                    <Card.Text>
                                        <FaBoxOpen />{this.state.arrB1.state}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card class="col-lg-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" />
                            <Card.Body >
                                <Card.Title className="w-auto h-auto relative">
                                    Basket 2 <FaCommentDots class="block absolute bottom-2 right-44 left-20" />
                                </Card.Title>
                                <div className=" border-2 border-black">
                                    <Card.Text >
                                        < FaBatteryQuarter />{this.state.arrB2.battery}
                                    </Card.Text>
                                    <Card.Text>
                                        <FaTrash /> {this.state.arrB2.fillLevel}

                                    </Card.Text>
                                    <Card.Text>
                                        <FaBoxOpen />{this.state.arrB2.state}
                                    </Card.Text>

                                </div>
                            </Card.Body>
                        </Card>
                        <Card class="col-lg-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" />
                            <Card.Body >
                                <Card.Title className="w-auto h-auto relative">
                                    Basket 3 <FaCommentDots class="block absolute bottom-2 right-44 left-20" />
                                </Card.Title>
                                <div className=" border-2 border-black">
                                    <Card.Text >
                                        < FaBatteryQuarter />{this.state.arrB3.battery}
                                    </Card.Text>
                                    <Card.Text>
                                        <FaTrash /> {this.state.arrB3.fillLevel}

                                    </Card.Text>
                                    <Card.Text>
                                        <FaBoxOpen />{this.state.arrB3.state}
                                    </Card.Text>

                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="row justify-content-md-center">
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

                    </div>
                </div>
            </>
        );
    }
}
export default UserDashboard;