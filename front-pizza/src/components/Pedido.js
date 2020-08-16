import React from 'react';
import '../assets/css/Pedido.css';
import Button from 'react-bootstrap/Button';

import AddPedido from './AddPedido';

class Pedido extends React.Component{

    render(){
        return(
                <React.Fragment>
                    <div>
                    <div className="addPedido">
                    <Button variant="dark">Agregar Pedido</Button>{' '}
                    </div>
                    <div className="displayPedido">
                        <AddPedido />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Pedido;