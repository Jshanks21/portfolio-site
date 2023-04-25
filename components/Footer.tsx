import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
      <Layout className='py-8 flex items-center justify-between '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built With
          <span className='text-2xl px-1'>☕</span>
          
          by&nbsp;

          <div className='underline underline-offset-2 cursor-not-allowed'>
            <div className='has-tooltip'>
              <span className='tooltip rounded shadow-lg p-1 bg-dark text-light -mt-10'>Coming to an SERP near you!</span>
              Alpha Innovations
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;