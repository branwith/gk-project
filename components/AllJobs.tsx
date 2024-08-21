import React from 'react'
import JobCardsSection from './ui/All_Jobs/JobCardsSection'
import Preloader from './ui/Preloader'
import Nav from './ui/Nav'
import FilterForm from './ui/FilterForm'

import Footer from './ui/Footer'


import Hero_bg from "@/assets/images/hero/bg1.jpg"
function AllJobs() {

  return (
    <>
    {/* <Preloader> </Preloader>

    <div className="">
      <Nav/>
    </div>


    <JobCardsSection />




    <FilterForm /> */}







    <Preloader> </Preloader>

    <Nav />
    <section className={`relative table w-full py-36 bg-[${Hero_bg}] bg-top bg-no-repeat bg-cover`}>
      <div className="absolute inset-0 bg-emerald-900/90"></div>
      <div className="container">
        <div className="grid grid-cols-1 text-center mt-10">
          <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Vacancies</h3>
        </div>
      </div>
    </section>
    <div className="relative">
      <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
        <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>

    <section className="relative -mt-[42px] md:pb-24 pb-16">
      <div className="container z-1">
        <div className="d-flex" id="reserve-form">
          <div className="md:w-5/6 mx-auto">
            <div className="lg:col-span-10">
              <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                <FilterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <JobCardsSection/>




      <div className="container-fluid md:mt-24 mt-16">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-8 md:col-span-7">
                  <div className="md:text-start text-center relative z-1">
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                    <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                  </div>
                </div>

                <div className="lg:col-span-4 md:col-span-5">
                  <div className="text-end relative z-1">
                    <a href="#" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</a>
                    <a href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -start-5">
                <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
              </div>

              <div className="absolute -bottom-5 -end-5">
                <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />

    <div className="fixed top-1/4 -left-2 z-50">
      <span className="relative inline-block rotate-90">
        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
        <label
          className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
          htmlFor="chk">
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

export default AllJobs