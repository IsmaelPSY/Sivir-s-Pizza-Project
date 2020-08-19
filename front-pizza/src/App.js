import React from 'react';
import './assets/css/App.css';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//Importar Componentes

import Promociones from './components/Promotions/Promociones';
import Producto from './components/Product/Producto';
import Client from './components/Client/Client';
import Pedido from './components/Order/Pedido';
import Home from './components/Home';


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
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey="cliente">
                <Client />
              </Tab.Pane>
              <Tab.Pane eventKey="pedido">
                <Pedido />
              </Tab.Pane>
              <Tab.Pane eventKey="producto">
                <Producto />
              </Tab.Pane>
              <Tab.Pane eventKey="promociones">
                <Promociones />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;



