import React from "react";
import photo from '../assets/photo.png'
import { Link } from "react-router-dom";

function Portfolio() {
  
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-sans">
      {/* 🔹 NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 bg-[#0d1224]/60 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg">
        <h1 className="text-2xl font-bold text-green-400">Meghna's Portfolio</h1>
        <ul className="hidden md:flex gap-10 text-gray-300">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
         <li className="hover:text-blue-400 cursor-pointer">
      <Link to="/about">About</Link>
    </li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/project">Project</Link> </li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/skill">skill</Link></li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="md:hidden text-3xl cursor-pointer">☰</div>
      </nav>

      {/* 🔹 HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between pt-32 px-8 md:px-20">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-3 text-center md:text-left">
          <h3 className="text-2xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Meghna </span>
          </h3>
          <h2 className="text-2xl text-blue-400 font-semibold">
            MERN Stack Developer
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            I design and develop modern web experiences with passion and
            precision. Let’s create something unique together.
          </p>

          <div className="flex justify-center md:justify-start gap-5 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
              Hire Me
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition">
              Let's Talk
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-4 text-blue-400 pt-6 text-xl">
            <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-300"></i>
            <i className="fa-brands fa-github cursor-pointer hover:text-blue-300"></i>
            <i className="fa-brands fa-twitter cursor-pointer hover:text-blue-300"></i>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="rounded-2xl overflow-hidden ">
            <img
              src={photo}
              alt="Meghna"
              className="w-[300px]   h-[300px] opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/40 blur-[120px] rounded-full"></div>
    
     {/* ====== Footer ====== */}
<footer className="w-full bg-black/80 text-gray-300 py-10 px-6 md:px-20 mt-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left Section */}
    <div>
      <h2 className="text-blue-400 font-bold text-xl mb-3">Meghna’s Portfolio</h2>
      <p className="text-sm text-gray-400">
        Turning ideas into interactive and beautiful web experiences using the MERN stack.
      </p>
    </div>

    

    {/* Right Section - Contact Info */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
      <ul className="flex flex-col gap-2 text-sm">
        <li>📧 meghnasuthar@example.com</li>
        <li>📞 +91 98765 43210</li>
        <li>📍 India</li>
      </ul>
      {/* Social Icons */}
      <div className="flex gap-4 mt-4 text-xl">
        <a href="#" className="hover:text-blue-400">🌐</a>
        <a href="#" className="hover:text-blue-400">💼</a>
        <a href="#" className="hover:text-blue-400">📷</a>
        <a href="#" className="hover:text-blue-400">🐦</a>
      </div>
    </div>
  </div>
  

  {/* Bottom Line */}
  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Meghna Suthar. All rights reserved.
  </div>
</footer>

     

    </div>

   
  );
}

export default Portfolio;
