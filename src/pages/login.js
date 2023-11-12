import React from 'react'
import Header from './components/header'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import LoginBtn from './components/login-btn'

export default function login() {
    return (
        <div>
            <Header />
            <section className="text-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-indigo-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-700 md:text-2xl dark:text-white">
                                Create an Account
                            </h1>
                            <form
                                className=" space-y-4 md:space-y-6"
                                action="#"
                            >
                                <div className="text-left">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-indigo-50 border border-black text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Abdullah Moiz"
                                    />
                                </div>
                                <div className="text-left">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-white"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div className="text-left">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-indigo-50 border border-indigo-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-white"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign Up
                                </button>
                                <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                                    Already have an account{" "}
                                    <Link
                                        href="/"
                                        onClick={signIn}
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
