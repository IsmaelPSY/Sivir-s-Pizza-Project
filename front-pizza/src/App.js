import React from 'react';
import './assets/css/App.css';

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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">SIVIR'S PIZZA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Cliente</a>
      <a class="nav-item nav-link" href="#">Pedidos</a>
      <a class="nav-item nav-link" href="#">Producto</a>
      <a class="nav-item nav-link" href="#">Promociones</a>
    </div>
  </div>
</nav>
    <section>
      <Promociones />
    </section>

    </div>
  );
}

export default App;
