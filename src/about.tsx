'use client'
import { IconArrowLeft, IconArrowRight, IconCaretRight, IconSignLeft, IconStethoscope } from '@tabler/icons-react'
import React, {useState} from 'react'

const About = () => {
  const images = [
    "https://keramiadental.hu/wp-content/uploads/2022/12/0851790ee0b4a937b7619d9905a373c1.jpg"
  ];

  const [currentImage, setCurrentImage] = useState<number>(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className='w-full p-12 flex flex-col gap-2 text-xl' id='rolunk'>
        <div className="flex items-center gap-4 w-full">
            <div className="flex-1 border-t-2 border-red-500 border-info"></div>
            <IconStethoscope color='oklch(0.637 0.237 25.331)' size={100}/>
            <div className="flex-1 border-t-2 border-info border-red-500"></div>
        </div>

        <h1 className='text-3xl uppercase w-full flex justify-center font-bold' >rólunk</h1>
        <span className='w-full flex justify-center text-red-500'>Üdvözöljük fogászati oldalunkon.  </span>
        <div className='w-full flex md:flex-row gap-8 md:gap-0 flex-col items-center justify-between p-10'>
            <div className='md:w-1/2 w-full flex items-center justify-center relative'>
                {images.length > 1 && (            
                <button onClick={prevImage} className='absolute left-32 top-1/2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full text-white  hover:bg-red-400 hover:scale-95 transition ease-in-out'>
                <IconArrowLeft/>
                </button>)}

                <img src={images[currentImage]} alt='Gallery' className='w-2/3 min-h-80 object-cover rounded-xl shadow-lg shadow-red-400/50' />
                {images.length > 1 && (
                    <button onClick={nextImage} className='absolute right-32 top-1/2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full text-white hover:bg-red-400 hover:scale-95 transition ease-in-out'>
                    <IconArrowRight/>
                    </button>
                )}
            </div>

            {/* Empty Text Section */}
            <div className='md:w-1/2 w-full  flex justify-center  gap-4 flex-col'>
                <span className='text-red-500 w-full flex justify-center text-2xl'>Szép tiszta mosoly az orvasainktól - fogászatunktól</span>
                <span className='indent-6'>   A Régia Dental Fogászati Központunkban ötvözzük a családias légkört, a bizalmon alapuló kapcsolat kialakítását, a legmodernebb eljárások alkalmazását kiemelt szaktudásunkkal. Berendezéseink és alapanyagaink a legújabb technológiai eljárásokon alapulnak. Munkánkat nyugati színvonalon, a legjobb minőségű fogászati anyagok felhasználásával végezzük. Rendelőnkben dolgozó orvosaink magasan képzettek, emellett több idegen nyelvet is beszélnek. </span>
                <span className='text-red-500 hover:underline transition ease-in-out cursor-pointer flex'><IconCaretRight/> Lépjen kapcsolatba velünk!</span>
                <span className='text-red-500 hover:underline transition ease-in-out cursor-pointer flex'><IconCaretRight/> Időpont foglalás</span>
                <span className='indent-6'>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida sollicitudin neque, quis rhoncus mi. Vivamus ut pretium risus, non dignissim neque. Duis justo nisl, viverra et magna quis, sollicitudin malesuada urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </span>
            </div>
        </div>
    </div>
  )
}

export default About