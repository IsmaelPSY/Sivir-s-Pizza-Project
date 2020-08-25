import React from 'react';
import '../../assets/css/Order.css';

import AddOrder from './AddOrder';
import DisplayOrder from './DisplayOrder';

class Order extends React.Component{

    render(){
        return(
                <React.Fragment>
                   <div className="cliente">
                    <div className="addCliente">
                        <AddOrder />
                    </div>


                    <div className="displayCliente">
                        <DisplayOrder />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Order;