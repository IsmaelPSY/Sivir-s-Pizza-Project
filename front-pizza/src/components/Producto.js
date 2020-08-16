import React from 'react';
import '../assets/css/Producto.css';
import Button from 'react-bootstrap/Button'

import AddProducto from './AddProducto';

class Producto extends React.Component{

    render(){
        return(
                <React.Fragment>
                <div>
                    <div className="addProducto">
                    <Button variant="dark">Agregar Producto</Button>{' '}
                    </div>
                    <div className="displayProducto">
                        <AddProducto />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Producto;