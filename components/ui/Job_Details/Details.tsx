"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import { useParams } from 'next/navigation';

const Details = () => {
    const [jobDetails, setJobDetails] = useState<any | null>(null);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const { id } = useParams(); // Accessing the id parameter using useParams from next/navigation

    useEffect(() => {
        if (!id) {
            setFetchError("No ID found");
            return;
        }

        const fetchJobDetails = async () => {
            try {
                const { data, error } = await supabase
                    .from('job_listings')
                    .select('*')
                    .eq('id', id);

                if (error) {
                    setFetchError('Failed to fetch data');
                    console.error('Error fetching job details:', error);
                } else if (data && data.length > 0) {
                    setJobDetails(data[0]);
                    setFetchError(null);
                } else {
                    setFetchError('No details found');
                }
            } catch (error) {
                console.error('Error fetching job details:', error);
                setFetchError('Failed to fetch data');
            }
        };

        fetchJobDetails();
    }, [id]);

    if (fetchError) {
        return (
            <div className="lg:col-span-4 md:col-span-6">
                <p>{fetchError}</p>
            </div>
        );
    }

    if (!jobDetails) {
        return (
            <div className="lg:col-span-4 md:col-span-6">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <div className="lg:col-span-4 md:col-span-6">
                <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                    <div className="p-6">
                        <h5 className="text-lg font-semibold">Job Information</h5>
                    </div>
                    <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                        <ul className="list-none">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check size-5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>

                                <div className="ms-4">
                                    <p className="font-medium">Employee Type:</p>
                                    <span className="text-emerald-600 font-medium text-sm">
                                        {jobDetails.type && jobDetails.type.map((type: string, index: number) => (
                                            <React.Fragment key={index}>
                                                {type}
                                                {index < jobDetails.type.length - 1 && ', '}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>
                            </li>

                            <li className="flex items-center mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin size-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

                                <div className="ms-4">
                                    <p className="font-medium">Location:</p>
                                    <span className="text-emerald-600 font-medium text-sm">{jobDetails.location}</span>
                                </div>
                            </li>

                            <li className="flex items-center mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor size-5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>

                                <div className="ms-4">
                                    <p className="font-medium">Job Type:</p>
                                    <span className="text-emerald-600 font-medium text-sm">{jobDetails.job_title}</span>
                                </div>
                            </li>

                            <li className="flex items-center mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase size-5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>

                                <div className="ms-4">
                                    <p className="font-medium">Experience:</p>
                                    <span className="text-emerald-600 font-medium text-sm">{jobDetails.experience}</span>
                                </div>
                            </li>

                            <li className="flex items-center mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book size-5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>

                                <div className="ms-4">
                                    <p className="font-medium">Qualifications:</p>
                                    <span className="text-emerald-600 font-medium text-sm">{jobDetails.qualifications}</span>
                                </div>
                            </li>

                            <li className="flex items-center mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign size-5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>

                                <div className="ms-4">
                                    <p className="font-medium">Salary:</p>
                                    <span className="text-emerald-600 font-medium text-sm">{jobDetails.salary.from} - {jobDetails.salary.to}</span>
                                </div>
                            </li>

                            <li className="flex items-center mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock size-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

                                <div className="ms-4">
                                    <p className="font-medium">Date posted:</p>
                                    <span className="text-emerald-600 font-medium text-sm">{jobDetails.posted_at}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-8 md:col-span-6">
                <h5 className="text-lg font-semibold">Job Description:</h5>


                {
                    jobDetails.description.rows.map((data: string, index: number) => (
                        <p key={index} className='text-slate-400 mt-4'>{data}</p>
                    ))
                }

                <p className="text-slate-400 mt-4"></p>
                {/* <p className="text-slate-400 mt-4">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p> */}
                {/* <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p> */}

                <h5 className="text-lg font-semibold mt-6">Responsibilities and Duties: </h5>
                <p className="text-slate-400 mt-4">{jobDetails.responsibilities_and_duties.main_text}</p>
                <ul className="list-none">
                    {
                        jobDetails.responsibilities_and_duties.points.map((data: string, index: number) => (
                            <li className="text-slate-400 mt-2" key={index}><i className="uil uil-arrow-right text-emerald-600 me-1" ></i>{data}</li>

                        ))
                    }

                </ul>

                <h5 className="text-lg font-semibold mt-6">Required Experience, Skills and Qualifications: </h5>
                <p className="text-slate-400 mt-4">{jobDetails.experience_and_skills.main_text}</p>
                <ul className="list-none">
                    {
                        jobDetails.experience_and_skills.points.map((data: string, index: number) => (
                            <li className="text-slate-400 mt-2" key={index}><i className="uil uil-arrow-right text-emerald-600 me-1"></i>{data}</li>

                        ))
                    }

                </ul>

                <div className="mt-5">
                    <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                </div>
            </div>
        </>

    );
};

export default Details;
