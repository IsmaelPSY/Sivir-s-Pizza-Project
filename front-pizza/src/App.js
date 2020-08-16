import React from 'react';
import './assets/css/App.css';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//Importar Componentes

import Promociones from './components/Promociones';
import Producto from './components/Producto';
import Cliente from './components/Cliente';
import Pedido from './components/Pedido'

/*
<section className="componentes">
        <Promociones />
        <Producto />
        <Cliente />
        <Pedido />
      </section>  
*/

function App() {
   
  return (
    <div className="App">
       
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="home">Sivir's Pizza</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cliente">Cliente</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="pedido">Pedido</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="producto">Producto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="promociones">Promociones</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="home">
          <h1>home</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="cliente">
          <h1>cliente</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="pedido">
          <h1>pedido</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="producto">
          <h1>producto</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="promociones">
          <h1>promociones</h1>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

    </div>
  );
}

export default App;
