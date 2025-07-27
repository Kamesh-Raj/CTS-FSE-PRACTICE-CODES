import React, { Component } from 'react';
import './Grocery.css';

class Grocery extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: 'Laptop', price: 80000 },
        { name: 'TV', price: 120000 },
        { name: 'Washing Machine', price: 50000 },
        { name: 'Mobile', price: 30000 },
        { name: 'Fridge', price: 70000 }
      ]
    };
  }

  render() {
    return (
      <div className="grocery-container">
        <h1>Items Ordered :</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grocery;
