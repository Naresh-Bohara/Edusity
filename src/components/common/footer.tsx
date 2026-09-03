import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 py-6">
        
        <hr className="border-t border-gray-500 mb-3" />
        
    
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
          <p className="text-[#333333] text-sm">
            © 2024 Edusity. All rights reserved.
          </p>

     
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#333333] text-sm hover:text-[#212ea0] transition-colors"
            >
              Terms of Services
            </a>
            <a
              href="#"
              className="text-[#333333] text-sm hover:text-[#212ea0] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;