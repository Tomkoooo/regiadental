import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-[8rem] flex bg-red-500 text-black sticky top-0 z-50 shadow-xl rounded-b-xl'>
        <div className='h-full w-1/3 rounded-tr-[7rem] rounded-br-[7rem] bg-red-400 flex items-center justify-center'>
            <a href='https://regiadental.hu' className='lg:text-3xl uppercase text-white'>
                Regia Dentál
            </a>
        </div>
        <div className='h-full w-2/3 flex justify-around items-center uppercase md:text-xl txt-sm flex-wrap text-white'>
            <a href='https://regiadental.hu/#rolunk' className='cursor-pointer hover:scale-105 transition ease-in-out'>rólunk</a>
            <a href='https://regiadental.hu/#szolgaltatas' className='cursor-pointer hover:scale-105 transition ease-in-out'>szolgáltatás</a>
            <a href='https://regiadental.hu/#orvosaink' className='cursor-pointer hover:scale-105 transition ease-in-out'>orvosaink</a>
            <a href="https://regiadental.hu/#kapcsolatfelvétel" className='cursor-pointer hover:scale-105 transition ease-in-out'>időpontfoglalás</a>
            <Link to="/araink" className='cursor-pointer hover:scale-105 transition ease-in-out'>áraink</Link>
        </div>
    </nav>
  )
}

export default Navbar