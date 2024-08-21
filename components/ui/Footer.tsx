import Image from 'next/image'
import React from 'react'

import Logo_light from "@/assets/images/logo-light.png"

const Footer = () => {
  return (
   <>
       <footer className="relative bg-slate-900 dark:bg-slate-800">
        <div className="container">
            <div className="grid grid-cols-1">
                <div className="relative py-12">
                    
                    <div className="relative w-full">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="md:col-span-3">
                                <a href="#" className="flex justify-center md:justify-start focus:outline-none">
                                    <Image src={Logo_light} className="" alt=""/>
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
                           2024 GK Recruiters. Design with <i
                                className="mdi mdi-heart text-red-600"></i> by <a href="https://revlient.com/"
                                target="_blank" className="text-reset">Revlient</a>.
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
   </>
  )
}

export default Footer