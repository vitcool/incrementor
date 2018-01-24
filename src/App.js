import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement } from "./modules/tasks";

class App extends Component {
  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    this.props.dispatch(increment());
  }
  decrement = () => {
    this.props.dispatch(decrement());
  }
  render() {
    return (
      <div>
        <div className="App">
          {this.props.tasks.number}
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(App);
