import  { useState } from 'react';
import { motion } from 'framer-motion';
import {GiHamburgerMenu}  from 'react-icons/gi';
import white_logo_pngg from '../assets/white_logo_pngg.png'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black-800 p-4" style={{WebkitBackdropFilter: 'blur(10px)', // Apply the blur effect using -webkit-backdrop-filter
    backdropFilter: 'blur(10px)'}}>
      <div className="flex items-center justify-between p-4 ">
        <div className="text-white text-xl">
        <motion.div
      className="object-cover"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'smooth', duration: 1, delay: 0.3 }}
    >
      <img
        src= {white_logo_pngg} // Replace with your actual image source
        alt="My Website"
        className="cursor-pointer hover:opacity-75 h-12"
      />
    </motion.div>
          </div>
          <div className='hidden md:flex flex-row space-x-4'>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.4 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Home</div>
          </motion.div>
          <motion.div className="text-white cursor-pointer hover:text-gray-300"
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.5 }}
          >Event</motion.div>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.6 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">About Us</div>
          </motion.div>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.7 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Contact Us</div>
          </motion.div>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.8 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Sponsors</div>
          </motion.div>
          </div>
          
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <GiHamburgerMenu/>
          </button>

        
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 h-full p-4 w-64 transition-transform transform translate-x-0 md:hidden" style={{WebkitBackdropFilter: 'blur(5px)', 
        backdropFilter: 'blur(5px)'}} >
          <div className="font-bold text-center flex flex-col space-y-4 " >
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0}} 
          transition={{ type: 'smooth', duration: 1, delay: 0.3 }}
          >
          <div className="text-white cursor-pointer ">Home</div>
          </motion.div>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0}} 
          transition={{ type: 'smooth', duration: 1, delay: 0.4 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Event</div>
          </motion.div>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.5 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">About Us</div>
          </motion.div>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.6 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Contact Us</div>
          </motion.div>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.7 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Sponsors</div>
          </motion.div>
        </div>
          <button className="block mx-auto mt-4 text-white" onClick={toggleMenu}>
          <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.9 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300"><GiHamburgerMenu/></div>
          </motion.div>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Home;