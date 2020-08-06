import React from 'react';
import logo from '../../assets/logo-sivir-pizza.png';
import './Home.css';

function Home() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="title-home font-weight-bold">Bienvenido Invocador</h1>
        <img src={logo} class="img-fluid" alt="image logo of siver application" />
      </div>
    );
  }
  
export default Home;