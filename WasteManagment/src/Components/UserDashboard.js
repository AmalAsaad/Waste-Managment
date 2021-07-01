import axios from "axios";
import React, { Component } from "react";
import { formContext } from "../Contexts";
import mqtt from "mqtt";

import './UserDashboard.css';
class CardHeader extends React.Component {
    render() {
      // const { image } = this.props;
      // var style = { 
      //     backgroundImage: 'url(' + image + ')',
      // };
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
          {/* <p className="date">March 20 2015</p> */}
          
          {/* <h2>{this.props.title}</h2> */}
          
          {/* <p className="body-content">{this.props.text}</p> */}

          {/* <Button /> */}
        </div>
      )
    }
  }
  
  class Card extends React.Component {
    render() {
      return (
        <div className="card" >
          <CardHeader img={'https://cdn.dribbble.com/users/2359873/screenshots/6714149/the-trash-can.gif'} title={this.props.title}/>
          {/* <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/> */}
          <CardBody/>

        </div>
      )
    }
  }
  
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
         {/* <div className='hero-container'>
             <video src='/videos/video1.mp4' autoPlay loop muted />
             */}
            <div className="cards-container">
              <Card title={"pasket 1"} />
              <Card title={"pasket 2"}/>
              <Card title={"pasket 3"}/>
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


// import React, { Component } from "react";

// class UserDashboard extends Component {
//   render() {
//     return (
//       <StackGrid
//         columnWidth={350}
//       >
//         <div className="bbb" style={{marginLeft: 10 + 'px'}} key="key1"> <Card /></div>
//         <div key="key2"> <Card /></div>
//         <div key="key3"> <Card /></div>
//       </StackGrid>
//     );
//   }
// }
// export default UserDashboard;