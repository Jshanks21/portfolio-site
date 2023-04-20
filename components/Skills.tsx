import React from 'react';
import { motion } from 'framer-motion';

type SkillProps = {
  name: string;
  x?: string;
  y?: string;
};

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ 
        scale: 1.15,
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  )
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">

        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 1.5 }}
        >
          Web
        </motion.div>

        <Skill name='CSS' x='-15vw' y='6vw' />
        <Skill name='TailwindCSS' x='0vw' y='15vw' />
        <Skill name='Javascript' x='6vw' y='-11vw' />
        <Skill name='ReactJS' x='-15vw' y='-12vw' />
        <Skill name='NextJS' x='-25vw' y='-20vw' />
        <Skill name='HTML' x='18vw' y='0vw' />
        <Skill name='Solidity' x='31vw' y='-5vw' />
        <Skill name='Typescript' x='0vw' y='-20vw' />
        <Skill name='Web3 Development' x='25vw' y='-18vw' />
        <Skill name='Web Design' x='-28vw' y='-5vw' />
        <Skill name='SQL' x='25vw' y='15vw' />
        <Skill name='Photoshop' x='-25vw' y='15vw' />
        <Skill name='Data Analytics' x='16vw' y='22vw' />
      </div>
    </>
  );
};

export default Skills;