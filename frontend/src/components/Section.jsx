import React from 'react';
import white_logo_pngg from '../assets/white_logo_pngg.png'

const Section = () => {
  return (
    <div className='p-16'>
            <div className="bg-transperant p-24 md:flex md:space-x-4 rounded-lg overflow-hidden h-screen backdrop-filter-10px border border-gray-600" style={{WebkitBackdropFilter: 'blur(5px)', // Apply the blur effect using -webkit-backdrop-filter
    backdropFilter: 'blur(5px)'}} >
                    {/* Left Column */}
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">Technical</h2>
                        <p className="text-custom-gray font-serif">Aute officia eiusmod exercitation ullamco exercitation Lorem aute ex esse reprehenderit enim do. Laboris voluptate sint laboris qui ad incididunt enim reprehenderit dolore est occaecat ut. Anim amet consequat irure aliquip laborum ut reprehenderit. Et non commodo ut esse dolor eiusmod.Elit adipisicing amet minim minim cupidatat sit ad et anim quis. Sint enim proident labore nulla quis consequat sint sint dolore eiusmod deserunt. Sint nulla officia officia commodo consectetur eu elit dolore do.Sint aliquip pariatur do deserunt nisi voluptate sint dolor culpa irure sunt sint. Velit exercitation exercitation cillum in culpa consequat magna. Cupidatat sunt est minim et. Aute mollit occaecat nisi excepteur. Incididunt ut id exercitation reprehenderit deserunt et dolore.</p>
                    </div>
                    {/* Right Column */}
                    <div className="bg-center md:w-1/2">
                        <img src={white_logo_pngg} alt="Section" className="w-full  h-fit" />
                    </div>
            </div>
    </div>
  );
};

export default Section;
