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
      className='flex items-center justify-center rounded-full font-bold sm:font-semibold bg-transparent sm:bg-dark sm:text-light shadow-dark cursor-pointer absolute sm:dark:text-dark sm:dark:bg-light py-1.5 px-3 lg:py-2 lg:px-4 xl:py-3 xl:px-6 text-sm md:text-base lg:text-lg'
      whileHover={{ 
        scale: 1.05,
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold w-full text-center text-6xl mt-32 mb-8 sm:mb-0 lg:text-8xl lg:mt-64'>Skills</h2>

      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm md:bg-circularLightMd md:dark:bg-circularDarkMd lg:bg-circularLightLg lg:dark:bg-circularDarkLg xl:bg-circularLightFull xl:dark:bg-circularDarkFull ">

        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-transparent sm:bg-dark sm:text-light shadow-dark cursor-pointer sm:dark:text-dark sm:dark:bg-light p-2 lg:p-4 xl:p-6 text-sm md:text-base lg:text-lg '
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name='CSS' x='-15vw' y='6vw' />
        <Skill name='TailwindCSS' x='0vw' y='15vw' />
        <Skill name='Javascript' x='6vw' y='-11vw' />
        <Skill name='ReactJS' x='-15vw' y='-12vw' />
        <Skill name='NextJS' x='-28vw' y='-23vw' />
        <Skill name='HTML' x='18vw' y='0vw' />
        <Skill name='Solidity' x='31vw' y='-5vw' />
        <Skill name='Typescript' x='0vw' y='-24vw' />
        <Skill name='Web3 Development' x='28vw' y='-20vw' />
        <Skill name='Web Design' x='-32vw' y='0vw' />
        <Skill name='SQL' x='25vw' y='15vw' />
        <Skill name='Photoshop' x='-25vw' y='22vw' />
        <Skill name='Data Analytics' x='16vw' y='26vw' />
      </div>
    </>
  );
};

export default Skills;