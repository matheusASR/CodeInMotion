import React from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I build stunning{' '}
              <span className="text-blue-300">websites</span> and{' '}
              <span className="text-blue-200">automate systems</span> to boost your business.
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Let's turn your ideas into digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Request a Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <Code className="text-blue-300 mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-blue-100">Modern, responsive websites</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 mt-8">
                  <Zap className="text-blue-300 mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Automation</h3>
                  <p className="text-blue-100">Smart system solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;