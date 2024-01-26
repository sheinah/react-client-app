import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid my-container">
        <div className="row">
          <div className="col-6 ">
            <h1>Coursite</h1>
          </div>
          <div className="col-6 ">
            <h2>Router</h2>
            {/* <ul className="list-inline">
              <li className="list-inline-item title">Home</li>
              <li className="list-inline-item title"></li>
            </ul> */}
          </div>
          <div className="col-6 ">
            <h3>Button</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
