import React from "react";

const skill = [
  { name: "HTML", level: 95, desc: "Markup Language" },
  { name: "CSS", level: 95, desc: "Styling Web" },
  { name: "JavaScript", level: 85, desc: "Interactive UI" },
  { name: "React", level: 75, desc: "Frontend Library" },
  { name: "Node.js", level: 70, desc: "Backend JS" },
  { name: "MongoDB", level: 85, desc: "NoSQL DB" },
];

export default function Skill() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">My Skills</h1>
      <div className="w-full max-w-md space-y-3">
        {skill.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="text-xs text-gray-500 mb-1">{skill.desc}</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
