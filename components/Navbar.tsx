import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, LinkedInIcon, GithubIcon, MediumIcon, SunIcon, MoonIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

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
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [theme, setTheme] = useThemeSwitcher();
  
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/blog' title='Blog' className='ml-4' />
      </nav>

      <nav className='flex items-center'>
        <motion.a 
          href='https://twitter.com/LuisEgeaWin' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-4'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a 
          href='https://github.com/Jshanks21' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-4'
        >
          <GithubIcon />
        </motion.a>
        <motion.a 
          href='https://www.linkedin.com/in/luis-egea/' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-4'
        >
          <LinkedInIcon />
        </motion.a>        
        <motion.a 
          href='https://medium.com/@jshanks21' 
          target='_blank'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-7 mx-4'
        >
          <MediumIcon className='dark:fill-light' />
        </motion.a>

        <button 
         className={`ml-4 flex items-center justify-center rounded-full p-1 ${theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'dark' ? (
            <SunIcon className='fill-dark' />
          ) : (
            <MoonIcon className='fill-dark' />
          )}
        </button>

      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%] '>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;