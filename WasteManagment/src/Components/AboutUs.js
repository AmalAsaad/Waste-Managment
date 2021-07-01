import React, { Component } from "react";
import { ExternalLink } from 'react-external-link';
import  Footer from "./Footer";
import styles from './AboutUs.module.css'; 

  class Card extends React.Component {  
    render() {
        return (
          <div className={styles["card"]}>
            <img src={this.props.img} />
            <div className={styles["card-body"]}>
              <h2>{this.props.title}</h2>
              
              <ExternalLink href={this.props.link}>
                  <h5>{this.props.author}</h5>
              </ExternalLink>
            </div>
          </div>
        );
      }
    
    }
  
  
class UserDashboard extends Component {

    render() {
        return (
            <>
        
        <div className={styles["header"]}>
             <h1 >Meet Our Great Team</h1>
         </div>
       <div className={styles["cards-container"]}>
          <Card
            img="https://media-exp3.licdn.com/dms/image/C4E03AQEdDrLcHWIyYQ/profile-displayphoto-shrink_200_200/0/1525512609632?e=1630540800&v=beta&t=nPMgkKA2R0FBwhlt8_y77juzg2B6LyFVcVMaHJ_E2DQ"
            title="Christen George"
            link="https://www.linkedin.com/in/christen-george-748991162/"
            author="christen george"
          />
          <Card
            img="https://media-exp3.licdn.com/dms/image/C4E03AQFY4VRWK8NMFg/profile-displayphoto-shrink_200_200/0/1624274254740?e=1630540800&v=beta&t=vY-Un9b4uNEBxXlxszI6YTw14OPd8OsZJX66E1tHKVc"
            title="Aya Hassan"
            link="https://www.linkedin.com/in/aya-hassan94/"
            author="aya hassan"
          />
          <Card
            img="https://media-exp3.licdn.com/dms/image/C4D03AQE_Tv_7qxJsmg/profile-displayphoto-shrink_200_200/0/1580222964398?e=1630540800&v=beta&t=THQXeZWIsEjxscTsEn9PRCj3wqD4obLTBC2Q7wAASuU"
            title="Islam Hany"
            link="https://www.linkedin.com/in/islam-hany-elsayed/"
            author="islam hany"
          />
          <Card
            img="https://media-exp3.licdn.com/dms/image/D4E35AQHHR2VigGyZPA/profile-framedphoto-shrink_200_200/0/1623710648365?e=1625094000&v=beta&t=426vrx-RlgYAELnBwl8bGYaniJAw4zfPMvOa3a4bJBQ"
            link="https://www.linkedin.com/in/amaal-asaad-3b0b33125/"
            title="Amaal Assad"
            author="amaal asaad"
          />
     </div>
      
    <Footer/>
        </>
        );
    }
}
export default UserDashboard;