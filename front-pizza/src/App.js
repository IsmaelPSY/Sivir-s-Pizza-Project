import React from 'react';
import './assets/css/App.css';

//Importar Componentes

import Promociones from './components/Promociones';
import Producto from './components/Producto';
import Cliente from './components/Cliente';
import Pedido from './components/Pedido'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <section className="componentes">
        <Promociones />
        <Producto />
        <Cliente />
        <Pedido />
      </section>  
      </header>
      
    </div>
  );
}

export default App;
