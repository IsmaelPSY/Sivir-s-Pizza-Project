import React from 'react';
import '../../assets/css/Producto.css';
import Button from 'react-bootstrap/Button'

import DisplayProduct from './DisplayProduct';
import AddProduct from './AddProduct';

class Product extends React.Component{

    render(){
        return(
                <React.Fragment>
                <div className="product">
                    <div className="addProduct">
                        <AddProduct />
                    </div>
                    <div className="displayProduct">
                        <DisplayProduct />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Product;