import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Matheus Barros</h1>
      <p className="text-xl mb-8">A Full Stack Developer & Data Analyst</p>
      <a href="#connect" className="px-4 py-2 bg-blue-500 text-white rounded">Let's Connect</a>
    </section>
  );
};

export default Hero;
