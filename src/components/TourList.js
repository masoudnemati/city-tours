import React, { Component } from "react";
import Tour from "./Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    console.log(id);
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          ))}
        </div>
      </section>
    );
  }
}
