import React, { useState, useEffect } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [childrenArray, setChildrenArray] = useState([]);

  useEffect(() => {
    setChildrenArray(React.Children.toArray(children));
  }, [children]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + childrenArray.length) % childrenArray.length);
  };

  return (
    <div className="testimonial__container container swiper-container">
      <div className="swiper-wrapper">
        {childrenArray.map((child, index) => (
          <CarouselItem key={index} active={index === currentIndex}>
            {child}
          </CarouselItem>
        ))}
      </div>
      <div className="swiper-button-next" onClick={nextSlide}>
        <i className="uil uil-angle-right-b swiper-portfolio-icon" />
      </div>
      <div className="swiper-button-prev" onClick={prevSlide}>
        <i className="uil uil-angle-left-b swiper-portfolio-icon" />
      </div>
      <div className="swiper-pagination swiper-pagination-testimonial" />
    </div>
  );
};

const CarouselItem = ({ children, active }) => (
  <div className={`swiper-slide ${active ? 'swiper-slide-active' : ''}`}>
    {children}
  </div>
);

export { Carousel, CarouselItem };