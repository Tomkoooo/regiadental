import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[8rem] flex bg-red-500 text-black sticky top-0 z-50 shadow-xl rounded-b-xl'>
        <div className='h-full w-1/3 rounded-tr-[7rem] rounded-br-[7rem] bg-red-400 flex items-center justify-center'>
            <span className='lg:text-3xl uppercase text-white'>
                Regia Dentál
            </span>
        </div>
        <div className='h-full w-2/3 flex justify-around items-center uppercase md:text-xl txt-sm flex-wrap text-white'>
            <a href='#rolunk' className='cursor-pointer hover:scale-105 transition ease-in-out'>rólunk</a>
            <a href='#szolgaltatas' className='cursor-pointer hover:scale-105 transition ease-in-out'>szolgáltatás</a>
            <a href='#orvosaink' className='cursor-pointer hover:scale-105 transition ease-in-out'>orvosaink</a>
            <a href="#kapcsolatfelvétel" className='cursor-pointer hover:scale-105 transition ease-in-out'>időpontfoglalás</a>
        </div>
    </nav>
  )
}

export default Navbar