'use client'
import { useState } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const doctors = [
  { id: 1, name: 'Dr. Teszt Elek', quote: 'Szeretem mikor ügyfeleim kerek mosollyal távoznak!', img: 'image 4547.jpg' },
  { id: 2, name: 'Dr. Kovács Anna', quote: 'A legjobb kezelés az, amelyik a páciensnek a legkényelmesebb.', img: 'image 4548.jpg' },
  { id: 3, name: 'Dr. Nagy Péter', quote: 'A mosoly egy életre szóló befektetés.', img: 'image 4549.jpg' }
];

const DoctorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? doctors.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === doctors.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-8" id='orvosaink'>
      {/* Header Section */}
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 border-t-2 border-red-500"></div>
        <svg width="50" height="50" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M71.5 29.25L39 16.25L6.5 29.25L39 42.25L71.5 29.25ZM71.5 29.25V48.75" stroke="red" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.5 34.4502V52.0002C19.5 54.5861 21.5545 57.066 25.2114 58.8945C28.8684 60.723 33.8283 61.7502 39 61.7502C44.1717 61.7502 49.1316 60.723 52.7886 58.8945C56.4455 57.066 58.5 54.5861 58.5 52.0002V34.4502" stroke="red" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="flex-1 border-t-2 border-red-500"></div>
      </div>
      <h1 className="text-2xl sm:text-3xl uppercase w-full flex justify-center font-bold mt-2">Orvosaink</h1>

      {/* Carousel Section */}
      <div className="relative w-full max-w-lg sm:max-w-xl h-auto flex items-center justify-center mt-6">
        {/* Left Arrow */}
        <button onClick={prevSlide} className="absolute left-2 sm:left-4 bg-white p-2 rounded-full shadow-md z-10">
          <IconArrowLeft size={20} className="sm:size-8" />
        </button>

        {/* Image Carousel */}
        <div className="flex w-full justify-center items-center gap-4">
          {doctors.map((doctor, index) => (
            <img 
              key={doctor.id} 
              src={doctor.img} 
              alt={doctor.name}
              className={`rounded-full object-cover transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 scale-110 z-10' 
                  : 'w-24 h-24 sm:w-28 sm:h-28 opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="absolute right-2 sm:right-4 bg-white p-2 rounded-full shadow-md z-10">
          <IconArrowRight size={20} className="sm:size-8" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex mt-4 space-x-2">
        {doctors.map((_, index) => (
          <span key={index} className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}></span>
        ))}
      </div>

      {/* Doctor Info */}
      <h2 className="mt-4 text-lg sm:text-xl font-semibold">{doctors[currentIndex].name}</h2>
      <p className="italic text-gray-600 text-sm sm:text-base text-center max-w-xs sm:max-w-sm">{doctors[currentIndex].quote}</p>
    </div>
  );

};

export default DoctorsCarousel;
