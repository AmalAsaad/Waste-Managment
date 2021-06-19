import React , {useMemo} from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

import DataRetrive from './DataRetrive';
function SensorData() {
    const data = useMemo(()=> DataRetrive , []);
    const {SensorId , name , floor, battery , depth} = data;
    return (
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>SensorId</th>
      <th>name</th>
      <th>floor</th>
      <th>battery</th>
      <th>depth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{SensorId}</td>
      <td>{name}</td>
      <td>{floor}</td>
      <td>{battery}</td>
      <td>{depth}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>{SensorId}</td>
      <td>{name}</td>
      <td>{floor}</td>
      <td>{battery}</td>
      <td>{depth}</td>
    </tr>
    <tr>
    <td>3</td>
    <td>{SensorId}</td>
      <td>{name}</td>
      <td>{floor}</td>
      <td>{battery}</td>
      <td>{depth}</td>
      </tr>
  </tbody>
</Table>
    )
}

export default SensorData;