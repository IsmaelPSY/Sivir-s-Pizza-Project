import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import './App.css';
import Home from './components/HomeComponent/Home';

function App() {
  return (
    <div className="container-fluid">
        <Tab.Container id="left-tabs-pizza" defaultActiveKey="first" className="h-100">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="h-100">
                <Tab.Pane eventKey="first">
                  <Home />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                Contenido delTab2
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    </div>
  );
}

export default App;
