import React from 'react';
import '../assets/css/Cliente.css';



import AddCliente from './AddCliente'; 
import DisplayCliente from './DisplayCliente';



class Cliente extends React.Component{

    render(){
      
        return(
            <React.Fragment>
                    <div className="cliente">
                    <div className="addCliente">
                        <AddCliente />
                    </div>


                    <div className="displayCliente">
                        <DisplayCliente />
                    </div>
                    </div>
            </React.Fragment>
       );
    }
}

export default Cliente;