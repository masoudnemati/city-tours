import React, { Component } from "react";
import Tour from "./Tour";

export default class TourList extends Component {
  render() {
    return (
      <div>
        <h1> و این فارسی است.</h1>
        <p>this is English.</p>
        <Tour />
      </div>
    );
  }
}
