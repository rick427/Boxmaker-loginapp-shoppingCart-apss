import React, { Component } from 'react'
import './Login.css';
import ShoppingList from './ShoppingList';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      submit: false
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({username: '', email:'', password: '', submit: true})
    console.log(this.state);
  }

  render() {
    const {username, email, password} = this.state;
    return (
      <div className="App">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
          <h1>Login Form</h1>
            <input 
               type="text" 
               name="username" 
               value={username} 
               onChange={this.handleChange} 
               placeholder="username" 
               autoComplete="off" 
               required
            /><br/>
            <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={this.handleChange} 
                placeholder="email" 
                autoComplete="off" 
                required
            /><br/>
            <input 
               type="password" 
               name="password" 
               value={password} 
               onChange={this.handleChange} 
               placeholder="password" 
               autoComplete="off" 
               required
            /><br/>
            <button>Submit</button>
          </form>

          {this.state.submit ? <p>Welcome back {username}</p> : <p>ACCESS DENIED !!</p>}
        </div>

        <div className="shopping">
          <ShoppingList/>
        </div>
      </div>
    )
  }
}
export default Login;
