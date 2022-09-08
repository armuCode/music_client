import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import micro from "../../assets/micro.jpg";
import guitar from "../../assets/guitar.jpg";
const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        className=""
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div className="text-center">
          <div className="absolute w-full h-3/5 bg-gradient-to-t from-black to-transparent bottom-0 z-20" />
          <img
            src={guitar}
            loading="lazy"
            layout="fill"
            alt="banner1"
            className="w-20"
          />
          <h2 className="text-4xl absolute bottom-30 left-20 z-20 text-white bg-black opacity-80">
            Your music store
          </h2>
        </div>
        <div className="text-center">
          <div className="absolute w-full h-3/5 bg-gradient-to-t from-black to-transparent bottom-0 z-20" />
          <img
            src={micro}
            loading="lazy"
            layout="fill"
            alt="banner1"
            className="w-20"
          />
          <h2 className="text-4xl absolute bottom-30 left-20 z-20 text-white bg-black opacity-80">
            Find the best instruments
          </h2>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
