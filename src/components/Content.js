import React, { Component } from "react";

class BodyContent extends Component {
  render() {
    return (
      <div className="container-fluid body-background">
        <div className="row" style={{ marginLeft: 30, marginRight: 10 }}>
          <div className="col-6">
            <h1
              className="title-content mt-2"
              style={{
                color: "#333961",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span>Investing in Knowledge and</span>
              <br />
              <span style={{ color: "#9782fa" }}>Your Future</span>
            </h1>
            <br />
            <p className="title mt-2">
              With the help of E-Learning, create your own path and drive on
              your skills on your own to achieve what you seek
            </p>
          </div>
          <div className="col-6 text-center mt-5">
            <img className="img" src="/images/investing-3D.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyContent;
