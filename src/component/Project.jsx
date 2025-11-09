import React from "react";
import { motion } from "framer-motion";
import watch from "../assets/watch.jpg";
import Portfolio from "../assets/Portfolio.png"
import todo from "../assets/todo.jpg"

function Project() {
  const projects = [
    {
      id: 1,
      title: "WatchDigit App",
      desc: "An interactive digital watch displaying current time, with dynamic updates every second. Built using React for smooth UI.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      img: watch,
      link: "https://your-watchdigit-demo-link.com",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      desc: "A fully responsive portfolio built with React + TailwindCSS showcasing my work and skills.",
      tech: ["React", "Tailwind", "Framer Motion"],
      img: Portfolio,
      link: "https://your-portfolio-link.com",
    },
    {
      id: 3,
      title: "Taskify - Todo Manager",
      desc: "A task management tool to add, edit and delete daily goals with MongoDB backend.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      img: todo,
      link: "https://your-taskify-demo-link.com",
    },
     

  ];

  return (
    <section className="min-h-screen bg-[#0a0f1c] text-white px-8 md:px-20 pt-24 pb-16">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Projects 🚀
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#10172b] rounded-2xl overflow-hidden shadow-[0_0_25px_#0e3fa9] hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#1b2440] text-blue-300 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* <a
                href={project.link}
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                View Project
              </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
