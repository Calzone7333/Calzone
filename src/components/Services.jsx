import React from 'react';
import { motion } from 'framer-motion';
import { Search, Megaphone, Share2, Grid } from 'lucide-react';

const services = [
  {
    title: 'Seo/Sem',
    description: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    icon: <Search className="text-white" size={24} />,
    color: 'bg-accent-yellow',
    delay: 0.1
  },
  {
    title: 'Marketing',
    description: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    icon: <Megaphone className="text-white" size={24} />,
    color: 'bg-accent-green',
    delay: 0.2
  },
  {
    title: 'Viral Campaign',
    description: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    icon: <Share2 className="text-white" size={24} />,
    color: 'bg-accent-blue',
    delay: 0.3
  },
  {
    title: 'Others',
    description: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    icon: <Grid className="text-white" size={24} />,
    color: 'bg-accent-red',
    delay: 0.4
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            We Provide The Best Services
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Let us unleash the full potential of your business with our data-driven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="text-brand-orange font-bold text-sm hover:underline">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
