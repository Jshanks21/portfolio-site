import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '@/public/images/profile/cropped_profile.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        (ref.current as any).innerHTML = Math.round(latest)
      }
    });

  }, [value, springValue]);

  return (
    <span ref={ref}></span>
  );
};

const about = () => {
  return (
    <>
      <Head>
        <title>Alpha Innovations | About</title>
        <meta name="description" content="Alpha Innovations is a software development company that provides software development services to clients." />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-0 lg:pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-8 lg:mb-16 text-4xl sm:text-6xl lg:text-7xl' />

          <div className='w-full grid grid-cols-8 gap-8 sm:gap-12 md:gap-16'>

            <div className='xl:col-span-3 col-span-8 lg:col-span-4 flex flex-col items-start justify-start order-2 xl:order-1'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

              <p className='sm:font-medium'>
                Hi there and welcome to Alpha Innovations. My name is Luis, a web3 developer and UI/UX designer with a passion for creating beautiful, functional,
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                new and innovative ways to bring my clients' visions to life.
              </p>
              <p className='my-8 sm:font-medium'>
                I believe that design is about more than just making things look pretty – it's about solving problems and
                creating intuitive, enjoyable experiences for users.
              </p>
              <p className='sm:font-medium'>
                Whether I'm working on a website, mobile app, or
                other digital product, I bring my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>

            </div>

            <div className='xl:col-span-3 lg:col-span-4 col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light order-1 xl:order-2'>
              
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              
              <Image
                src={profilePic}
                alt='Alpha Innovations - Luis'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>

            <div className='col-span-8 xl:col-span-2 flex xl:flex-col flex-row lg:items-center justify-between order-3'>

              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='font-medium capitalize text-dark/75 dark:text-light/75 text-sm sm:text-base md:text-lg lg:text-xl text-center mr-2'>
                  satisfied clients
                </h2>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='font-medium capitalize text-dark/75 dark:text-light/75 text-sm sm:text-base md:text-lg lg:text-xl text-center mr-2'>
                  projects completed
                </h2>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className='font-medium capitalize text-dark/75 dark:text-light/75 text-sm sm:text-base md:text-lg lg:text-xl text-center'>
                  years of epic experience
                </h2>
              </div>

            </div>

          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>

    </>
  );
};

export default about;