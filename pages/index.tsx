import Layout from '@/components/Layout'
import Image from 'next/image'
import heroPic from '@/public/images/profile/hero-anime2-removebg.png'
import AnimatedText from '@/components/AnimatedText'

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
              <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
