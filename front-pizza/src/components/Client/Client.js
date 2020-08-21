import React from 'react';
import '../../assets/css/Client.css';

import AddClient from './AddClient'; 
import DisplayClient from './DisplayClient';

class Client extends React.Component{

  render() {
    return(
      <React.Fragment>
        <div className="cliente">
          <div className="addCliente">
            <AddClient />
          </div>
          <div className="displayCliente">
            <DisplayClient />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Client;