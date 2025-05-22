import React, { Component } from 'react';

class Task8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Method to increment the counter
  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
        <>
        <h4>Task-8</h4>
      <div>
        <div>Counter: {this.state.count}</div>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
      </>
    );
  }
}

export default Task8;