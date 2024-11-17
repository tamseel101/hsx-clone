import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import './Slider.css';

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log('selected index: ', selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.image}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={slide.title}
            />
            <Carousel.Caption>
              <h5>{slide.title}</h5>
              <p>{slide.subTitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
