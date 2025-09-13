import React from "react";
import { education } from "../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline - left-right alternating cards */}
      <div className="relative flex flex-col items-start">
        {/* Vertical timeline line: right on mobile, center on sm+ */}
        <div className="absolute right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 bg-[#8245ec] h-full z-0"></div>
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`w-full flex flex-col sm:flex-row items-start mb-20 relative z-10 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Card and timeline arrangement */}
            <div className={`w-full sm:w-1/2 pr-8 sm:pr-0 sm:pl-0 ${index % 2 === 0 ? "sm:pr-8 sm:order-1" : "sm:pl-8 sm:order-2"} mr-16 sm:mr-0`}>
              <div className="bg-gray-900 border border-white rounded-2xl shadow-lg p-4 xs:p-6 sm:p-8 transition-transform duration-300 hover:scale-105">
                <div className="flex flex-col xs:flex-row items-center xs:items-start gap-4 xs:gap-6">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 bg-white rounded-full overflow-hidden flex-shrink-0 border-4 border-[#8245ec] mx-auto xs:mx-0">
                    <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center xs:text-left">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-md xs:text-lg text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold text-center xs:text-left">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400 text-center xs:text-left">{edu.desc}</p>
              </div>
            </div>
            {/* Timeline circle - only on sm+ screens */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 rounded-full justify-center items-center z-20">
              <img src={edu.img} alt={edu.school} className="w-10 h-10 object-cover rounded-full" />
            </div>
            {/* Timeline circle - on mobile, vertically centered on the vertical line */}
            <div className="sm:hidden flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
              <div className="bg-white border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-20">
                <img src={edu.img} alt={edu.school} className="w-10 h-10 object-cover rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Education;