import React, { Component } from "react";
import "./Wrapper.scss";

class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return <div className="wrapper">{children}</div>;
  }
}

export default Wrapper;
