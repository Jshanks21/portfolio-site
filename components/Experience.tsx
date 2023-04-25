import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import ListItemIcon from './ListItemIcon';

type DetailsProps = {
  position: string;
  company: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string;
};

const Details = ({ position, company, companyLink, time, address, work }: DetailsProps) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      
      <ListItemIcon reference={ref} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 100}}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position} <a href={companyLink} target='_blank' className={`${companyLink ? 'text-primary hover:text-primary/75 dark:text-primaryDark dark:hover:text-primaryDark/75' : ''}`}>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>
      </motion.div>
    </li>
  )
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });


  return (
    <div className='my-64'>
      <h2 className='w-full text-center font-bold text-8xl mb-32'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div 
          style={{scaleY: scrollYProgress}} 
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' 
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position='Software Engineer'
            company='Freelance'
            time='2023-Present'
            address='Remote'
            work='Worked on a team responsible for developing new features for MintGate, a NFT marketplace. Developed a new feature that allows users to create their own NFTs using a custom template.'
          />
          <Details
            position='Founder | Blockchain Developer'
            company='MintGate'
            companyLink='https://mintgate.app/'
            time='2020-2023'
            address='Remote'
            work='Worked on a team responsible for developing new features for MintGate, a NFT marketplace. Developed a new feature that allows users to create their own NFTs using a custom template.'
          />
          <Details
            position='Digital Marketing Specialist'
            company='Freelance'
            time='2018-2020'
            address='Las Vegas, NV'
            work='Worked on a team responsible for developing new features for MintGate, a NFT marketplace. Developed a new feature that allows users to create their own NFTs using a custom template.'
          />
          <Details
            position='Teacher'
            company='VIPKid'
            companyLink='https://www.vipkid.com/'
            time='2018-2020'
            address='Remote'
            work='Worked on a team responsible for developing new features for MintGate, a NFT marketplace. Developed a new feature that allows users to create their own NFTs using a custom template.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;