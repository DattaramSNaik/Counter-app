import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-dark bg-primary">
          <span className="navbar-brand mb-0 h1">
            Active Counters={this.props.activeCount}
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
