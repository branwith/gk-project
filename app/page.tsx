"use client"
import Hello from "@/components/Hello";
import Image from "next/image";

import Nav from "@/components/ui/Nav";


import Hero_bg from "@/assets/images/hero/bg3.jpg"

import About_03 from "assets/images/about/ab03.jpg"
import About_04 from "assets/images/about/ab04.jpg"
import About_05 from "@/assets/images/about/ab05.jpg"

import Logo_light from "@/assets/images/logo-light.png"
import Preloader from "@/components/ui/Preloader";
import { useState } from "react";
import FilterForm from "@/components/ui/FilterForm";




export default function Home() {

  return (
    <>
      <Preloader> </Preloader>

      <div className="">
        <Nav />

        <section className="relative h-screen flex justify-center items-center bg-cover"
          style={{ backgroundImage: `url(${Hero_bg.src})`, opacity: 1 }}
        >
          <div className="absolute inset-0 bg-slate-900/30"></div>

          <div className="container z-1">
            <div className="grid grid-cols-1 text-center mt-10 relative">
              <h4 className="lg:leading-normal leading-normal text-3xl lg:text-4xl mb-5 font-bold text-white">
                Looking for a job matching your skills? <br />
                or finding difficulties hiring right skilled employees?
                <br />You reached the right place!
              </h4>

              <div className="hidden sm:block" id="reserve-form">
                <div className="md:w-5/6 mx-auto">
                  <div className="lg:col-span-10 mt-8">
                    <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                      <FilterForm />

                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-white/60 mt-2">
                    <span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer
                  </span>
                </div>
              </div>
            </div>

            <div className="grid-cols-4 text-center mt-10 relative">
              <button className="bg-emerald-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <a href="job-categories.html">Find Jobs</a>
              </button>
              <button className="bg-emerald-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <a href="companyRegister.html">Register your company</a>
              </button>
            </div>
          </div>
        </section>


        <section className="relative md:py-24 py-16">

          <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
                <div className="grid md:grid-cols-2 items-center gap-[30px]">
                  <div className="relative">
                    <Image src={About_05} alt="" />
                    <div
                      className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                      <a href="#" data-type="youtube" data-id=""
                        className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-white p-4">
                      <h4 className="leading-normal text-4xl mb-3 font-semibold">Get the job of your <br /> dreams
                        quickly.</h4>

                      <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get
                        your own personalized salary estimate.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container md:mt-24 mt-16">
            <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
              <div className="counter-box text-center">
                <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span className="counter-value"
                  data-target="1548">1010</span>K+</h1>
                <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Job Fulfillment</h5>
              </div>

              <div className="counter-box text-center">
                <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span className="counter-value"
                  data-target="25">2</span>+</h1>
                <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Branches</h5>
              </div>

              <div className="counter-box text-center">
                <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span className="counter-value"
                  data-target="9">0</span>+</h1>
                <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Years Experience</h5>
              </div>
            </div>
          </div>


          <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Questions &
                Answers</h3>

              <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              <div className="flex">
                <i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
                <div className="flex-1">
                  <h5 className="mb-2 text-lg font-semibold">How our <span className="text-emerald-600">company</span>
                    work ?</h5>
                  <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                    laborum exercitationem, deleniti cum laboriosam error modi numquam sequi eaque,
                    reprehenderit repellendus suscipit consequatur tempora illum, adipisci ipsa aut sed maxime.
                  </p>
                </div>
              </div>

              <div className="flex">
                <i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
                <div className="flex-1">
                  <h5 className="mb-2 text-lg font-semibold"> What is the ......?</h5>
                  <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque vero
                    eveniet sed doloribus velit deleniti magni obcaecati veritatis accusamus molestias
                    blanditiis soluta suscipit numquam, aliquid aliquam ut molestiae. Numquam, dolor?</p>
                </div>
              </div>

              <div className="flex">
                <i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
                <div className="flex-1">
                  <h5 className="mb-2 text-lg font-semibold"> What is the ......?</h5>
                  <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque vero
                    eveniet sed doloribus velit deleniti magni obcaecati veritatis accusamus molestias
                    blanditiis soluta suscipit numquam, aliquid aliquam ut molestiae. Numquam, dolor?</p>
                </div>
              </div>

              <div className="flex">
                <i data-feather="help-circle" className="h-8 text-emerald-600 me-3"></i>
                <div className="flex-1">
                  <h5 className="mb-2 text-lg font-semibold"> What is the ......?</h5>
                  <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque vero
                    eveniet sed doloribus velit deleniti magni obcaecati veritatis accusamus molestias
                    blanditiis soluta suscipit numquam, aliquid aliquam ut molestiae. Numquam, dolor?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid md:mt-24 mt-16">
            <div className="container">
              <div className="grid grid-cols-1">
                <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7">
                      <div className="md:text-start text-center relative z-1">
                        <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job
                          now!</h3>
                        <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get
                          your own personalized salary estimate. Read reviews on over 30000+ companies
                          worldwide.</p>
                      </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-5">
                      <div className="text-end relative z-1">
                        <a href="allJobs.html"
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
                        <Image
                          src={Logo_light}
                          className=""
                          alt="" />
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

        <a href="#" /*onClick={"topFunction()"}*/ id="back-to-top"
          className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-emerald-600 text-white justify-center items-center"><i
            className="uil uil-arrow-up"></i></a>
      </div>

    </>
  );
}
