import React, { Component } from "react";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="rounded overflow-hidden shadow-lg mx-auto my-10">
        <div className="relative">
          <img src={img} alt="image" className="w-auto" />
          <i
            onClick={() => removeTour(id)}
            className="far fa-times-circle absolute top-0 left-0 h-8 w-8 bg-red-400 pt-2 pr-2 cursor-not-allowed"
          />
        </div>
        <div className="bg-gray-200 p-2 text-left">
          <h1 className="text-2xl"> {city}</h1>
          <h4 className="text-gray-600">{name}</h4>
          <h5 className="pt-4 cursor-pointer" onClick={this.handleInfo}>
            info <i className="fas fa-caret-square-down" />
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
