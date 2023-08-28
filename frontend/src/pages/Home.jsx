import Navbar from '/src/components/Navbar';
import Home1 from '../components/Home';
import "./home.css";
import cd from '../assets/cd.jpg';


const Home = () => {
  return (
    <div className='bgg bg-cover op-0 h-screen bg-fixed '>
      
      <div className=' fixed w-full z-50'>
        <Navbar/>
      </div>
        <Home1/>
      
    </div>
    );
}
//  border-b border-gray-600
export default Home;