import dynamic from 'next/dynamic';

const JobDetails = dynamic(() => import('@/components/JobDetails'), { ssr: false });

const JobDetailsPage = () => {
    return <JobDetails />;
};

export default JobDetailsPage;
