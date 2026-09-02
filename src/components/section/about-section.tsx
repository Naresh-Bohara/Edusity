import React, { useState } from "react";
import SectionWrapper from "../common/section-wrapper";
import aboutImage from "../../assets/images/about.png";
import playIcon from "../../assets/images/play-icon.png";
import videoUrl from "../../assets/videos/college-video.mp4";

const AboutSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <SectionWrapper id="about" className="bg-white">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          {/* Left Side - Image with Play Button */}
          <div className="w-full lg:w-2/5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full min-h-[500px]">
              <img
                src={aboutImage}
                alt="About University"
                className="w-full h-full object-cover"
              />
              
              <div 
                className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40"
                onClick={() => setIsVideoOpen(true)}
              >
                <img 
                  src={playIcon} 
                  alt="Play" 
                  className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-3/5 flex items-center">
            <div>
              <h3 className="text-[16px] font-semibold text-[#212ea0] uppercase tracking-wider">
                ABOUT UNIVERSITY
              </h3>
              <h2 className="text-[35px] font-bold text-[#000f38] mt-2 max-w-[400px]">
                Nurturing Tomorrow's Leaders Today
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-3">
                With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-3">
                Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Video Modal using HTML5 video */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              ×
            </button>
            
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full rounded-2xl"
              style={{ maxHeight: '80vh' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;