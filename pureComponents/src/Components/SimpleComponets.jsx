import React, { Component } from 'react'

export class SimpleComponets extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          toggle: false,
          value: 0
        }
      }
    
      handleToggle = ()=>{
        this.setState({
          toggle:this.state.toggle === false ? true : false
        })
      }
    
      handleCounter = ()=>{
        if(this.state.toggle === true){
          this.setState({
            value: this.state.value+1
          })
        }
        else{
          this.setState({
            value: this.state.value
          })
        }
      }
  render() {
    console.log("render")
    return (
        <div>
        <h1>Simple-Component</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    )
  }
}

export default SimpleComponets