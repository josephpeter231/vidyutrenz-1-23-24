import {motion} from 'framer-motion';
import AnimateVariant from './framer';
import Footer from './footer';
import Section from './Section';
import Memories from './Memories';
const Home1 = () => {
    return (
      <motion.div className="text-white h-screen"
      initial="offscreen"
      animate="onscreen"
      variants={AnimateVariant}
      viewport={{ once: true, amount: 0.8 }}

    //   style={{WebkitBackdropFilter: 'blur(5px)', // Apply the blur effect using -webkit-backdrop-filter
    // backdropFilter: 'blur(5px)'}}
      >

        <div className='flex flex-col items-center w-full h-screen pt-24'>
         
         <div className="mt-24 rounded-lg w-3/4">           
             <h1 className="text-center text-5xl " >VIDYUTRENZ</h1>
             <p className="font-serif text-center text-1xl  text-gray-100 text-opacity-40">
                National Level Technical Symposiyum from the Department of Electronics and Communication Engineering
            </p>
        </div>

            <Footer/>
            <Section/>
            <Memories/>
        </div>
        

            {/* <span className='absolute bottom-0 right-0 pb-20 text-white'>CHENNAI INSTITUTE OF TECHNOLOGY</span> */}
      </motion.div>
      );
  }
   
  export default Home1;