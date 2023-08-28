import  { useState } from 'react';
import { motion } from 'framer-motion';
import white_logo_pngg from '../assets/white_logo_pngg.png';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transperent backdrop-blur-xl">
      <div className="flex items-center justify-between p-4 ">
        <motion.div className='object-cover text-white'
        initial={{ opacity: 0, y: 100 }} // Initial state
        animate={{ opacity: 1, y: 0}} // Target state
        transition={{ type: 'smooth', duration: 1, delay: 0.3 }}
        >
          <img className="h-20 "src={white_logo_pngg} alt="logo" />
        </motion.div>
        <div className="hidden md:flex space-x-6">

          <motion.div className="text-white cursor-pointer hover:text-gray-300"
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.4 }}
          >Home</motion.div>

          <motion.div className="text-white cursor-pointer hover:text-gray-300"
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.5 }}
          >Event</motion.div>

          <motion.div className="text-white cursor-pointer hover:text-gray-300"
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.6 }}
          
          >About Us</motion.div>

          <motion.div className="text-white cursor-pointer hover:text-gray-300"
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.7 }}
          
          >Contact Us</motion.div>

          <motion.div className="text-white cursor-pointer hover:text-gray-300"
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.8 }}
          
          >Sponsors</motion.div>

        </div>
        <motion.button className="md:hidden text-white" onClick={toggleMenu}>
          Menu
        </motion.button>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-transperant transition-transform transform translate-x-0 md:hidden p-4">
          <div className="text-center">
            <div className="text-white cursor-pointer hover:text-gray-300">Home</div>
            <div className="text-white cursor-pointer hover:text-gray-300">Event</div>
            <div className="text-white cursor-pointer hover:text-gray-300">About Us</div>
            <div className="text-white cursor-pointer hover:text-gray-300">Contact Us</div>
            <div className="text-white cursor-pointer hover:text-gray-300">Sponsors</div>
          </div>
          <button className="block mx-auto mt-4 text-white" onClick={toggleMenu}>
            Close
          </button>
        </div>
      )}
    </nav>
  );
};

export default Home;
