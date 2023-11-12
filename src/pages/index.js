'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })
import LoginBtn from './components/login-btn'
import Slider from './components/slider'
import Header from './components/header'

export default function Home() {
  return (
    <main>
      <Header />

      <div className="mx-auto max-w-7xl">
        <div className=" py-3 mx-6 items-center  border-b-2 border-black">
          <div>
            <h1 className='text-xl'>What will you eat? Sir.</h1>
          </div>
          <div>
            <Slider />
          </div>
        </div>

        <div className=" py-3 mx-6 items-center  border-b-2 border-black">
          <div>
            <h1 className='text-xl'>Don’t know? Let me help!</h1>
          </div>
          <div className='my-6 md:px-20 lg:px-56'>
            <button type="button" className="w-full text-black bg-[#CECDC1] border-2 border-black py-5 rounded-lg hover:bg-inherit hover:border-black hover:border-2 hover:text-black">
              Food Guesser
            </button>
          </div>
          <div className='my-6 md:px-20 lg:px-56'>
            <button type="button" className="w-full text-black bg-[#CECDC1] border-2 border-black py-5 rounded-lg hover:bg-inherit hover:border-black hover:border-2 hover:text-black">
              Near Restaurant
            </button>
          </div>
        </div>

        <div className=" py-3 mx-6 my-6 items-center">
          <div className='justify-center text-center'>
            <h1 className='text-2xl font-medium'>Comming Soon</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
