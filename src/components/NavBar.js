import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Matheus Barros</div>
        <div>
          <a href="#hero" className="px-4">Home</a>
          <a href="#about" className="px-4">About</a>
          <a href="#tech-stacks" className="px-4">Skills</a>
          <a href="#projects" className="px-4">Projects</a>
          <a href="#connect" className="px-4">Let's Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
