import React, { Component } from 'react';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <p>Current Time: {this.state.currentTime}</p>
      </div>
    );
  }
}

export default TimerComponent;