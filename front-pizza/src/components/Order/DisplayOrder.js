import React from 'react';
import '../../assets/css/Order.css';
import Table from 'react-bootstrap/Table';

class DisplayOrder extends React.Component {

  render(){
    return(
        <React.Fragment>
          <Table responsive >
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 4 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </React.Fragment>
    );
  }
}

export default DisplayOrder;