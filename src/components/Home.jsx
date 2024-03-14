import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link, Element } from 'react-scroll';

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <Element name='home'>
      <div className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-yellow-200'>Hi, My name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Kenneth Eli
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-3 max-w-[700px]'>
          I have a strong enthusiasm for creating high-quality software that
                enhances the well-being of people in my community. My expertise lies 
                in web development, catering to a diverse client.
          </p>
          <div>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0077b6] hover:border-[#0077b6]'>
                View Work
                <span className='group-hover:rotate-90 duration-300'> 
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
