import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Connect = () => {
  return (
    <section id="connect" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="mb-8">Please reach out through social media or send me a direct message.</p>
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <div className="text-6xl font-bold mr-4">MB</div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">Matheus Barros</h3>
              <p className="text-gray-600">matheusbarros1305@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/mattheusbarroos/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100">
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/barros-m" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100">
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a href="mailto:matheusbarros1305@gmail.com" className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100">
            <FaEnvelope className="text-xl" />
            <span>Mail</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
