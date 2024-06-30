import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ image, title, description, techStacks, imageOnRight, url, gitHubUrl }) => {
  return (
    <div className={`flex flex-col md:flex-row ${imageOnRight ? 'md:flex-row-reverse' : ''} items-center m-5`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full md:w-1/2 h-60 md:h-72 rounded-lg shadow-lg object-cover transform transition-transform duration-300 hover:scale-102 hover:shadow-xl" 
      />
      <div className="md:w-1/2 p-4">
        <div className='flex flex-row items-center'>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-green-900'>
                <FaExternalLinkAlt />
            </a>
            {
                gitHubUrl && 
                <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-green-900'>
                    <FaGithub />
                </a>
            }
        </div>
        
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap">
          {techStacks.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Project;
