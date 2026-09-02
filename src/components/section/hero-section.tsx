import React from 'react'
import heroBg from "../../assets/images/bg-image.png"
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white font-['Outfit',serif]"
      style={{ 
        backgroundImage: `linear-gradient(#08003ab3, #08003ab3), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center max-w-[800px] mx-auto px-4 sm:px-6">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold leading-tight">
          We Ensure better education <br className="hidden sm:block" />
          for a better world
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mt-4 sm:mt-5 md:mt-6 max-w-2xl mx-auto">
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
        </p>
  <button className="group inline-flex items-center gap-2 mt-3 bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all hover:scale-105 text-sm sm:text-base  shadow-lg hover:shadow-xl">
  Explore More 
  <span className="inline-block transition-all duration-300 group-hover:translate-x-2">
    <FiArrowRight className="text-base sm:text-lg" />
  </span>
</button>
      </div>
    </section>
  )
}

export default HeroSection