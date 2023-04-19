import Layout from '@/components/Layout'
import Image from 'next/image'
import heroPic from '@/public/images/profile/hero-lasers2.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow, PolygonIcon, EthLogo, OptimismLogo } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import arbLogo from '@/public/images/chains/arbitrum-logo.png'

export default function Home() {
  return (
    <>
      <main className='flex items-center w-full text-dark min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={heroPic} alt="Alpha Innovations" className='rounded-[20%]' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-6xl !text-left' />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link
                  href='/dummy.pdf'
                  target='_blank'
                  className='flex items-center justify-center p-6 py-2 mr-4 text-lg font-medium text-light bg-dark rounded-md hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                  download={true}
                >
                  Resume
                  <LinkArrow className='w-5 ml-1' />
                </Link>
                <Link
                  href='mailto:alphasearchseo@gmail.com'
                  target='_blank'
                  className='ml-4 text-lg font-medium text-dark underline'
                >
                  Contact
                </Link>                
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 flex justify-between space-x-32'>
          <EthLogo className='!w-24' />          
          <PolygonIcon className='!w-24' />
          <OptimismLogo className='!w-24' />
          <Image src={arbLogo} alt="Arbitrum logo" className='!w-24' />
        </div>        
      </main>
    </>
  )
}

// absolute right-8 bottom-8 inline-block w-24