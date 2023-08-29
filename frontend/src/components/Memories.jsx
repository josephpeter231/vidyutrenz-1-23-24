import React from 'react';
import vidyu_video from "../assets/vidyu_video.mp4";

const Memories = () => {
  return (
    <div className='p-16'>
      <div className="bg-transperant p-12 md:flex md:space-x-4 rounded-lg overflow-hidden h-screen backdrop-filter-10px">

        <div className="w-full h-1/2 md:w-full relative group">
          <video
            src={vidyu_video}
            className="w-full h-full object-cover hover:filter blur-lg"
            autoPlay
            loop
            muted
            alt="Section"
          />
          <div className="absolute z-50 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-center">
              Hover to Reveal Text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;
