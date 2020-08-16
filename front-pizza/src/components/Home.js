import React from 'react';
import '../assets/css/Home.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

//import Sivir's logo
import logo from '../assets/images/Logo.png';


class Home extends React.Component{

    render(){
        return(
                <React.Fragment >
                    <h1 class="text-center display-1">BIENVENIDO INVOCADOR</h1>
                
                <Container>
                    <Image className="logoSivir" src={logo}/>
                </Container>
                
                </React.Fragment>
        );
    }

}

export default Home;