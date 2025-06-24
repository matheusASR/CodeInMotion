// import React from 'react';
// import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  // const socialLinks = [
  //   { icon: Github, href: '#', label: 'GitHub' },
  //   { icon: Linkedin, href: '#', label: 'LinkedIn' },
  //   { icon: Twitter, href: '#', label: 'Twitter' },
  //   { icon: Mail, href: 'mailto:contact@codeinmotion.com', label: 'Email' },
  // ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CodeInMotion</h3>
            <p className="text-gray-400 mb-6">
              Full-stack developer specializing in modern web development and automation solutions.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>E-commerce Solutions</li>
              <li>System Automation</li>
              <li>API Integration</li>
              <li>Custom Dashboards</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CodeInMotion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;