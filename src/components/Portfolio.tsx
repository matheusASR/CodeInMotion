import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Bot } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      description: 'Modern e-commerce platform with inventory management and responsive design.',
      type: 'website',
      category: 'Website',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: 'https://joyful-figolla-af15ab.netlify.app/'
    },
    {
      id: 2,
      title: 'Customer Support Automation',
      description: 'Intelligent chatbot system that handles customer inquiries and automates support workflows.',
      type: 'automation',
      category: 'Automation System',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'AI/ML', 'API Integration'],
      link: 'https://www.youtube.com/'
    },
    {
      id: 3,
      title: 'Restaurant Landing Page',
      description: 'Elegant landing page with online reservation system and menu showcase for a local restaurant.',
      type: 'website',
      category: 'Website',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'Node.js'],
      link: 'https://subtle-starship-720fc3.netlify.app/'
    },
    {
      id: 4,
      title: 'Sales Report Generator',
      description: 'Automated system that generates and sends weekly sales reports with data visualization.',
      type: 'automation',
      category: 'Automation System',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Data Analytics', 'Email Automation'],
      link: 'https://www.youtube.com/'
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out some of my recent projects showcasing modern web development and automation solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-gray-100 p-2 rounded-xl">
            {[
              { key: 'all', label: 'All Projects', icon: Globe },
              { key: 'website', label: 'Websites', icon: Globe },
              { key: 'automation', label: 'Automation', icon: Bot },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink size={18} />
                      </button>
                    </a>
                    {/* <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors duration-300">
                      <Github size={18} />
                    </button> */}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;