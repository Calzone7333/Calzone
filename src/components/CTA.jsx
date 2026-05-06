import React from 'react';

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-[-60px] relative z-10">
      <div className="bg-brand-orange rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-brand-orange/30">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
          Ready to get started?
        </h2>
        <button className="bg-white text-brand-orange px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all transform hover:scale-105 active:scale-95">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CTA;
