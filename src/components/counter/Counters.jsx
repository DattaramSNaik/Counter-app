import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="counters">
          {this.props.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
          <button
            className="btn btn-info btn-lg btn-block"
            onClick={this.props.onReset}
          >
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
