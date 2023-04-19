import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js + Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen text-xl`}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  )
}
