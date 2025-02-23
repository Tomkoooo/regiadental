'use client'
import React, { useState } from 'react';
import { IconArrowLeft, IconArrowRight, IconGradienter } from '@tabler/icons-react';

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
    <div className='w-full flex flex-col items-center'>
        <div className="flex items-center gap-4 w-full">
            <div className="flex-1 border-t-2 border-red-500 border-info"></div>

            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_467_327)">
<path d="M71.5 29.25L39 16.25L6.5 29.25L39 42.25L71.5 29.25ZM71.5 29.25V48.75" stroke="oklch(0.637 0.237 25.331)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 34.4502V52.0002C19.5 54.5861 21.5545 57.066 25.2114 58.8945C28.8684 60.723 33.8283 61.7502 39 61.7502C44.1717 61.7502 49.1316 60.723 52.7886 58.8945C56.4455 57.066 58.5 54.5861 58.5 52.0002V34.4502" stroke="oklch(0.637 0.237 25.331)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_467_327">
<rect width="78" height="78" fill="white"/>
</clipPath>
</defs>
</svg>
            <div className="flex-1 border-t-2 border-info border-red-500"></div>
        </div>
<h1 className='text-3xl uppercase w-full flex justify-center font-bold'>orvosaink</h1>
      <div className='relative w-[600px] h-[300px] flex items-center justify-center bg-red-200 rounded-full overflow-hidden'>
        <button onClick={prevSlide} className='absolute left-4 bg-white p-2 rounded-full shadow-md z-10'>
          <IconArrowLeft size={24} />
        </button>
        <div className='flex w-full justify-center items-center gap-4'>
          {doctors.map((doctor, index) => (
            <img key={doctor.id} src={doctor.img} alt={doctor.name}
              className={`w-[150px] h-[150px] object-cover rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-[180px] h-[180px] z-5' : 'opacity-50'
              }`} />
          ))}
        </div>
        <button onClick={nextSlide} className='absolute right-4 bg-white p-2 rounded-full shadow-md z-10'>
          <IconArrowRight size={24} />
        </button>
      </div>
      <div className='flex mt-4 space-x-2'>
        {doctors.map((_, index) => (
          <span key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}></span>
        ))}
      </div>
      <h2 className='mt-4 text-xl font-semibold'>{doctors[currentIndex].name}</h2>
      <p className='italic text-gray-600'>{doctors[currentIndex].quote}</p>
    </div>
  );
};

export default DoctorsCarousel;
