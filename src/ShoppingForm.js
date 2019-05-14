import React, { Component } from 'react'

class ShoppingForm extends Component {

 constructor(props){
     super(props);
     this.state = {
         name: '',
         quantity: ''
     }
 }

 handleChange = (e) => {
   this.setState({[e.target.name]: e.target.value})
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.addItem(this.state);
   this.setState({
       name: '',
       quantity: ''
   })
 }

  render() {
    return (
      <div className="shoppingform">
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              autoComplete="off"
            /><br/>
            <label htmlFor="quantity">Quantity: </label>
            <input
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              autoComplete="off"
            /><br/>
            <button>Add Item</button>
        </form>
      </div>
    )
  }
}
export default ShoppingForm;
