import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";

const SimpleCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true} // Enable navigation arrows
        autoPlay={true} // Enable autoplay (optional)
        infiniteLoop={true} // Enable looping
        stopOnHover // Pause autoplay on hover (optional)
        showThumbs={false}
      >
        <div>
          <img style={{ height: "80vh" }} src={c1} />
        </div>
        <div>
          <img style={{ height: "80vh" }} src={c2} />
        </div>
        <div>
          <img style={{ height: "80vh" }} src={c3} />
        </div>
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;
