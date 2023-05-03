import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium max-[300px]:text-xs text-base md:text-lg dark:text-light dark:border-light'>

      <Layout className='space-y-2 flex flex-col lg:flex-row items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built With
          <span className='text-2xl px-1'>☕</span>
          
          by&nbsp;

          <div className='lg:underline underline-offset-2 cursor-not-allowed'>
            <div className='has-tooltip'>
              <span className='max-lg:!hidden tooltip rounded shadow-lg p-1 bg-dark text-light -mt-10'>Coming to an SERP near you!</span>
              Alpha Innovations
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;