import React, { useState } from "react";
import SectionWrapper from "../common/section-wrapper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import user1 from "../../assets/images/users/user-1.png";
import user2 from "../../assets/images/users/user-2.png";
import user3 from "../../assets/images/users/user-2.png";
import user4 from "../../assets/images/users/user-3.png";
import user5 from "../../assets/images/users/user-3.png";
import user6 from "../../assets/images/users/user-4.png";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emily Williams",
      location: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      image: user1,
    },
    {
      id: 2,
      name: "John Smith",
      location: "Edusity, UK",
      text: "The faculty at Edusity are incredibly knowledgeable and always willing to help. The hands-on learning approach and real-world projects prepared me perfectly for my career.",
      image: user2,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "Edusity, Canada",
      text: "I'm grateful for the diverse and inclusive community at Edusity. The international exposure and networking opportunities have been invaluable for my personal growth.",
      image: user3,
    },
    {
      id: 4,
      name: "Michael Brown",
      location: "Edusity, Australia",
      text: "The state-of-the-art facilities and modern teaching methods at Edusity made learning enjoyable and effective. I would highly recommend it to anyone seeking quality education.",
      image: user4,
    },
    {
      id: 5,
      name: "Jessica Davis",
      location: "Edusity, Germany",
      text: "Edusity provided me with the perfect blend of theoretical knowledge and practical skills. The career support and guidance I received were exceptional.",
      image: user5,
    },
    {
      id: 6,
      name: "David Wilson",
      location: "Edusity, France",
      text: "Studying at Edusity has been a life-changing experience. The supportive environment and world-class education have opened countless opportunities for me.",
      image: user6,
    },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentItems = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <SectionWrapper id="testimonials" className="">
      <div>
        {/* Title Section */}
        <div className="text-center">
          <p className="text-[15px] font-semibold text-[#212ea0] uppercase tracking-wider">
            TESTIMONIALS
          </p>
          <h2 className="text-[32px] font-bold  text-[#000f38] mt-2">
            What Student Says
          </h2>
        </div>

        {/* Testimonials Carousel with Side Arrows */}
        <div className="relative mt-12">
          <div className="flex items-center gap-2 md:gap-4">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                currentIndex === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                  : "bg-[#212ea0] text-white hover:bg-[#1a2386] hover:scale-105"
              }`}
            >
              <FiChevronLeft className="text-2xl md:text-3xl" />
            </button>

            {/* Cards Container */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-64 md:h-72"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-[#212ea0]"
                      />
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-[#000f38]">
                          {item.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-4">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === totalPages - 1}
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                currentIndex === totalPages - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                  : "bg-[#212ea0] text-white hover:bg-[#1a2386] hover:scale-105"
              }`}
            >
              <FiChevronRight className="text-2xl md:text-3xl" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#212ea0] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;