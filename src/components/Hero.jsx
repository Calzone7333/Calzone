import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { label: ['Business', 'Registrations'], value: '200K+' },
    { label: ['IT filings', 'per annum'], value: '1K' },
    { label: ['Happy', 'Customers'], value: '5K' }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-32 bg-white">
      {/* Decorative Background Element */}
      <div className="absolute top-20 right-0 -z-10 w-1/3 h-2/3 bg-brand-orange/5 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid md:grid-cols-[40%_60%] gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl md:pl-12"
        >

          <h1 className="text-[#222222] font-poppins font-bold text-[35px] leading-[50px] mb-6">
            Business Registration & <br />
            Tax Filing Services in Chennai
          </h1>

          <p className="text-[#585858] font-poppins font-normal text-[16px] leading-[20px] mb-10">
            Starting a business is <br />
            an exciting journey.
          </p>

          <div className="mb-16">
            <button 
              onClick={() => document.getElementById('popular_services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#DB3269] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#be185d] transition-all transform hover:scale-105 active:scale-95"
            >
              Choose your service
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-[#222222] font-poppins font-bold text-[30px] leading-[45px] mb-1">
                  {stat.value}
                </h2>
                <div className="text-[#585858] font-poppins font-normal text-[14px] leading-tight">
                  {stat.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-[-30px] md:mt-[-80px] md:left-[-12%]"
        >
          <div className="relative z-10">
            <img
              src="/Herobanner.png"
              alt="Business Growth"
              className="w-[90vw] md:w-[65vw] lg:w-[60vw] xl:w-[55vw] h-auto object-contain max-w-none"
            />
          </div>

          {/* Decorative Sharp Box */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange/5 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
