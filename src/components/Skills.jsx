import React from 'react';
import ProgressBar from "../chip/ProgressBar";
import SkillBox from "../chip/SkillBox";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {SiJavascript,SiTailwindcss,SiMongodb,SiExpress,SiHtml5} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-200 '>Skills</p>
              <p className='py-4'> These are the technologies I've worked with</p>
          </div>
          <div className="flex md:flex ">
          <div className="left flex-1 w-full">
            <p data-aos="fade-up" className=" text-gray-300 font-medium w-[100%]">
              Here are my skills.
            </p>
            {/* left box */}
            <div data-aos="zoom-in" className="progress flex items-center h-[100%] justify-end md:justify-center">
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar logo={<SiJavascript />} name={"Javascript"} value={80} />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                <ProgressBar logo={<SiTailwindcss />} name={"Tailwind CSS"} value={80} />
              </div>
            </div>
          </div>
            {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                logo={<SiHtml5/>}
                black={"black"}
                white={"white"}
                skill={"C++"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;