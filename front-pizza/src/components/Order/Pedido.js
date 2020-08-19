import React from 'react';
import '../../assets/css/Pedido.css';

import AddPedido from './AddPedido';
import DisplayPedido from './DisplayPedido';

class Pedido extends React.Component{

    render(){
        return(
                <React.Fragment>
                   <div className="cliente">
                    <div className="addCliente">
                        <AddPedido />
                    </div>


                    <div className="displayCliente">
                        <DisplayPedido />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Pedido;