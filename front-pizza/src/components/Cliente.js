import React from 'react';
import '../assets/css/Cliente.css';

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
                    <h1 className="Cliente">{n} tiene {e}</h1>
                    <h2  style={this.styles} >{a}{b}{rest}</h2>
                    <div>
                        <h1 className='text-success'>Ejemplo</h1>
                    </div>

                    <div className = {this.getResultClass()}>
                        Arreglo Personas
                    </div>
            </React.Fragment>
       );
    }

    getResultClass(){
        return this.state.persona.length > 0 ? 'text-success' : 'text-warning';
    }

}

export default Cliente;