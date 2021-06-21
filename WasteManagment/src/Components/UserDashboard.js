import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { formContext } from "../Contexts";


// UserDashboard component
const UserDashboard = () => {
    
    let initState = [{}];
    const [state] = useState(initState);
    const { userFloor } = useContext(formContext);
    console.log(userFloor);
    const handleGetFloorData = async() => {
        try {
                const response = await axios({
                    method: "POST",
                    url: "http://localhost:5000/floor",
                    data: {
                        floor: userFloor
                    }
            });
            if (response.status === 200) {
                initState = response.data;
            }

        } catch (err) {
            const error = err.response;
            console.log(error);
        }
    };
    handleGetFloorData();
    console.log(handleGetFloorData());
    return ( 
        <>
        <img src = "https://classroomclipart.com/images/gallery/Animations/Science/recycle-trash-can-animation.gif"/>
        <div>
        <table className = "table-auto border-separate border border-green-800... table" >
        <tr key = { "header" } > {
            Object.keys(state[0]).map((key) => ( <th className = "border border-green-600 ..." > { key } </th>
            ))
        } 
        </tr> {
            state.map((item) => ( <
                tr key = { item.SensorId } > {
                    Object.values(item).map((val) => ( <td className = "border border-green-600 ..." > { val } </td>
                    ))
                } </tr>
            ))
        } 
        </table> 
        </div> 
        </>
    )


}
export default UserDashboard