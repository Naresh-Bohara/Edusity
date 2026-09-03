import React from "react";
import SectionWrapper from "../common/section-wrapper";
import messageIcon from "../../assets/images/msg-icon.png";
import mailIcon from "../../assets/images/icons/mail-icon.png";
import phoneIcon from "../../assets/images/icons/phone-icon.png";
import locationIcon from "../../assets/images/icons/location-icon.png";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="">
      <div>
        {/* Title Section */}
        <div className="text-center">
          <p className="text-[15px] font-semibold text-[#212ea0] uppercase tracking-wider">
            CONTACT US
          </p>
          <h2 className="text-[32px] font-bold text-[#000f38] mt-2">
            Get in Touch
          </h2>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-2/5">
            <div className="rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-[25px] font-medium text-[#000f38] flex items-center gap-3 mb-5">
                Send a message
                <img src={messageIcon} alt="Message" className="w-6 h-6" />
              </h3>
              <p className="text-[#676767] text-base leading-[21px] mb-6">
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                our university community.
              </p>

              {/* Email */}
              <div className="flex items-center gap-4 mb-4">
                <img src={mailIcon} alt="Email" className="h-6" />
                <a
                  href="mailto:Contact@Gaurav.dev"
                  className="text-[#676767] hover:text-[#212ea0] font-medium text-sm transition-colors"
                >
                  Contact@Gaurav.dev
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 mb-4">
                <img src={phoneIcon} alt="Phone" className="h-6" />
                <a
                  href="tel:+11234567890"
                  className="text-[#676767] hover:text-[#212ea0] font-medium text-sm transition-colors"
                >
                  +1 123-456-7890
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <img src={locationIcon} alt="Location" className="h-8" />
                <p className="text-[#676767] font-medium text-sm">
                  77 Massachusetts Ave, Cambridge
                  <br />
                  MA 02139, United States
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-3/5">
            <form className="">
              {/* Your Name */}
              <div>
                <label className="block text-sm font-normal text-[#676767] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#ebecfe] focus:outline-none focus:ring-2 focus:ring-[#212ea0]/20 transition-all text-sm placeholder:text-sm placeholder-gray-400 text-[#676767]"
                />
              </div>

              {/* Phone Number */}
              <div className="mt-3">
                <label className="block text-sm font-normal text-[#676767] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your Phone number"
                  className="w-full px-4 py-3 rounded-xl bg-[#ebecfe] focus:outline-none focus:ring-2 focus:ring-[#212ea0]/20 transition-all text-sm placeholder:text-sm placeholder-gray-400 text-[#676767]"
                />
              </div>

              {/* Email */}
              <div className="mt-3">
                <label className="block text-sm font-normal text-[#676767] mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Enter your E-mail"
                  className="w-full px-4 py-3 rounded-xl bg-[#ebecfe] focus:outline-none focus:ring-2 focus:ring-[#212ea0]/20 transition-all text-sm placeholder:text-sm placeholder-gray-400 text-[#676767]"
                />
              </div>

              {/* Message */}
              <div className="mt-3">
                <label className="block text-sm font-normal text-[#676767] mb-1">
                  Write your message here
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-xl bg-[#ebecfe] focus:outline-none focus:ring-2 focus:ring-[#212ea0]/20 transition-all resize-none text-sm placeholder:text-sm placeholder-gray-400 text-[#676767]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 bg-[#212ea0] hover:bg-[#1a2386] text-white font-normal py-3 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg text-sm"
              >
                Submit Now →
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;