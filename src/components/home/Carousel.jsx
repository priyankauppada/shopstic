import React, { useState, useEffect } from "react";
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.png'
import carousel3 from '../../assets/carousel3.jpg'
import carousel4 from '../../assets/carousel4.jpg'
import carousel5 from '../../assets/carousel5.jpg'


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images array
  const images = [ carousel1, carousel2, carousel3, carousel4, carousel5, ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide effect using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative  ">
      {/* Image Wrapper */}
      <div className="overflow-x-hidden">
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="min-h-48 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4  text-black p-2"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4  text-black p-2"
      >
        ❯
      </button>

     
    </div>
  );
};

export default Carousel;
