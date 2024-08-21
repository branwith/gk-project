

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase';
import '@/assets/filter/filter.css';
import CustomLink from './CustomLink';

const FilterForm = () => {
    const router = useRouter();

    const [isLocationChoiceOpen, setLocationChoiceOpen] = useState(false);
    const [isTypeChoiceOpen, setTypeChoiceOpen] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [jobs, setJobs] = useState<any[] | null>(null);
    const [uniqueLocations, setUniqueLocations] = useState<string[]>([]);
    const [suggestions, setSuggestions] = useState<{ job_title: string[]; company_name: string[] }>({
        job_title: [],
        company_name: [],
    });

    const suggestionsRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
                setSuggestions({ job_title: [], company_name: [] });
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const { data, error } = await supabase.from('job_listings').select('*');
                if (error) {
                    setFetchError('Failed to fetch data');
                    setJobs(null);
                    console.error('Error fetching jobs:', error.message);
                } else {
                    setJobs(data);
                    setFetchError(null);
                    // console.log('Fetched jobs:', data);

                    // Extract unique locations with case insensitivity
                    const unique = Array.from(new Set(data.map(job => job.location)));
                    setUniqueLocations(unique);
                }
            } catch (error) {
                console.error('Error in fetchJobs function:', error);
                setFetchError('An unexpected error occurred');
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (keyword.length < 2) {
                setSuggestions({ job_title: [], company_name: [] });
                return;
            }

            try {
                // Fetch suggestions for job_title
                const { data: titleData, error: titleError } = await supabase
                    .from('job_listings')
                    .select('job_title')
                    .ilike('job_title', `%${keyword}%`);

                if (titleError) {
                    console.error('Error fetching title suggestions:', titleError);
                    setSuggestions(prevState => ({ ...prevState, job_title: [] }));
                } else {
                    const suggestionResultsTitle = titleData.map(item => item.job_title);
                    setSuggestions(prevState => ({ ...prevState, job_title: suggestionResultsTitle }));
                }

                // Fetch suggestions for company_name
                const { data: companyData, error: companyError } = await supabase
                    .from('job_listings')
                    .select('company_name')
                    .ilike('company_name', `%${keyword}%`);

                if (companyError) {
                    console.error('Error fetching company suggestions:', companyError);
                    setSuggestions(prevState => ({ ...prevState, company_name: [] }));
                } else {
                    const suggestionResultsCompany = companyData.map(item => item.company_name);
                    setSuggestions(prevState => ({ ...prevState, company_name: suggestionResultsCompany }));
                }
            } catch (error) {
                console.error('Error in fetchSuggestions function:', error);
                setSuggestions({ job_title: ['No results found'], company_name: ['No results found'] });
            }
        };

        fetchSuggestions();
    }, [keyword]);

    const handleLocationChoiceClick = () => {
        setLocationChoiceOpen(prevState => !prevState);
        setTypeChoiceOpen(false);
    };

    const handleTypeChoiceClick = () => {
        setTypeChoiceOpen(prevState => !prevState);
        setLocationChoiceOpen(false);
    };

    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setKeyword(value);

        // Clear suggestions when input is empty
        if (value === '') {
            setSuggestions({ job_title: [], company_name: [] });
        }
    };

    const handleLocationSelect = (location: string) => {
        setSelectedLocation(location);
        setLocationChoiceOpen(false);
    };

    const handleTypeSelect = (type: string) => {
        setSelectedType(type);
        setTypeChoiceOpen(false);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setKeyword(suggestion);
        setSuggestions({ job_title: [], company_name: [] });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Keyword:', keyword, 'Location:', selectedLocation, 'Type:', selectedType);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="registration-form text-dark text-start">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    <div className="filter-search-form relative filter-border">
                        <i className="uil uil-briefcase-alt icons"></i>
                        <input
                            name="name"
                            type="text"
                            id="job-keyword"
                            className="form-input filter-input-box bg-black dark:bg-slate-800 border-6"
                            placeholder="Search your Keywords"
                            value={keyword}
                            onChange={handleKeywordChange}
                            required
                        />
                        {(suggestions.job_title.length > 0 || suggestions.company_name.length > 0) && (
                            <ul
                                ref={suggestionsRef}
                                className="absolute z-10 bg-white dark:bg-gray-800 w-full border mt-1"
                            >
                                {suggestions.job_title.map((suggestion, index) => (
                                    <li
                                        key={`title-${index}`}
                                        className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                                {suggestions.company_name.map((suggestion, index) => (
                                    <li
                                        key={`company-${index}`}
                                        className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="filter-search-form relative filter-border">
                        <i className="uil uil-map-marker icons"></i>
                        <div className={`choices ${isLocationChoiceOpen ? 'is-open is-focused' : ''}`}>
                            <div className="choices__inner cursor-pointer" onClick={handleLocationChoiceClick}>
                                <input
                                    type="text"
                                    className="form-input choices__input cursor-pointer"
                                    readOnly
                                    value={selectedLocation}
                                    placeholder="Select Location"
                                    required
                                />
                                <div className="choices__arrow"></div>
                            </div>
                            {isLocationChoiceOpen && (
                                <div className={`choices__list choices__list--dropdown is-open is-active`}>
                                    {uniqueLocations.map((location, index) => (
                                        <div
                                            key={index}
                                            className={`choices__item ${selectedLocation.toLowerCase() === location ? 'is-selected' : ''}`}
                                            onClick={() => handleLocationSelect(location)}
                                        >
                                            {location}
                                        </div>
                                    ))}
                                    {fetchError && <div className="text-red-500">{fetchError}</div>}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="filter-search-form relative filter-border">
                        <i className="uil uil-briefcase-alt icons"></i>
                        <div className={`choices ${isTypeChoiceOpen ? 'is-open is-focused' : ''}`}>
                            <div className="choices__inner cursor-pointer" onClick={handleTypeChoiceClick}>
                                <input
                                    type="text"
                                    className="form-input choices__input cursor-pointer"
                                    readOnly
                                    value={selectedType}
                                    placeholder="Select Type"
                                    required
                                />
                                <div className="choices__arrow"></div>
                            </div>
                            {isTypeChoiceOpen && (
                                <div className={`choices__list choices__list--dropdown is-open is-active`}>
                                    {jobs && jobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className={`choices__item ${selectedType === job.type[0] ? 'is-selected' : ''}`}
                                            onClick={() => handleTypeSelect(job.type[0])}
                                        >
                                            {job.type[0]}
                                        </div>
                                    ))}
                                    {fetchError && <div className="text-red-500">{fetchError}</div>}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="justify-between grid grid-cols-1 gap-6">
                        <CustomLink
                            type="submit"
                            href="/jobs/all"
                            query={{ name: keyword, location: selectedLocation, type: selectedType }}
                            className="custom-link"
                        >
                            Search
                        </CustomLink>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FilterForm;
