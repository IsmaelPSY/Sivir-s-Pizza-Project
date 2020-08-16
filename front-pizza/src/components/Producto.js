import React from 'react';
import '../assets/css/Producto.css';
import Button from 'react-bootstrap/Button'

import DisplayProducto from './DisplayProducto';
import AddProducto from './AddProducto';

class Producto extends React.Component{

    render(){
        return(
                <React.Fragment>
                <div className="producto">
                    <div className="addProducto">
                        <AddProducto />
                    </div>
                    <div className="displayProducto">
                        <DisplayProducto />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Producto;