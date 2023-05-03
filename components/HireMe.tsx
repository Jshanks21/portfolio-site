import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='absolute lg:fixed flex items-center justify-center overflow-hidden max-[480px]:-right-4 right-0 left-auto -top-4 bottom-auto lg:left-4 lg:bottom-4 lg:right-auto lg:top-auto'>
      <div className='w-36 md:w-48 lg:w-64 h-auto flex items-center justify-center relative'>
        <CircularText className='fill-dark animate-spin-slow dark:fill-light' />
        <Link 
          href='mailto:alphasearchseo@gmail.com' 
          target='_blank'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-center text-[10px] w-12 h-12 md:w-20 md:h-20 md:text-base'
        >          
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;