import React from 'react'

const HeroSection = () => {
      return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0b0b0b] via-[#1a1a1a] to-black text-white px-6 overflow-hidden">
        {/* Orange glow i bakgrunden */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/20 blur-[200px] rounded-full"></div>
  
        {/* Innehåll */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block">Discover a</span>
            <span className="block text-orange-500">Revolutionary</span>
            <span className="block">way to attract</span>
            <span className="block">leads</span>
          </h1>
  
          <p className="mt-6 text-gray-300 text-lg">
            Grow your business with modern design and smart strategy.
          </p>
  
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="btn btn-warning font-semibold px-6">
              Get Started
            </button>
            <button className="btn btn-outline text-white border-gray-500 hover:border-white">
              Learn More
            </button>
          </div>
        </div>
      </section>
      );
    }
    

export default HeroSection