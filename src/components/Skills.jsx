import React from 'react';
import ProgressBar from "../chip/ProgressBar";
import SkillBox from "../chip/SkillBox";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-400'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-200 '>Skills</p>
          <p className='py-3'> \\These are the technologies I've worked with </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="left flex-1 w-full text-center md:text-left"> {/* Centering text in the middle */}
            <p data-aos="fade-up" className="text-gray-300 font-medium w-[100%]">
            </p>
            {/* left box */}
            <div data-aos="zoom-in" className="progress flex flex-col items-center md:items-start h-[100%] justify-center">
              <div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={80} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={75} />
                <ProgressBar logo={<SiJavascript />} name={"Javascript"} value={65} />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={65} />
                <ProgressBar logo={<SiTailwindcss />} name={"Tailwind CSS"} value={75} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-row gap-10 shadow-[#90e0ef] hover:scale-110 duration-500">
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
            <div className="last2 flex flex-row gap-10 shadow-[#90e0ef] hover:scale-110 duration-500">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                logo={<SiFirebase />}
                black={"black"}
                white={"white"}
                skill={"Firebase"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
