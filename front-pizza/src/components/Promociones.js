import React from 'react';
import '../assets/css/Promociones.css';
import Button from 'react-bootstrap/Button';

import AddPromociones from './AddPromociones';

class Promociones extends React.Component{

    render(){
        return(
                <React.Fragment>
                    <div>
                    <div className="addPromo">
                    <Button variant="dark">Agregar Promoción</Button>{' '}
                    </div>
                    <div className="displayPromo">
                        <AddPromociones />
                    </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Promociones;