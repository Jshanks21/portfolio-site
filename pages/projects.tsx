import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '@/public/images/projects/portfolio-homepage.jpg';
import project2 from '@/public/images/projects/crypto-screener-cover-image.jpg';
import { motion } from 'framer-motion';

type ProjectProps = {
  type: string;
  title: string;
  summary?: string;
  img: string | StaticImageData;
  link: string;
  github: string;
};

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }: ProjectProps) => {
  return (
    <article className='relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit Project</Link>
        </div>

      </div>
    </article>
  );
};

const Projects = ({ title, type, img, link, github }: ProjectProps) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark'>
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4 dark:text-light'> 
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline'>Visit</Link>
          <Link href={github} target='_blank' className='w-8'><GithubIcon /></Link>

        </div>

      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head >
        <title>Alpha Innovations | Projects</title>
        <meta name="description" content="Alpha Innovations is a software development company that provides software development services to clients." />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16' />

          <div className='grid grid-cols-12 gap-24 gap-y-32'>

            <div className='col-span-12'>
              <FeaturedProject
                type='Featured Project'
                title='React Portfolio Website'
                summary='A professional portfolio website using Next JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.'
                img={project1}
                link='/'
                github='https://github.com/Jshanks21/portfolio-site'
              />
            </div>
            <div className='col-span-6'>
              <Projects
                type='Project'
                title='Crypto Screener Application'
                img={project2}
                link='/'
                github='https://github.com/Jshanks21/portfolio-site'
              />
            </div>
            <div className='col-span-6'>
              <Projects
                type='Project'
                title='Crypto Screener Application'
                img={project2}
                link='/'
                github='https://github.com/Jshanks21/portfolio-site'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                type='Featured Project'
                title='React Portfolio Website'
                summary='A professional portfolio website using Next JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.'
                img={project1}
                link='/'
                github='https://github.com/Jshanks21/portfolio-site'
              />
            </div>
            <div className='col-span-6'>
              <Projects
                type='Project'
                title='Crypto Screener Application'
                img={project2}
                link='/'
                github='https://github.com/Jshanks21/portfolio-site'
              />
            </div>
            <div className='col-span-6'>
              <Projects
                type='Project'
                title='Crypto Screener Application'
                img={project2}
                link='/'
                github='https://github.com/Jshanks21/portfolio-site'
              />
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;