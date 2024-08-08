import React, { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '@/public/images/blog/layer-0-title.png';
import image2 from '@/public/images/blog/link-weth-analysis.png';
import image3 from '@/public/images/blog/v4-announcement.png';
import image4 from '@/public/images/blog/cov-1.png';
import image5 from '@/public/images/blog/web3-dev.png';
import image6 from '@/public/images/blog/merge.png';
import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

type PostProps = {
  img: any;
  title: string;
  link: string;
  time?: string;
  summary?: string;
  date?: string;
};

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }: PostProps) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(img);

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    imgRef.current.style.display = 'inline-block';
    x.set(e.pageX);
    y.set(-10);
  };

  const handleMouseLeave = () => {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target='_blank'
      className='hover:underline underline-offset-2'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className='z-10 w-96 h-auto max-lg:!hidden hidden absolute rounded-lg'
      />
    </Link>
  )
}

const FeaturedPost = ({ img, title, time, summary, link }: PostProps) => {
  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative flex flex-col justify-between dark:bg-dark dark:border-light'>
      
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />

      <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
        <h2 className='my-2 capitalize text-lg sm:text-2xl font-bold pb-4'>{title}</h2>
      </Link>

      <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>

      <p className='text-sm my-4'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  );
};

const Post = ({ img, title, date, link }: PostProps) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{once: true}}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex flex-col sm:flex-row items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light'
    >
      <MovingImage title={title} img={img} link={link} />
      <span className='text-primary font-semibold dark:text-primaryDark self-start sm:pl-4 text-sm sm:text-xl'>{date}</span>
    </motion.li>
  )
}

const blog = () => {
  return (
    <>
      <Head>
        <title>Luis Egea | Blog</title>
        <meta name="description" content="Alpha Innovations is a software development company that provides software development services to clients." />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-0 pb-0 lg:pt-16'>
          <AnimatedText text='Words Can Change The World!' className='mb-8 md:mb-16 text-3xl sm:text-4xl md:text-6xl lg:text-7xl' />
          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 gap-y-16'>
            <FeaturedPost
              img={image3}
              title='Announcing Mintgate V4'
              time='4 min read'
              summary='Our Vision for Empowering Creation and Community. We are excited to announce the release of Mintgate V4, the latest iteration of our platform.'
              link='https://medium.com/mintgate/announcing-mintgate-v4-7441690cd760'
            />
            <FeaturedPost
              img={image2}
              title='Chainlink / WETH Liquidity Pool Analysis'
              time='7 min read'
              summary='In Week 2 of Covalent’s Data Alchemist program, I’ve chosen to analyze the Uniswap V2 and Sushiswap liquidity pools for LINK/WETH on Ethereum. Uniswap is DeFi’s leading DEX and Sushiswap is one of its original competitors.'
              link='https://medium.com/@jshanks21/chainlink-weth-liquidity-pool-analysis-f7711e15c443'
            />
          </ul>
          <h2 className='font-bold w-full text-center text-4xl my-16 mt-32'>All Posts</h2>
          <ul className='mb-40'>
            <Post
              img={image1}
              title='What is Layer 0: Social & Technical'
              date='Dec 8, 2022'
              link='https://medium.com/@jshanks21/what-is-layer-0-social-technical-b1568eab48df'
            />            
            <Post
              img={image4}
              title='Covalent Week 1: Harmony vs Optimism'
              date='Nov 16, 2022'
              link='https://medium.com/@jshanks21/covalent-week-1-harmony-vs-optimism-a561b26745d5'
            />            
            <Post
              img={image5}
              title='Where to Start as a Developer in Web3'
              date='Sep 27, 2022'
              link='https://medium.com/@jshanks21/where-to-start-as-a-developer-in-web3-baa69cdec46c'
            />
            <Post
              img={image6}
              title='What is the Ethereum Merge?'
              date='Aug 30, 2022'
              link='https://medium.com/@jshanks21/what-is-the-ethereum-merge-b5197d6707ee'
            />            
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default blog;