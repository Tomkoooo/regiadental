import React, { useState, useEffect } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const doctors = [
  { id: 1, name: 'Dr. Teszt Elek', quote: 'Szeretem mikor ügyfeleim kerek mosollyal távoznak!', img: 'image 4547.jpg' },
  { id: 2, name: 'Dr. Kovács Anna', quote: 'A legjobb kezelés az, amelyik a páciensnek a legkényelmesebb.', img: 'image 4548.jpg' },
  { id: 3, name: 'Dr. Nagy Péter', quote: 'A mosoly egy életre szóló befektetés.', img: 'image 4549.jpg' }
];

const DoctorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? doctors.length - 1 : prevIndex - 1));
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === doctors.length - 1 ? 0 : prevIndex + 1));
    setProgress(0);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 10 seconds

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 100);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [currentIndex]);

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-8" id="munkatársaink">
      <h1 className="text-2xl sm:text-3xl uppercase font-bold mt-2">Munkatársaink</h1>

      {/* Carousel Section */}
      <div className="relative w-full h-64 max-w-md sm:max-w-lg flex items-center justify-center mt-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 bg-white p-2 rounded-full shadow-md z-10"
        >
          <IconArrowLeft size={24} />
        </button>

        {/* Card Carousel */}
        <div className="relative w-full flex justify-center items-center">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`absolute w-full flex justify-center items-center transition-all duration-700 ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
              }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-72 sm:w-96">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 shadow-md"
                />
                <h2 className="text-lg sm:text-xl font-semibold">{doctor.name}</h2>
                <p className="italic text-gray-600 text-sm sm:text-base">{doctor.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 bg-white p-2 rounded-full shadow-md z-10"
        >
          <IconArrowRight size={24} />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="w-full max-w-md sm:max-w-lg h-1 bg-gray-300 mt-4">
        <div className="h-full bg-red-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
      </div>

      {/* View All Employees */}
      <Link to="/munkatarsaink">
        <p className="mt-6 text-blue-600 hover:text-blue-800 text-sm sm:text-base font-semibold cursor-pointer">
          Összes munkatárs megtekintése →
        </p>
      </Link>
    </div>
  );
};

export default DoctorsCarousel;