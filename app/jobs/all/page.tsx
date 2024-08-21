"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

import AllJobs from '@/components/AllJobs'
import FilterForm from '@/components/ui/FilterForm'
 
import "@/assets/libs/tobii/js/tobii.min.js"
import "@/assets/libs/feather-icons/feather.min.js"
// import "@/assets/js/plugins.init.js"
// import "@/assets/js/app.js"
// import "@/assets/libs/tiny-slider/min/tiny-slider.js"
// import "@/assets/libs/choices.js/public/assets/scripts/choices.min.js"




const page = () => {
  const params = useSearchParams();
  const values = Array.from(params.values());
  const [keyword, location, type] = values;
  console.log("filter", values);

  return (
    <>
     
      <AllJobs />
      <p>{keyword}</p>
      <p>{location}</p>
      <p>{type}</p>

    </>
  )
}

export default page





// import { useSearchParams } from 'next/navigation';

// const JobsAllPage = () => {
//     const searchParams = useSearchParams();

//     // Extract only the values from the search parameters
//     const values = Array.from(searchParams.values()).join(', ');

//     return (
//         <div>
//             <h1>Jobs</h1>
//             <p>{values}</p>
//         </div>
//     );
// };

// export default JobsAllPage;

