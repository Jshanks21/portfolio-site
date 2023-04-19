import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, LinkedInIcon, GithubIcon, MediumIcon } from './Icons';
import { motion } from 'framer-motion';

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/blog' title='Blog' className='ml-4' />
      </nav>

      <nav className='flex'>
        <motion.a 
          href='https://twitter.com/LuisEgeaWin' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='mr-4'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a 
          href='https://github.com/Jshanks21' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='mx-4'
        >
          <GithubIcon />
        </motion.a>
        <motion.a 
          href='https://www.linkedin.com/in/luis-egea/' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='mx-4'
        >
          <LinkedInIcon />
        </motion.a>        
        <motion.a 
          href='https://medium.com/@jshanks21' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='ml-4'
        >
          <MediumIcon />
        </motion.a>        
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%] '>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;