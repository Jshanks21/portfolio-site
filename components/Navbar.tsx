import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, LinkedInIcon, GithubIcon, MediumIcon, SunIcon, MoonIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

type CustomLinkProps = {
  href: string;
  title: string;
  isOpen?: boolean;
  className?: string;
  toggle?: () => void;
};

const CustomLink = ({ href, title, isOpen, className = "", toggle = () => { } }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`} onClick={toggle}>
      {title}
      <span
        className={`h-[1px] inline-block ${isOpen ? 'bg-light dark:bg-dark' : 'bg-dark dark:bg-light'} absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [theme, setTheme] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full mb-2 px-8 lg:px-12 xl:px-16 2xl:px-32 py-8 font-medium flex items-center justify-between dark:text-light'>

      {/* Responsive Hamburger Menu */}
      <button onClick={handleClick} className='lg:hidden flex flex-col justify-center items-center'>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-r-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-r-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-r-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Responsive Layout - Mobile */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className='lg:hidden min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex flex-col justify-center items-center'>
            <CustomLink href='/' title='Home' className='text-light dark:text-dark my-2' toggle={handleClick} isOpen />
            <CustomLink href='/about' title='About' className='text-light dark:text-dark my-2' toggle={handleClick} isOpen />
            <CustomLink href='/projects' title='Projects' className='text-light dark:text-dark my-2' toggle={handleClick} isOpen />
            <CustomLink href='/blog' title='Blog' className='text-light dark:text-dark my-2' toggle={handleClick} isOpen />
          </nav>

          <nav className='flex items-center mt-2'>
            <motion.a
              href='https://twitter.com/LuisEgeaWin'
              target='_blank'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-4'
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href='https://github.com/Jshanks21'
              target='_blank'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-4 rounded-full bg-light dark:bg-dark'
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
              className='w-7 mx-4 rounded-full bg-light dark:bg-dark dark:fill-light'
            >
              <MediumIcon />
            </motion.a>
            <button
              className={`mx-4 flex items-center justify-center rounded-full p-1 ${theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'dark' ? (
                <SunIcon className='fill-dark' />
              ) : (
                <MoonIcon className='fill-dark' />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      {/* Non-Resposive Layout - Desktop, Laptop, etc */}
      <div className='hidden lg:w-full lg:flex lg:justify-between lg:items-center'>
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
      </div>

      {/* Center Logo - Non & Responsive Views */}
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;