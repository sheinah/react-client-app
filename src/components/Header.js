import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="my-container container-fluid">
        <div className="row">
          <div
            className="col-3 text-left"
            style={{ marginTop: 10, marginLeft: 40 }}
          >
            <h2 style={{ color: "#9782fa" }}>Coursite.</h2>
          </div>
          <div className="col-4 text-center" style={{ marginTop: 25 }}>
            <ul className="list-inline">
              <li className="list-inline-item title mb-2">Home</li>
              <li className="list-inline-item title mb-2">Services</li>
              <li className="list-inline-item title mb-2">Courses</li>
              <li className="list-inline-item title mb-2">Blog</li>
            </ul>
          </div>
          <div className="col-4 text-right" style={{ marginTop: 20 }}>
            <button
              className="btn custom-btn-color title"
              style={{
                marginRight: 10,
              }}
            >
              Log in
            </button>
            <button className="btn custom-btn-color2 title">Sign up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
