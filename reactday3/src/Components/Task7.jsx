import React, { Component } from "react";


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
        <>
        <h4>Task-7</h4>
      <div>
        Counter: {this.state.count}
      </div>
      </>
    );
  }
}

export default Counter;
