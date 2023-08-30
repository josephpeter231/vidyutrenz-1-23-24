
import { FaYoutube, FaTwitter, FaInstagram ,FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen items-center flex flex-col blur-3xl bg-transparent text-white text-center py-4 md:flex-row  space-x-9 ">
     
            <div className=" md:flex px-8  flex  space-x-10">
                <a  href="https://www.facebook.com/" className=" text-xl">
                <FaYoutube />
                </a>
                <a href="https://twitter.com/" className="text-xl">
                <FaTwitter />
                </a>
                <a href="https://www.instagram.com/" className="text-xl">
                <FaInstagram />
                </a>
                <a href="https://www.instagram.com/" className="text-xl">
                <FaLinkedinIn />
                </a>
            </div>
            <div className='md: mx-10 text-xs'>
                    <p className='mt-4 md:mx-10 '>&copy; Copyright 2023</p>
            </div>
            <div className="md: text-xs">
                    <p className='mt-4'>Chennai Institute of Technology</p>
            </div>
            
      
    </footer>
  );
};

export default Footer;
