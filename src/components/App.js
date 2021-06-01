import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        display: new Date().toLocaleTimeString()
      };
    }
    componentDidMount() {
      console.log("mounted");
      this.intervalId = setInterval(
        () => this.setState({ display: new Date().toLocaleTimeString() }),
        1000
      );
    }
    componentWillUnmount() {
      console.log("unmounted");
      clearInterval(this.intervalId);
    }
    render() {
      return (
        <div className="Clock">
          <h3 id="time">{this.state.display}</h3>
        </div>
      );
    }
  }
  export default App
