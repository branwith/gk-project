import { supabase } from '@/utils/supabase';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const JobCardsSection: React.FC = () => {
    const params = useSearchParams();
    const values = Array.from(params.values());
    const [companyName, location, type] = values;
console.log("lll: ",location,'',companyName,'',type);

    const [fetchError, setFetchError] = useState<string | null>(null);
    const [jobs, setJobs] = useState<any[] | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                let query = supabase.from('job_listings').select('*');

                // Apply filters if parameters are present
                if (companyName) {
                    query = query.eq('job_title', companyName);
                }
                if (location) {
                    // Escape special characters in location using RegExp.escape
                    
                    query = query.eq('location', location);
                }

                // Fetch jobs from Supabase
                const { data, error } = await query;

                if (error) {
                    setFetchError('Failed to fetch data.');
                    setJobs(null);
                } else {
                    // Filter jobs based on 'type' if present
                    let filteredJobs = data;

                    if (type) {
                        filteredJobs = data.filter(job => job.type.includes(type));
                    }

                    setJobs(filteredJobs);
                    setFetchError(null);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setFetchError('Failed to fetch data.');
                setJobs(null);
            }
        };

        fetchJobs();
    }, [companyName, location, type]);

    useEffect(() => {
        if (jobs) {
            jobs.forEach(job => {
                const currentDate = new Date();
                const postedAtDate = new Date(job.posted_at);
                const difference = currentDate.getTime() - postedAtDate.getTime();
                const gapInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
                console.log(`Job ID ${job.id} - Gap in days:`, gapInDays);
            });
        }
    }, [jobs]);

    return (
        <div className="container mt-10">
            {fetchError && <p>Sorry something went wrong!</p>}
            {jobs && (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {jobs.map((job) => (
                        <div key={job.id} className="">
                            <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src={job.company_logo} className="size-8" alt={job.company_name} />
                                        </div>
                                        <div className="ms-3">
                                            <a href={`/job_details/${job.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{job.company_name}</a>
                                        </div>
                                    </div>
                                    <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">{job.type[0]}</span>
                                </div>
                                <div className="mt-6">
                                    <a href={`/job_details/${job.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">{job.job_title}</a>
                                    <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> {job.location}</h6>
                                </div>
                                <div className="mt-6">
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: "55%" }}></div>
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">{job.limit_application.current} applied</span> of {job.limit_application.current} vacancy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <a href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">1</a>
                            </li>
                            <li>
                                <a href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">3</a>
                            </li>
                            <li>
                                <a href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</a>
                            </li>
                            <li>
                                <a href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</a>
                            </li>
                            <li>
                                <a href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default JobCardsSection;
