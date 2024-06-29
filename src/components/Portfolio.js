import React from 'react';
import Project from './Project';
import BizuImage from '../images/projects/bizu.png'
import PrimeHouseCleaning from '../images/projects/primehousecleaning.png'

const Portfolio = () => {

    const projects = [
        {
            image: BizuImage,
            title: 'Bizu Agency',
            description: 'Bizu Agency\'s website is a responsive, React.js-based platform featuring modern design with smooth animations, high-quality visuals, and efficient code. It demonstrates excellent front-end development practices, ensuring a seamless user experience across devices.',
            techStacks: ['ReactJS', 'HTML', 'CSS', 'GitHub Pages'],
            url: 'https://bizuagency.com/'
        },
        {
            image: PrimeHouseCleaning,
            title: 'Prime House Cleaning',
            description: 'Prime House Cleaning\'s website is a responsive, React.js-based platform featuring clean design and efficient navigation. It utilizes CSS for styling and ensures a user-friendly experience across devices, showcasing services and contact information prominently.',
            techStacks: ['ReactJS', 'HTML', 'CSS', 'GitHub Pages'],
            url: 'https://cleaningservicesprime.com/'
        },
      ];

    return (
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Projects I've worked on</h2>
            {projects.map((project, index) => (
              <Project
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                techStacks={project.techStacks}
                imageOnRight={index%2==0}
                url={project.url}
              />
            ))}
          </div>
        </section>
      );
};

export default Portfolio;