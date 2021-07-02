import axios from "axios";
import io from "socket.io-client";
import React, { Component } from "react";
import { formContext } from "../Contexts";
// import io from "socket.io-client";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';
import { IconContext } from "react-icons";

import { FaBatteryQuarter, FaTrash, FaTrashAlt, FaTrashRestore, FaCommentDots, FaBoxOpen, FaBatteryFull, FaBatteryThreeQuarters } from "react-icons/fa";

import './UserDashboard.css';
const socket = io("http://localhost:8080");
class CardHeader extends React.Component {
    render() {
        return (
            <header className="card-header">
                <img src={this.props.img} />
                <h4 className="card-header--title">{this.props.title}</h4>
            </header>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <div className="icons">
                    {this.props.batteryIcon}
                    <h5> {this.props.battery}%</h5>
                </div>

                <div className="icons">
                    {this.props.fillLevelIcon}
                    <h5>{this.props.fillLevel}%</h5>
                </div>

                <div className="icons">
                    {this.props.stateIcon}
                    <h5>{this.props.state}</h5>
                </div>

            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card" >
                <CardHeader img={'https://cdn.dribbble.com/users/2359873/screenshots/6714149/the-trash-can.gif'} title={this.props.title} />
                {/* <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/> */}
                <CardBody
                    batteryIcon={this.props.batteryIcon}
                    battery={this.props.battery}
                    fillLevelIcon={this.props.fillLevelIcon}
                    fillLevel={this.props.fillLevel}
                    stateIcon={this.props.stateIcon}
                    state={this.props.state}
                />


            </div>
        )
    }
}

// class UserDashboard extends Component {
//     render() {
//         return (
//             <>
//                 <div className="container">
//                     <div className="row justify-content-md-center">
//                         <Card class="col-lg-4" style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" />
//                             <Card.Body >
//                                 <Card.Title className="w-auto h-auto relative">
//                                     Basket 1 <FaCommentDots class="block absolute bottom-2 right-44 left-20" />
//                                 </Card.Title>
//                                 <div className=" border-2 border-black">
//                                     <Card.Text >
//                                         {this.state.arrB1.battery < 10 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBatteryQuarter /> Battery Law!</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaBatteryThreeQuarters /></IconContext.Provider>}
//                                         {this.state.arrB1.battery}%
//                                     </Card.Text>
//                                     <Card.Text>
//                                         {this.state.arrB1.fillLevel >= 90 && this.state.arrB1.fillLevel <= 100 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaTrash /> Basket Full !</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaTrashAlt /></IconContext.Provider>}
//                                         {this.state.arrB1.fillLevel}%

//                                     </Card.Text>
//                                     <Card.Text>
//                                         {this.state.arrB1.state === "Open" ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBoxOpen /></IconContext.Provider> : <IconContext.Provider value={{ color: "black", size: "2em", className: "react-icons" }}><FaTrashRestore /></IconContext.Provider>}
//                                         {this.state.arrB1.state}

//                                     </Card.Text>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                         <Card class="col-lg-4" style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" />
//                             <Card.Body >
//                                 <Card.Title className="w-auto h-auto relative">
//                                     Basket 2 <FaCommentDots class="block absolute bottom-2 right-44 left-20" />
//                                 </Card.Title>
//                                 <div className=" border-2 border-black">
//                                     <Card.Text >
//                                         {this.state.arrB2.battery < 10 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBatteryQuarter /> Battery Law!</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaBatteryThreeQuarters /></IconContext.Provider>}
//                                         {this.state.arrB2.battery}%
//                                     </Card.Text>
//                                     <Card.Text>
//                                         {this.state.arrB2.fillLevel >= 90 && this.state.arrB2.fillLevel <= 100 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaTrash /> Basket Full !</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaTrashAlt /></IconContext.Provider>}
//                                         {this.state.arrB2.fillLevel}%

//                                     </Card.Text>
//                                     <Card.Text>
//                                         {this.state.arrB2.state === "Open" ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBoxOpen /></IconContext.Provider> : <IconContext.Provider value={{ color: "black", size: "2em", className: "react-icons" }}><FaTrashRestore /></IconContext.Provider>}
//                                         {this.state.arrB2.state}

//                                     </Card.Text>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                         <Card class="col-lg-4" style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif" />
//                             <Card.Body >
//                                 <Card.Title className="w-auto h-auto relative">
//                                     Basket 3 <FaCommentDots class="block absolute bottom-2 right-44 left-20" />
//                                 </Card.Title>
//                                 <div className=" border-2 border-black">
//                                     <Card.Text >
//                                         {this.state.arrB3.battery < 10 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBatteryQuarter /> Battery Law!</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaBatteryThreeQuarters /></IconContext.Provider>}
//                                         {this.state.arrB3.battery}%
//                                     </Card.Text>
//                                     <Card.Text>
//                                         {this.state.arrB3.fillLevel >= 90 && this.state.arrB3.fillLevel <= 100 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaTrash /> Basket Full !</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaTrashAlt /></IconContext.Provider>}
//                                         {this.state.arrB3.fillLevel}%

//                                     </Card.Text>
//                                     <Card.Text>
//                                         {this.state.arrB3.state === "Open" ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBoxOpen /></IconContext.Provider> : <IconContext.Provider value={{ color: "black", size: "2em", className: "react-icons" }}><FaTrashRestore /></IconContext.Provider>}
//                                         {this.state.arrB3.state}

//                                     </Card.Text>

//                                 </div>
//                             </Card.Body>
//                         </Card>

//                     </div>
//                     <div className="row justify-content-md-center">
//                         <table className="border-separate border border-green-800 ...">
//                             {
//                                 <tr key={"header"}>
//                                     {Object.keys(this.state.data[0]).map((val) => (
//                                         <th className="border border-green-600 ...">{val}</th>
//                                     ))}
//                                 </tr>
//                             }
//                             {this.state.data.map((item) => (
//                                 <tr key={item.id}>
//                                     {Object.values(item).map((val) => (
//                                         <td className="border border-green-600 ...">{val}</td>
//                                     ))}
//                                 </tr>
//                             ))}
//                         </table>

//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
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
                <div className="cards-container">
                    <Card title={"Basket 1"}
                        battery={this.state.arrB1.battery}
                        batteryIcon={this.state.arrB1.battery < 10 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBatteryQuarter /> Battery Law</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaBatteryThreeQuarters /></IconContext.Provider>}
                        fillLevel={this.state.arrB1.fillLevel}
                        fillLevelIcon={this.state.arrB1.fillLevel >= 90 && this.state.arrB1.fillLevel <= 100 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaTrash /> Basket Full</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaTrashAlt /></IconContext.Provider>}
                        stateIcon={this.state.arrB1.state === "Open" ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBoxOpen /></IconContext.Provider> : <IconContext.Provider value={{ color: "black", size: "2em", className: "react-icons" }}><FaTrashRestore /></IconContext.Provider>}
                        state={this.state.arrB1.state}

                    />

                    <Card title={"Basket 2"}
                        batteryIcon={this.state.arrB2.battery < 10 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBatteryQuarter /> Battery Law</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaBatteryThreeQuarters /></IconContext.Provider>}
                        battery={this.state.arrB2.battery}
                        fillLevelIcon={this.state.arrB2.fillLevel >= 90 && this.state.arrB2.fillLevel <= 100 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaTrash /> Basket Full </IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaTrashAlt /></IconContext.Provider>}
                        fillLevel={this.state.arrB2.fillLevel}
                        stateIcon={this.state.arrB2.state === "Open" ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBoxOpen /></IconContext.Provider> : <IconContext.Provider value={{ color: "black", size: "2em", className: "react-icons" }}><FaTrashRestore /></IconContext.Provider>}
                        state={this.state.arrB2.state}
                    />

                    <Card title={"Basket 3"}
                        batteryIcon={this.state.arrB3.battery < 10 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBatteryQuarter /> Battery Law</IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaBatteryThreeQuarters /></IconContext.Provider>}
                        battery={this.state.arrB3.battery}
                        fillLevelIcon={this.state.arrB3.fillLevel >= 90 && this.state.arrB3.fillLevel <= 100 ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaTrash /> Basket Full </IconContext.Provider> : <IconContext.Provider value={{ color: "blue", size: "2em", className: "react-icons" }}><FaTrashAlt /></IconContext.Provider>}
                        fillLevel={this.state.arrB3.fillLevel}
                        stateIcon={this.state.arrB3.state === "Open" ? <IconContext.Provider value={{ color: "red", size: "2em", className: "react-icons" }}>< FaBoxOpen /></IconContext.Provider> : <IconContext.Provider value={{ color: "black", size: "2em", className: "react-icons" }}><FaTrashRestore /></IconContext.Provider>}
                        state={this.state.arrB3.state}
                    />
                </div>

                <div className="container">
                    <table>
                        {
                            <tr key={"header"}>
                                {Object.keys(this.state.data[0]).map((val) => (
                                    <th>{val}</th>
                                ))}
                            </tr>
                        }
                        {
                            this.state.data.map((item) => (
                                <tr key={item.id}>
                                    {Object.values(item).map((val) => (
                                        <td>{val}</td>
                                    ))}
                                </tr>
                            ))
                        }
                    </table>
                </div>
                {/* </div> */}

            </>
        );
    }
}
export default UserDashboard;
