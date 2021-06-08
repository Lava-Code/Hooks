import React, { Component } from 'react'

// creat a class component to use the state
class ClassCounter extends Component {
    constructor(props) {
        super(props)
        // step 2 set an initial value of the state with 0
        this.state = {
             counter:0
        }
    }
    // step 3 create a method capable to update the state property
    incrementCounter = ()=>{
        this.setState({counter:this.state.counter +1})
    }
    
    render() {
        return (
            <div>
                <h5>Using Class</h5>
                <button onClick={this.incrementCounter}>{this.state.counter}</button>
            </div>
        )
    }
}

export default ClassCounter
