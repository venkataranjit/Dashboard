import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

let NpmSlider = () => {
  const marginBottom = {
    marginBottom : "50px",
  }
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>Npm Slider</h2>
        <div style={marginBottom}>
          <Carousel>
            <div>
              <img src="/assets/1.jpeg" alt=""/>
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="/assets/2.jpeg" alt=""/>
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="/assets/3.jpeg" alt=""/>
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </main>
    </>
  );
};

export default NpmSlider;
