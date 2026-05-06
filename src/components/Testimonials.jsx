import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Gupta',
    role: 'Executive CEO',
    image: 'https://i.pravatar.cc/150?u=anjali',
    text: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    rating: 5
  },
  {
    name: 'Worthey Juan',
    role: 'Executive CEO',
    image: 'https://i.pravatar.cc/150?u=juan',
    text: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    rating: 5
  },
  {
    name: 'Juan Abid',
    role: 'Executive CEO',
    image: 'https://i.pravatar.cc/150?u=abid',
    text: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-brand-peach/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">What Clients Say!</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            See how our digital marketing agency helped clients achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-orange"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
