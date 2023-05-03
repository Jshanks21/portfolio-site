import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ListItemIcon = ({ reference }: { reference: React.MutableRefObject<null> }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center']
  });

  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
      <svg className='-rotate-90 sm:w-[63px] sm:h-[63px] md:w-[75px] md:h-[75px] ' width={43} height={43} viewBox="0 0 100 100">
        <circle cx={75} cy={50} r={20} className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
        <motion.circle cx={75} cy={50} r={20} className='stroke-[5px] fill-light dark:fill-dark'
          style={{
            pathLength: scrollYProgress,
          }} />
        <circle cx={75} cy={50} r={10} className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark' />
      </svg>
    </figure>
  );
};

export default ListItemIcon;