import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 

  return (   
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">
          Gautam Mishra
        </h2>
        {/* navigation links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: 'About',id: 'about' },
            { name: 'Skills',id: 'skills' },
            { name: 'Education',id: 'education' },
          ].map((item, index) => (
             <button 
             key={index}
             onClick={() =>handleScroll(item.id)}
              className=" hover:text-purple-500 text-sm sm:text-base my-1 hover:cursor-pointer"
             >
              {item.name}
             </button>
          ))}  
        </nav>
        {/* social media icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: 'https://www.facebook.com/gautam.gambhir.14019338' },
            { icon: <FaTwitter />, link: 'https://x.com/mishragautam783?t=7db5YCTaQWGVK1gDQ-dzXw&s=09' },
            { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/gautam-mishra-1051b7360/' },
            { icon: <FaInstagram />, link: 'https://www.instagram.com/mishragautam783?igsh=MTF0Y2xnN3NwMmE2Yw==' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
              >
                {item.icon}
              </a>
          ))}
        </div>
         {/* copyright text */}
           <p className="text-sm text-gray-400 mt-6">
          © 2025 Gautam Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
