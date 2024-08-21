import React from 'react'


import Details from './Details'
import JobDetailHero from './JobDetailHero';
import RelatedVacancies from './RelatedVacancies';

import "@/assets/libs/tobii/css/tobii.min.css";
import "@/assets/libs/tiny-slider/tiny-slider.css";
import "@/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "@/assets/libs/@iconscout/unicons/css/line.css";
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/assets/css/tailwind.min.css";
import "@/assets/css/style.css";
import Image from 'next/image';

import Logo_light from "@/assets/images/logo-light.png"


import "@/assets/libs/tobii/js/tobii.min.js"

import "@/assets/libs/feather-icons/feather.min.js"
import Nav from '../Nav';

// import "@/assets/js/plugins.init.js"
// import "@/assets/libs/tiny-slider/min/tiny-slider.js"
// import "@/assets/libs/choices.js/public/assets/scripts/choices.min.js"
// import "@/assets/js/app.js"

const Statics = () => {
    return (
        <>
            {/* <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div> */}


            <Nav />


            <JobDetailHero />

            <div className="relative">
                <div
                    className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>



            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <Details />


                    </div>
                </div>
                <RelatedVacancies/>
                

                <div className="container-fluid md:mt-24 mt-16">
                    <div className="container">
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                                    <div className="lg:col-span-8 md:col-span-7">
                                        <div className="md:text-start text-center relative z-1">
                                            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!
                                            </h3>
                                            <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your
                                                own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-4 md:col-span-5">
                                        <div className="text-end relative z-1">
                                            <a href="employer-detail.html"
                                                className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply
                                                Now</a>
                                            <a href="aboutus.html"
                                                className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2">Learn
                                                More</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-5 -start-5">
                                    <div
                                        className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45">
                                    </div>
                                </div>

                                <div className="absolute -bottom-5 -end-5">
                                    <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="relative bg-slate-900 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="relative py-12">

                            <div className="relative w-full">
                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                    <div className="md:col-span-3">
                                        <a href="#" className="flex justify-center md:justify-start focus:outline-none">
                                            <Image src={Logo_light} className="" alt="" />
                                        </a>
                                    </div>

                                    <div className="md:col-span-9">
                                        <ul className="list-disc footer-list md:text-end text-center space-x-3">
                                            <li className="inline-block"><a href="index.html"
                                                className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Home</a>
                                            </li>
                                            <li className="inline-block mt-[10px] md:mt-0"><a href="aboutus.html"
                                                className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">How
                                                it works</a></li>
                                            <li className="inline-block mt-[10px] md:mt-0"><a href="companyRegister.html"
                                                className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Register
                                                company</a></li>
                                            <li className="inline-block mt-[10px] md:mt-0"><a href="aboutus.html"
                                                className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">About
                                                us</a></li>
                                            <li className="inline-block mt-[10px] md:mt-0"><a href="contact.html"
                                                className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Careers
                                            </a></li>
                                            <li className="inline-block mt-[10px] md:mt-0"><a href="contact.html"
                                                className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Contact
                                                us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-2 items-center gap-6">
                            <div className="md:text-start text-center">
                                <p className="mb-0 text-gray-300 font-medium">©
                                    2024 GK Recruiters. Design with <i className="mdi mdi-heart text-red-600"></i> by <a
                                        href="https://revlient.com/" target="_blank" className="text-reset">Revlient</a>.
                                </p>
                            </div>

                            <ul className="list-none md:text-end text-center space-x-0.5">

                                <li className="inline"><a href="" target="_blank"
                                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i
                                        className="uil uil-linkedin" title="Linkedin"></i></a></li>
                                <li className="inline"><a href="" target="_blank"
                                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i
                                        className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                                <li className="inline"><a href="" target="_blank"
                                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i
                                        className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                <li className="inline"><a href="" target="_blank"
                                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i
                                        className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                                <li className="inline"><a href="mailto:support@company.in"
                                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i
                                        className="uil uil-envelope align-middle" title="email"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="fixed top-1/4 -left-2 z-50">
                <span className="relative inline-block rotate-90">
                    <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
                    <label
                        className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
                    >
                        <i className="uil uil-moon text-[20px] text-yellow-500"></i>
                        <i className="uil uil-sun text-[20px] text-yellow-500"></i>
                        <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                    </label>
                </span>
            </div>


            <a href="#" /*onclick="topFunction()"*/ id="back-to-top"
                className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-emerald-600 text-white justify-center items-center"><i
                    className="uil uil-arrow-up"></i></a>
        </>
    )
}

export default Statics