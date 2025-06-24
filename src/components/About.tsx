import React from 'react';
import { User, Code2, Database, Smartphone } from 'lucide-react';
import logo from '../assets/codeinmotiontr.png'; 

const About = () => {
  const skills = [
    { icon: Code2, name: 'Frontend Development', description: 'React, JavaScript, Tailwind CSS' },
    { icon: Database, name: 'Backend Systems', description: 'Node.js, APIs, Database Design' },
    { icon: Smartphone, name: 'Responsive Design', description: 'Mobile-first, Cross-platform' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* <User size={64} className="text-white" /> */}
                <img src={logo} alt="Logo" className="w-32 h-auto" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">CodeInMotion</h3>
              {/* <p className="text-blue-100 text-center">Full-Stack Developer & Automation Specialist</p> */}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hi, I'm a software developer specialized in building fast, modern websites and automating digital processes. I work with React, Tailwind, JavaScript, Node.js, APIs, databases, and task automation to create tailored solutions for clients.
            </p>

            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <skill.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{skill.name}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;