import React from 'react'
import Header from './components/header'
import Image from 'next/image'

export default function profile() {
    return (
        <div>
            <Header />
            <div className="mx-auto max-w-7xl">
                <div className='flex justify-center text-center lg:px-64 mt-20'>
                    <Image
                        src="/profile.jpg"
                        width={200}
                        height={200}
                        alt="black chair and white table"
                        className="object-cover object-left-top rounded-md  w-[250px] h-[250px]"
                    />
                </div>
                <div className='flex justify-center text-center mt-3'>
                    <h1 className='text-xl font-bold'>Big Wasan</h1>
                </div>
                <div className="mx-6 items-center  border-b-2 border-black mt-4">
                    <h1 className='text-xl font-medium'>Preference</h1>
                </div>
                <div className="mx-6 items-center mt-3">
                    <div class="w-full bg-[#D9D9D9] rounded-full dark:bg-[#D9D9D9] border-2 border-black">
                        <div class="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]">45%</div>
                    </div>
                </div>
                <div className="flex mx-6 items-center mt-4 justify-between">
                    <h1 className='text-xl font-medium'>Vegetable</h1>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-[#D9D9D9] peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-[#D9D9D9]  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </div>
    )
}
