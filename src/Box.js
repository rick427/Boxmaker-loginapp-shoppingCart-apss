import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
     <>
      <div style={{
           height: `${this.props.height}em`, 
           width: `${this.props.width}em`,
           backgroundColor: this.props.color
       }}/>
       <button onClick={this.props.removeBox}>X</button>
      </>  
      
    )
  }
}
export default Box;
