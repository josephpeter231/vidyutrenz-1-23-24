import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-screen inline-flex flex-row justify-between blur-3xl mt-64 bg-transparent text-white text-center py-4 md:flex-shrink">
     
            <div className="md:flex px-8 pt-24 flex justify-start space-x-10">
                <a  href="https://www.facebook.com/" className=" text-xl">
                <FaYoutube />
                </a>
                <a href="https://twitter.com/" className="text-xl">
                <FaTwitter />
                </a>
                <a href="https://www.instagram.com/" className="text-xl">
                <FaInstagram />
                </a>
            </div>
            <div className='md:flex mx-10 text-xs'>
                    <p className='mx-10 mt-24'>&copy; Copyright 2023</p>
            </div>
            <div className="md:flex text-xs">
                    <p className='mt-24'>Chennai Institute of Technology</p>
            </div>
            
      
    </footer>
  );
};

export default Footer;
