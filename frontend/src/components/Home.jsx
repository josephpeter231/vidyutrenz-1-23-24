import {motion} from 'framer-motion';
import AnimateVariant from './framer';
import Footer from './footer';



const Home1 = () => {
    return (
      <motion.div className="text-white h-screen"
      initial="offscreen"
      animate="onscreen"
      variants={AnimateVariant}
      viewport={{ once: true, amount: 0.8 }}
      >

        <div className='flex-row w-full h-screen pt-24' >
        
            <h1 className="text-center text-5xl pt-24">VIDYUTRENZ</h1>
            <p className="font-serif text-center text-1xl  text-gray-100 text-opacity-40">
            National Level Technical Symposiyum from the Department of Electronics and Communication Engineering
            </p>
            <Footer/>
           
        </div>
        

            {/* <span className='absolute bottom-0 right-0 pb-20 text-white'>CHENNAI INSTITUTE OF TECHNOLOGY</span> */}
      </motion.div>
      );
  }
   
  export default Home1;