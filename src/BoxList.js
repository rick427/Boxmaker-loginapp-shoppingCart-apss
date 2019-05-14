import React, { Component } from 'react'
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'uuid';


export default class BoxList extends Component {
  constructor(props){
      super(props);
      this.state = {
          boxes: [
              {id: uuid(), width: 10, height: 10, color: 'orange'}
          ]
      }
      this.createBox= this.createBox.bind(this);
  }

  createBox(newbox){
      this.setState({
          boxes: [...this.state.boxes, newbox]
      })
  }

  removeBox(id){
    this.setState({
        boxes: this.state.boxes.filter( box => box.id !== id)
    })
  }

  render() {
    const boxes = this.state.boxes.map(box => (
        <Box 
           key={box.id} 
           id={box.id} 
           width={box.width} 
           height={box.height} 
           color={box.color}
           removeBox={() => this.removeBox(box.id)}
        />
    ))
    return (
      <div>
        <h1>Color boxes</h1>
        <BoxForm createBox={this.createBox}/>
        {boxes}
      </div>
    )
  }
}
