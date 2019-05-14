import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class BoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: '',
            width: '',
            color: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        const newBox = {...this.state, id: uuid()}
        e.preventDefault();
        this.props.createBox(newBox);
        this.setState({
            height: '',
            width: '',
            color: ''
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Height</label>
                <input 
                   name="height" 
                   value={this.state.height} 
                   id="height" 
                   onChange={this.handleChange} 
                   type="text" 
                />
                 <label>Width</label>
                <input 
                   name="width" 
                   value={this.state.width} 
                   id="width" 
                   onChange={this.handleChange} 
                   type="text" 
                />
                 <label>Color</label>
                <input 
                   name="color" 
                   value={this.state.color} 
                   id="color" 
                   onChange={this.handleChange} 
                   type="text" 
                />
                <button>Add new box</button>
            </div>
        </form>
      </div>
    )
  }
}
