import React, { Component } from "react";

class BodyContent extends Component {
  render() {
    return (
      <div className="container-fluid body-background">
        <div className="row">
          <div className="col-6">
            <h1
              className="title-content"
              style={{ margin: 30, color: "#333961" }}
            >
              <span>Investing in Knowledge and</span>
              <span style={{ marginLeft: 30, color: "#9782fa" }}>
                Your Future
              </span>
            </h1>
          </div>
          <div className="col-6">
            <img
              className="text-center"
              style={{ marginTop: 100, width: 550 }}
              src="/images/investing-3D.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyContent;
