"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/utils/supabase';

const RelatedVacancies = () => {
  const { id } = useParams(); // Accessing the id parameter using useParams from next/router

  const [jobDetails, setJobDetails] = useState<any | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const { data: jobData, error: jobError } = await supabase
          .from('job_listings')
          .select('*')
          .eq('id', id);

        if (jobError) {
          setFetchError('Failed to fetch job details');
          console.error('Error fetching job details:', jobError);
        } else {
          setJobDetails(jobData && jobData.length > 0 ? jobData[0] : null);
          setFetchError(null);
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setFetchError('Failed to fetch job details');
      }
    };

    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  useEffect(() => {
    const fetchRelatedJobs = async () => {
      try {
        if (!jobDetails || !jobDetails.category || !id) {
          return;
        }

        // Fetch all jobs related to the category of the fetched job, excluding the current job's id
        const { data: relatedJobs, error: relatedError } = await supabase
          .from('job_listings')
          .select('*')
          .neq('id', id) // Exclude the current job's id
          .eq('category', jobDetails.category);

        if (relatedError) {
          setFetchError('Failed to fetch related jobs');
          console.error('Error fetching related jobs:', relatedError);
        } else {
          // Shuffle the fetched related jobs array randomly
          const shuffledJobs = shuffleArray(relatedJobs || []);
          // Select the first 3 elements from the shuffled array
          const selectedJobs = shuffledJobs.slice(0, 3);
          setJobs(selectedJobs);
        }
      } catch (error) {
        console.error('Error fetching related jobs:', error);
        setFetchError('Failed to fetch related jobs');
      }
    };

    fetchRelatedJobs();
  }, [jobDetails, id]);

  // Function to shuffle an array (Fisher-Yates shuffle algorithm)
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (!id) {
    return <div>No Jobs found</div>;
  }

  if (jobs.length == 0) {
    return <div className=""></div>
  }
  
  
  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
          Related Vacancies
        </h3>
        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
          Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
        {fetchError && (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-red-600">
            {fetchError}
          </div>
        )}
        {jobs.map(job => {
          const currentDate = new Date();
          const postedAtDate = new Date(job.posted_at);
          const difference = currentDate.getTime() - postedAtDate.getTime();
          const gapInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

          return (
            <div key={job.id} className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                    <Image src={job.company_logo} className="size-8" alt="Company Logo" width={32} height={32} />
                  </div>
                  <div className="ms-3">
                    <a href={`/job_details/${job.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">
                      {job.company_name}
                    </a>
                    <span className="block text-sm text-slate-400">{gapInDays} days ago</span>
                  </div>
                </div>
                <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                  {job.type[0]}
                </span>
              </div>

              <div className="mt-6">
                <a href={`/job_details/${job.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">
                  {job.title}
                </a>
                <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> {job.location}</h6>
              </div>

              <div className="mt-6">
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: `${(job.limit_application.current / job.limit_application.total) * 100}%` }}></div>
                </div>
                <div className="mt-2">
                  <span className="text-slate-400 text-sm">
                    <span className="text-slate-900 dark:text-white font-semibold inline-block">{job.limit_application.current} applied</span> of {job.limit_application.total} vacancy
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedVacancies;
