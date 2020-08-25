import React from 'react';
import '../../assets/css/Promotions.css';

import DisplayPromotions from './DisplayPromotions';
import AddPromotions from './AddPromotions'

class Promotions extends React.Component{

    render(){
        return(
                <React.Fragment>
                    <div className="promotions">
                    <div className="addPromotions">
                        <AddPromotions />
                    </div>
                    <div className="displayPromotions">
                        <DisplayPromotions />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Promotions;