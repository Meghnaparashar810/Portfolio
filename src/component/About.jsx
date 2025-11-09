import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0a0f1c] px-6 md:px-20 pt-28 pb-20"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-8 text-center"
      >
        About Me
      </motion.h2>

      {/* Paragraph Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center leading-relaxed text-gray-300 text-[17px]"
      >
        <p className="mb-6">
          Hey there 👋, I’m <span className="text-blue-400 font-semibold">Meghna Suthar</span>, 
          a <span className="text-green-400 font-semibold">MERN Stack Developer</span> based in 
          <span className="text-blue-300"> Sirohi, Rajasthan, India</span>.
        </p>

        <p className="mb-6">
          I’m passionate about turning creative ideas into powerful web experiences. 
          My goal is to design and develop applications that are not only functional 
          but also beautiful, responsive, and intuitive for users.
        </p>

        <p>
          I love exploring new technologies and continuously improving my skills — 
          whether it’s creating seamless front-end interfaces or building scalable 
          back-end systems. Every project I build reflects my commitment to quality 
          and attention to detail.
        </p>
      </motion.div>

     
    </section>
  );
}

export default About;
