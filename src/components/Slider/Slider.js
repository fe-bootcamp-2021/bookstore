import { React, useState, useEffect } from "react";
import "./Slider.css";

import slide1 from "../../pages/about/images/bookstore.jpg";
import slide2 from "../../pages/about/images/panorama.jpg";
import slide3 from "../../pages/about/images/azg.jpg";

const img = [
  <img alt="" key={slide1} src={slide1} width="100%" object-fit="cover"></img>,
  <img alt="" key={slide2} src={slide2} width="100%" object-fit="cover"></img>,
  <img alt="" key={slide3} src={slide3} width="100%" object-fit="cover"></img>,
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === img.length - 1 ? 0 : current + 1;
        return res;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  );
}
