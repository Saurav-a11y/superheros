import React from "react";
import "./EventsCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const EventsCarousel = ({ results }) => (
  <Carousel>
    {results.map((data) => (
      <div key={data.id} className="carousel-items">
        <img
          className="img-fluid carousel-item-img"
          src={data.thumbnail.path + ".jpg"}
          alt="carousels-Items"
        />
      </div>
    ))}
  </Carousel>
);
