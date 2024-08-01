import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [wantedLevel, setWantedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWantedLevel(5);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center relative">
          <div className='absolute bottom-5 left-5 md:flex justify-center items-center z-10 hidden'>
            <a href="https://x.com/" className=''>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#facc15" viewBox="0 0 50 50">
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
            <a href="https://t.me/" className=''>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#facc15" viewBox="0 0 50 50">
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
            </a>
          </div>
          <div className='absolute top-5 left-5 flex justify-center items-center z-10 md:hidden'>
            <a href="https://x.com/" className=''>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#facc15" viewBox="0 0 50 50">
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
            <a href="https://t.me/" className=''>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#facc15" viewBox="0 0 50 50">
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
            </a>
          </div>
      {/* Background image (blurred when overlay is active) */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/bg.png")' }}></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Wanted Level Stars */}
      <div className="absolute top-4 right-4 flex space-x-1 z-20">
        {[...Array(5)].map((_, index) => (
          <div key={index} className={`w-8 h-8 relative ${index < wantedLevel ? 'animate-star-appear' : ''}`}>
            <svg className={`w-full h-full ${index < wantedLevel ? 'text-black' : 'text-black'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {index < wantedLevel && (
              <svg className="absolute inset-0 w-full h-full text-yellow-400 animate-star-fill" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            )}
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center">
        <div className="font-custom text-red-700 pt-[1%] pb-[2%] text-5xl md:text-7xl font-bold animate-pulse bg-black opacity-40 w-screen text-center grid">
          <div className='text-xs md:text-base'>CA: coming soon...</div>
          WASTED
        </div>
      </div>
    </div>
  );
}

export default App;