import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import ListItemIcon from './ListItemIcon';

type DetailsProps = {
  type: string;
  time: string;
  place: string;
  info: string;
};

const Details = ({ type, time, place, info }: DetailsProps) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[80%] lg:w-[60%] mx-auto flex flex-col items-start justify-between'>

      <ListItemIcon reference={ref} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
      >
        <h3 className='capitalize font-bold text-lg sm:text-xl md:text-2xl'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-sm md:text-base'>
          {time} | {place}
        </span>
        <p className='font-medium w-full text-sm md:text-base'>
          {info}
        </p>
      </motion.div>
    </li>
  )
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });


  return (
    <>
      <h2 className='w-full text-center font-bold text-5xl md:text-6xl lg:text-8xl mb-16 lg:mb-32 mt-32 lg:mt-64'>
        Education
      </h2>

      <div ref={ref} className='mx-auto relative w-full lg:w-[90%] xl:w-[75%]'>

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-[20px] sm:left-[30px] md:left-9 top-0 w-[2px] md:w-[4px] h-full bg-dark origin-top dark:bg-light'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-2 sm:ml-4'>
          <Details
            type='Bachelor of English in Creative Writing'
            time='2010-2016'
            place='University of Kansas'
            info='Graduated with a 3.8 GPA.'
          />
          <Details
            type='High School Diploma'
            time='2005-2009'
            place='Saint Thomas Aquinas High School'
            info='Graduated with a 3.9 GPA and a 4.0 GPA.'
          />
        </ul>
      </div>
    </>
  );
};

export default Education;