import { Link } from 'react-router-dom'
import {useState} from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={`w-full h-[8rem] flex  bg-red-500 text-black sticky top-2 z-50 shadow-xl ${isOpen? '' : 'rounded-b-lg'}`}>
        <div className="flex w-full justify-between">
          <div className='h-full md:w-1/3 w-2/3 rounded-tr-[7rem] rounded-br-[7rem] bg-red-400 flex items-center justify-center'>
              <a href='https://regiadental.hu' className='lg:text-3xl uppercase text-white'>
                  Regia Dentál
              </a>
          </div>
          <div className='h-full hidden lg:flex w-2/3 justify-around items-center uppercase md:text-xl txt-sm flex-wrap text-white'>
              <a href='/#rolunk' className='cursor-pointer hover:scale-105 transition ease-in-out'>rólunk</a>
              <a href='/#szolgaltatas' className='cursor-pointer hover:scale-105 transition ease-in-out'>szolgáltatás</a>
              <a href='/#munkatársaink' className='cursor-pointer hover:scale-105 transition ease-in-out'>orvosaink</a>
              <a href="/#időpontkérés" className='cursor-pointer hover:scale-105 transition ease-in-out'>időpontfoglalás</a>
              <Link to="/araink" className='cursor-pointer hover:scale-105 transition ease-in-out'>áraink</Link>
          </div>
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white focus:outline-none mr-4"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }} // Rotate animation
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
              </motion.div>
            </button>
        </div>

        <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="lg:hidden bg-red-500 p-4 flex flex-col gap-3 absolute top-[8rem] left-0 w-full items-center shadow-md"
              >

            <a href='/#rolunk' className='cursor-pointer hover:scale-105 transition ease-in-out text-white'>rólunk</a>
            <a href='/#szolgaltatas' className='cursor-pointer hover:scale-105 transition ease-in-out text-white'>szolgáltatás</a>
            <a href='/#munkatársaink' className='cursor-pointer hover:scale-105 transition ease-in-out text-white'>orvosaink</a>
            <a href="/#időpontkérés" className='cursor-pointer hover:scale-105 transition ease-in-out text-white'>időpontfoglalás</a>
            <Link to="/araink" className='cursor-pointer hover:scale-105 transition ease-in-out text-white'>áraink</Link>

              </motion.div>
            )}
          </AnimatePresence>
    </nav>
  )
}

export default Navbar