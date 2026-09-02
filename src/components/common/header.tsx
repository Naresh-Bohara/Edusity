import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Program", href: "#program" },
  { label: "About Us", href: "#about" },
  { label: "Campus", href: "#campus" },
  { label: "Testimonials", href: "#testimonials" },
];

const DesktopNav = ({ links, onLinkClick }) => {
  return (
    <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-semibold leading-6 p-2 text-white hover:text-indigo-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick(link.href);
          }}
        >
          {link.label}
        </a>
      ))}
      <a
        href="#contact"
        className="text-sm font-semibold leading-6 text-black bg-gray-50 hover:bg-gray-100 px-5 py-2 rounded-full transition-colors"
        onClick={(e) => {
          e.preventDefault();
          onLinkClick("#contact");
        }}
      >
        Contact Us
      </a>
    </div>
  );
};

const MobileNav = ({ isOpen, links, onLinkClick }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onLinkClick}
      />
      <div
        className={`fixed top-0 right-0 h-full w-55 bg-[#212ea0] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 space-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded-full bg-indigo-50 hover:bg-indigo-200 px-4 py-3 text-base font-semibold text-black transition-colors mt-4 w-fit"
            onClick={(e) => {
              e.preventDefault();
              onLinkClick("#contact");
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lg:hidden rounded-md p-2 text-white hover:bg-white/10 relative z-50"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <div className="flex h-6 w-6 items-center justify-center text-4xl font-light">
          ×
        </div>
      ) : (
        <div className="flex h-6 w-6 flex-col justify-center gap-1.5">
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </div>
      )}
    </button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 64; // h-16 = 64px
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-20 h-16 flex items-center transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-[#212ea0] shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl w-full items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}>
            <img src={logo} alt="Edusity" className="h-9" />
          </a>
        </div>

        <DesktopNav links={navLinks} onLinkClick={handleLinkClick} />
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </nav>

      <MobileNav 
        isOpen={isMenuOpen} 
        links={navLinks} 
        onLinkClick={handleLinkClick} 
      />
    </header>
  );
};

export default Header;