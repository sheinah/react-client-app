import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <img
          className="img-1"
          src="/images/google-logo.png"
          alt="filter applied"
          style={{ marginRight: 50 }}
        ></img>
        <img
          className="img-1"
          src="/images/netflix.png"
          alt="filter applied"
          style={{ marginRight: 50 }}
        ></img>
        <img
          className="img-1"
          src="/images/airbnb.png"
          alt="filter applied"
          style={{ marginRight: 50 }}
        ></img>
        <img
          className="img-1"
          src="/images/amazon.png"
          alt="filter applied"
          style={{ marginRight: 50 }}
        ></img>
        <img
          className="img-1"
          src="/images/Facebook.png"
          style={{ marginRight: 50 }}
          alt="filter applied"
        ></img>
        <img
          className="img-1"
          style={{ marginRight: 50 }}
          src="/images/grab-logo.png"
          alt="filter applied"
        ></img>
      </div>
    );
  }
}

export default Footer;
