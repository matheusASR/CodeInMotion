import React from 'react';
import { Globe, Bot, Smartphone, Database, Code, Zap, BarChart, Settings } from 'lucide-react';

const Services = () => {
  const webServices = [
    {
      icon: Globe,
      title: 'Institutional Websites',
      description: 'Professional websites that showcase your brand and engage your audience.',
    },
    {
      icon: Smartphone,
      title: 'E-commerce Platforms',
      description: 'Complete online stores with payment integration and inventory management.',
    },
    {
      icon: Code,
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for your marketing campaigns.',
    },
    {
      icon: Database,
      title: 'Responsive Interfaces',
      description: 'Mobile-first designs that work perfectly on all devices and screen sizes.',
    },
  ];

  const automationServices = [
    {
      icon: Bot,
      title: 'Custom Bots & Scripts',
      description: 'Intelligent automation solutions tailored to your specific business needs.',
    },
    {
      icon: Zap,
      title: 'API Integrations',
      description: 'Seamless connections between different systems and third-party services.',
    },
    {
      icon: BarChart,
      title: 'Internal Dashboards',
      description: 'Custom dashboards for monitoring KPIs and business metrics in real-time.',
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Automated reports and recurring task management to save time and resources.',
    },
  ];

  const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <div 
      className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
        <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive digital solutions to help your business grow and operate more efficiently.
          </p>
        </div>

        {/* Web Development Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Globe className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 ml-4">Web Development</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Automation Services */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Bot className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 ml-4">System Automation</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can create the perfect digital solution for your needs.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;