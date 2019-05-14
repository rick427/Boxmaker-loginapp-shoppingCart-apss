import React, { Component } from 'react'
import ShoppingForm from './ShoppingForm';

class ShoppingList extends Component {
  constructor(){
      super();
      this.state = {
          basket: [
              {name: 'Milk', quantity: '2 gallons'},
              {name: 'Eggs', quantity: '2 crates'}
          ]
      };
  }

  addItem = (item) => {
      //let newItem = {...item, uuid()}
      this.setState(state => ({
          basket: [...state.basket, item]
          //basket: [...state.basket, newItem]
      }))
  }

  filterItem = () => {
      this.setState(state => ({
          basket: this
      }))
  }

  displayItems = () => {
    return (
        <ul>
            {this.state.basket.map((item, index) => (
                <li key={index}>{item.name}:{' '} {item.quantity}</li>
            ))}
        </ul>
    )
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.displayItems()}
        <ShoppingForm addItem={this.addItem}/>
      </div>
    )
  }
}
export default ShoppingList;
