/* eslint-disable no-unused-vars */
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {
                skills.map((items,index)=>(
                  <motion.div
                  key={index}
                      variants={fadeIn('up',`0.${index}`)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once:false, amount:0}}
                  >
                    <SingleSkill  text={items.skill} imgSvg={<items.icon />} />
                  </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default AllSkills