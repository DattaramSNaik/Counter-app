import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="counter">
          <table className="table table-light">
            <thead>
              <tr>
                <td>
                  <p className={this.getBadgeCount()}>{this.formatCount()}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-success btn-lg"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-lg"
                    disabled={this.props.counter.value === 0}
                    onClick={() => this.props.onDecrement(this.props.counter)}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </React.Fragment>
    );
  }
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  getBadgeCount() {
    return this.props.counter.value === 0
      ? "badge bg-secondary"
      : "badge bg-info";
  }
}

export default Counter;
