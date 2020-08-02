import React from 'react';

function ListPizza() {
    return (
      <div className="App">
        <label>List of pizzas</label>
        <table>
            <thead>
                <th>name</th>
                <th>size</th>
                <th>prise</th>
            </thead>
            <tbody></tbody>
        </table>
      </div>
    );
  }
  
export default ListPizza;