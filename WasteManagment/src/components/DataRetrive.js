import React from 'react'
import axios  from 'axios'
const DataRetrive =async function getSensorData() {
    
        try {
          const response = await axios.post("https://beta.masterofthings.com/GetSensorReadingValueList", {
            SensorId: 164,
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
          var arr=response.data.Result;
          var newArr=[];
          for(let i=0; i<arr.length; i++){   
              newArr.push(arr[i]['max(id)']);
          }
          console.log(newArr);
          var sensors;
          var finalArr=[]; 
          for (let index=0;index<newArr.length;index++){
            sensors=await axios.post("https://beta.masterofthings.com/GetSensorReadingValueList", {
                SensorId: 164,
                ConditionList:[{
                    reading:"id",
                    condition:"e",
                    value:`${newArr[index]}`
                }],
                Auth: {
                    DriverManagerId: "1",
                    DriverManagerPassword: "123"
                }
            });
            finalArr.push(sensors.data.Result[0]);
          }
          console.log(finalArr);
        } catch (error) {
          console.error(error);
        }
      

    return (
        <div>
       {finalArr}
        </div>
    )
}

export default DataRetrive();
