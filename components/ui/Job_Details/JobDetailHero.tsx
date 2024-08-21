"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { supabase } from '@/utils/supabase';

import Hero from "@/assets/images/hero/bg1.jpg"



const JobDetailHero = () => {


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
console.log("data",data);

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
    <section className={`relative table w-full py-36 bg-[${Hero}] bg-top bg-no-repeat bg-cover`}>
    <div className="absolute inset-0 bg-emerald-900/90"></div>
    <div className="container">
        <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">{jobDetails.job_title}</h3>

        </div></div>

    <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li
                className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
                <a href="index.html">Home</a></li>
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
                aria-current="page">Job Categories</li>
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
                aria-current="page">{jobDetails.category}</li>
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
                aria-current="page">{jobDetails.company_name}</li>

        </ul>
    </div>
</section>
  )
}

export default JobDetailHero