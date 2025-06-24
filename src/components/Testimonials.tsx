import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'CEO, TechStart Solutions',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'CodeInMotion built us an amazing automation system that saved hours of manual work every week. The solution was exactly what we needed and delivered on time. Highly professional and skilled developer!',
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Founder, Digital Marketing Agency',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Our new website exceeded all expectations! The design is modern, fast, and perfectly captures our brand. CodeInMotion attention to detail and technical expertise made the entire process smooth and enjoyable.',
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
                <Quote size={40} />
              </div>
              
              <StarRating rating={testimonial.rating} />
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent group-hover:from-blue-600/30 transition-all duration-300"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;