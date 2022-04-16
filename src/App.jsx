import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Counters from "./components/counter/Counters";

import "./App.css";
class App extends Component {
  state = {
    counterArr: [
      { id: 1, value: 9 },
      { id: 2, value: 0 },
      { id: 3, value: 6 },
      { id: 4, value: 4 },
    ],
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleIncrement(counter) {
    const counters = [...this.state.counterArr];
    const c = { ...counter };
    c.value++;
    const index = counters.indexOf(counter);
    counters[index] = c;
    this.setState({ counterArr: counters });
  }
  handleDecrement(counter) {
    const counters = [...this.state.counterArr];
    const c = { ...counter };
    c.value--;
    const index = counters.indexOf(counter);
    counters[index] = c;
    this.setState({ counterArr: counters });
  }
  handleDelete(id) {
    const counters = this.state.counterArr.filter((c) => c.id !== id);
    this.setState({ counterArr: counters });
  }
  handleReset() {
    const counters = this.state.counterArr.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counterArr: counters });
  }
  render() {
    return (
      <div>
        <Navbar
          activeCount={
            this.state.counterArr.filter((counter) => counter.value > 0).length
          }
        />
        <div className="counters">
          <Counters
            counters={this.state.counterArr}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
