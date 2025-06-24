import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_gjac1dk',     // substitua
    'template_slupzm9',    // substitua
    formData,
    'e-gKJ4oDCFxOQZLZL'      // substitua
  ).then(
    (result) => {
      console.log('Email sent:', result.text);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    },
    (error) => {
      console.error('Email error:', error.text);
    }
  );
};

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full mx-auto col-span-2 flex justify-center">
          <div className="w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">Your message has been sent successfully. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
