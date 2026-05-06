import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      title: 'Phone Number',
      value: '+91-9655771091',
      link: 'tel:+91-9655771091',
      icon: Phone,
    },
    {
      title: 'Email Address',
      value: 'deepak@hado.co.in',
      link: 'mailto:deepak@hado.co.in',
      icon: Mail,
    },
    {
      title: 'Visit Us',
      value: '32, 1St Main Road, Ayyappa Nagar, Virugambakkam, Chennai-600092.',
      link: null,
      icon: MapPin,
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      {/* Map Section */}
      <section className="w-full h-[450px] bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.62468440126!2d80.18298508264778!3d13.057544099276877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b5e03b4b67%3A0x188e431989ab2c61!2sChennai%2C%20Tamil%20Nadu%20600092!5e0!3m2!1sen!2sin!4v1743074739505!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clazone Location"
        ></iframe>
      </section>

      {/* Contact Cards Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-10 pt-16 border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow"
            >
              {/* Icon Box - Centered and overlapping the top border slightly */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#DB3269] flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <info.icon size={28} />
              </div>

              <h3 className="font-sans font-bold text-[18px] text-[#222222] mb-4 uppercase tracking-wider">
                {info.title}
              </h3>
              
              {info.link ? (
                <a 
                  href={info.link}
                  className="font-sans font-normal text-[16px] text-gray-600 hover:text-[#DB3269] transition-colors leading-relaxed"
                >
                  {info.value}
                </a>
              ) : (
                <p className="font-sans font-normal text-[16px] text-gray-600 leading-relaxed max-w-[250px]">
                  {info.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optional Page Header Style Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 tracking-tight">
          <a href="/" className="hover:text-[#DB3269]">Home</a>
          <ChevronRight size={10} />
          <span className="text-[#DB3269]">Contact Us</span>
        </nav>
      </div>
    </div>
  );
};

export default Contact;
