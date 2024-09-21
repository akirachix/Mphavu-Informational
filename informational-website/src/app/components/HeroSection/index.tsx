
import React from 'react';


const HeroSection = () => {
  return (
    <div className="relative h-screen" style={{ backgroundImage: 'url(/images/hero-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', position: 'relative' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8">
        <h1 className="text-[50px] md:text-[60px] lg:text-[50px] font-bold mb-4 font-josefinsans md:mt-[20px]  lg:mt-[20px] sm:mt-[-250px]"> 
          Players you Trust
        </h1>
        
        <p className="text-[26px] sm:text-[25px] md:text-[50px] lg:text-[40px] mb-8 max-w-6xl text-center font-josefinsans font-thin"> 
          Welcome to Spot Us - the essential tool for coaches dedicated <br /> to maximizing player performance and team success.
        </p>
        
        <button className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-8 rounded text-[25px] font-josefinsans lg:text-[40px] md:text-[50px] ">
          Try Spot Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;



