import React from 'react';
import '../assets/css/Cliente.css';
import Button from 'react-bootstrap/Button';

import AddCliente from './AddCliente';

class Cliente extends React.Component{

    constructor(props){
        super(props);
        this.state={
            persona:[]
        }
    
    }
    styles = {
        backgroundColor: 'yellow',
    }
    
    render(){

        let persona = {nombre: 'Luis', edad: 24};
        const { nombre: n, edad: e } = persona;

        let colores =['azul','rojo','verde','morado'];
        const [a,b,...rest]= colores;

        

        return(
            <React.Fragment>
                    <div>
                    <div className="addCliente">
                    <Button variant="dark">Agregar Cliente</Button>{' '}
                    </div>
                    <div className="displayCliente">
                        <AddCliente />
                    </div>
                    </div>
            </React.Fragment>
       );
    }

    getResultClass(){
        return this.state.persona.length > 0 ? 'text-success' : 'text-warning';
    }

}

export default Cliente;