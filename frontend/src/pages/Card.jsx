import  { useState } from 'react';
import cd from '../assets/cit.png';

const Card = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

 const cardStyle = {
    position: 'relative',
    maxWidth: '300px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'filter 0.3s',
 
    borderRadius: '10px',
  };

  const imageStyle = {
    width: '100%',
    filter: hovered ? 'blur(5px)' : 'none', 
    transition: 'filter 0.3s',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    display: hovered ? 'none' : 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.9',
  };

  const overlayTextStyle = {
    color: 'black',
    textAlign: 'center',
    marginTop:'230px'
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: 'relative' }}>
        <img
          style={imageStyle}
          src={cd}
          alt="Description of the Image"
        />
        <div style={overlayStyle}>
          <p className='mt-[48] ' style={overlayTextStyle}>
            BGMI
          </p>
        </div>
      </div>

      <div style={{ display: hovered ? 'block' : 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ color: 'white', textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
