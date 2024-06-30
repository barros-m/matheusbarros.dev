import React from 'react';

const NavBar = () => {

    const options = [
        {
            label: 'About',
            href: '#about',
        },
        {
            label: 'Skills',
            href: '#tech-stacks',
        },
        {
            label: 'Projects',
            href: '#projects',
        },
        {
            label: 'Let\'s Connect',
            href: '#connect',
        }
    ];

  return (
    <nav className="bg-white shadow-md pt-3">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center max-w-screen-lg">
        <div className="text-2xl font-bold">Matheus Barros</div>
        <div className="flex space-x-4">
            {
                options.map((option) => {
                    return(
                        <a href={option.href} className="px-4 pb-1 relative group">
                            {option.label}
                            <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-green-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </a>
                    )
                })
            }
          
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
