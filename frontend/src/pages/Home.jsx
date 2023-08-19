import  { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between p-4 ">
        <div className="text-white text-xl">My Website</div>
        <div className="hidden md:flex space-x-4">
          <div className="text-white cursor-pointer hover:text-gray-300">Home</div>
          <div className="text-white cursor-pointer hover:text-gray-300">Event</div>
          <div className="text-white cursor-pointer hover:text-gray-300">About Us</div>
          <div className="text-white cursor-pointer hover:text-gray-300">Contact Us</div>
          <div className="text-white cursor-pointer hover:text-gray-300">Sponsors</div>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 transition-transform transform translate-x-0 md:hidden">
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
