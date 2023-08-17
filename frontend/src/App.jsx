import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={ <AboutUs/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
