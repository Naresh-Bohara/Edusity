import React from "react";
import SectionWrapper from "../common/section-wrapper";
import graduationImg from "../../assets/images/programs-images/graduationImg.png";
import graduationImgIcon from "../../assets/images/programs-images/graduationImgIcon.png";
import masterImg from "../../assets/images/programs-images/masterImg.png";
import masterImgIcon from "../../assets/images/programs-images/masterImgIcon.png";
import postGraduationImg from "../../assets/images/programs-images/postGraduationImg.png";
import postGraduationImgIcon from "../../assets/images/programs-images/postGraduationImgIcon.png";

const ProgramSection = () => {
  const programs = [
    {
      id: 1,
      title: "Graduation Degree",
      image: graduationImg,
      icon: graduationImgIcon,
    },
    {
      id: 2,
      title: "Master Degree",
      image: masterImg,
      icon: masterImgIcon,
    },
    {
      id: 3,
      title: "Post Graduation",
      image: postGraduationImg,
      icon: postGraduationImgIcon,
    },
  ];

  return (
    <SectionWrapper id="program" className="bg-white">
      <div>
        {/* Title Section */}
        <div className="text-center">
          <p className="text-[15px] font-semibold text-[#212ea0] uppercase tracking-wider">
            Our Programs
          </p>
          <h2 className="text-[32px] font-bold text-[#000f38] mt-2">
            What We Offer 
          </h2>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-18">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Caption - From very bottom to center */}
              <div className="absolute inset-0 rounded-2xl bg-[#000f984d] flex flex-col items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <img 
                    src={program.icon} 
                    alt={program.title}
                    className="w-[60px] h-[60px] mb-[10px] mx-auto"
                  />
                  <h3 className="text-white text-l text-center">
                    {program.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProgramSection;