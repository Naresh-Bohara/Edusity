import React from "react";
import SectionWrapper from "../common/section-wrapper";
import campusImg1 from "../../assets/images/colleges/college-1.png";
import campusImg2 from "../../assets/images/colleges/college-2.png";
import campusImg3 from "../../assets/images/colleges/college-3.png";
import campusImg4 from "../../assets/images/colleges/college-4.png";
import { FiArrowRight } from "react-icons/fi";

const CampusSection = () => {
  const campus = [
    {
      id: 1,
      image: campusImg1,
    },
    {
      id: 2,
      image: campusImg2,
    },
    {
      id: 3,
      image: campusImg3,
    },
    {
      id: 4,
      image: campusImg4,
    },
  ];

  return (
    <SectionWrapper id="campus" className="bg-white">
      <div>
        {/* Title Section */}
        <div className="text-center">
          <p className="text-[18px] font-semibold text-[#212ea0] uppercase tracking-wider">
            Gallery
          </p>
          <h2 className="text-[32px] font-bold text-[#000f38] mt-4">
            Campus Photos
          </h2>
        </div>

        {/* Campus Cards - 4 in one row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-22">
          {campus.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer h-64 md:h-80"
            >
              <img
                src={item.image}
                alt="Campus"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-[#212ea0] hover:bg-[#1a2386] text-white text-base px-6 py-2.5 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl">
            See More Here
            <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CampusSection;