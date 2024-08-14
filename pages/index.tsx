import Layout from '@/components/Layout'
import Image from 'next/image'
import heroPic from '@/public/images/profile/hero-lasers2.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow, PolygonIcon, EthLogo, OptimismLogo } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import arbLogo from '@/public/images/chains/arbitrum-logo.png'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Egea | Home</title>
        <meta name="description" content="Alpha Innovations is a software development company that provides software development services to clients." />
      </Head>
      <TransitionEffect />
      <main className='flex items-center w-full text-dark min-h-screen dark:text-light'>

        <Layout className='pt-8 lg:pt-0'>
          <div className='flex items-center justify-between w-full flex-col lg:flex-row'>

            <div className='w-full lg:w-1/2 xl:mr-16'>
              <Image
                src={heroPic}
                alt="Alpha Innovations"
                className='w-full h-auto rounded-[20%] md:hidden lg:block' 
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-full flex flex-col items-center self-center text-center lg:w-1/2 '>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-3xl !text-center sm:!text-4xl md:!text-5xl lg:!text-6xl lg:!text-left xl:!text-5xl 2xl:!text-6xl' />
              <p className='my-4 text-sm lg:text-xl font-medium lg:text-left'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center mt-2 self-center lg:self-start'>
                <Link
                  href='/resume.pdf'
                  target='_blank'
                  className='flex items-center justify-center p-2 lg:p-6 px-4 lg:py-2 lg:mr-4 text-base lg:text-lg font-medium text-light bg-dark rounded-md hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
                  download={true}
                >
                  Resume
                  <LinkArrow className='w-5 ml-1' />
                </Link>
                <a
                  href='mailto:luis@alphasearch.tech'
                  target='_blank'
                  className='ml-4 text-base lg:text-lg font-medium text-dark underline dark:text-light'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='flex absolute right-8 bottom-8 justify-between space-x-32 invisible md:visible'>
          <EthLogo className='!w-24' />
          <PolygonIcon className='!w-24' />
          <OptimismLogo className='!w-24' />
          <Image src={arbLogo} alt="Arbitrum logo" className='!w-24' />
        </div>
      </main>
    </>
  )
}