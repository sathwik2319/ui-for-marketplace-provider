import React from "react"
import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carousel = (props) => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  const height = window.innerHeight + "px";

  return (
    <div 
      className="carrousel_wrapper"
      style={{
        height: height,
        overflow: "hidden"
      }}
      >
      <Slider {...settings}>
        <div className="carrousel_image hero-image">
          <div
          style={{
            background:`url(${slide_one})`,
            height: height
          }}></div>
        </div>
        <div className="carrousel_image hero-image">
          <div
          style={{
            background:`url(${slide_two})`,
            height: height
          }}></div>
        </div>
        <div className="carrousel_image hero-image">
          <div
          style={{
            background:`url(${slide_three})`,
            height: height
          }}></div>
        </div>
      </Slider>
    </div>
  )
};

export default Carousel;
