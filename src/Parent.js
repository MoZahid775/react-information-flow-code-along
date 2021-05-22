import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childcolor: "#FFF"
    }
  }

  parentChanger= (newChildColor) => {
      this.setState({
         color: getRandomColor(),
         childcolor: newChildColor

      })

  }









  render() {
   

    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.parentChanger} childState={this.state.childcolor}/>
        <Child handleColorChange={this.parentChanger} childState={this.state.childcolor}/>
      </div>
    )
  }
}

export default Parent
