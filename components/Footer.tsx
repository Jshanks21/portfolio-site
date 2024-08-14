import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium max-[300px]:text-xs text-base md:text-lg dark:text-light dark:border-light'>
      <Layout className='lg:py-8 space-y-2 flex flex-col lg:flex-row items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built With
          <span className='text-2xl px-1'>☕</span>
          by&nbsp;
          <Link href='/about' className='underline underline-offset-2'>
              Luis Egea
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;