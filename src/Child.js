import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  
  

 

  render() {
    
    
    return (
      <div 
        className="child"
        onClick={()=>{this.props.handleColorChange(getRandomColor())}}
        
        style={{backgroundColor: this.props.childState}}
      ></div>
    )
  }
}

export default Child
