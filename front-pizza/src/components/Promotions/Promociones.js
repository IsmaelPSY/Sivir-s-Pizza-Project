import React from 'react';
import '../../assets/css/Promociones.css';

import DisplayPromociones from './DisplayPromociones';
import AddPromociones from './AddPromociones'

class Promociones extends React.Component{

    render(){
        return(
                <React.Fragment>
                    <div className="promociones">
                    <div className="addPromo">
                        <AddPromociones />
                    </div>
                    <div className="displayPromo">
                        <DisplayPromociones />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Promociones;