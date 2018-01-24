import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./modules/tasks";

class App extends Component {
  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    this.props.dispatch(incrementAction());
  }
  decrement = () => {
    this.props.dispatch(decrementAction());
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
