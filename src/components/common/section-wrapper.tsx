import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({
  children,
  className = "",
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`pt-6 pb-10 md:pt-8 md:pb-14 lg:pt-10 lg:pb-18 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;