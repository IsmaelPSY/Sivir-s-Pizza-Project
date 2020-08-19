import React from 'react';
import '../../assets/css/Promociones.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

class DisplayPromociones extends React.Component{

    render(){
        return(
            <React.Fragment>
            <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
            </React.Fragment>
        );
    }
}

export default DisplayPromociones;