'use client';

import React, { useState, useEffect } from 'react';
// import './Preloader.css'; // Import the CSS for the preloader

const Preloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    // Add event listener for page load
    window.addEventListener('load', handlePageLoad);

    // Ensure the loading state is false after the component mounts
    handlePageLoad();

    // Clean up event listener
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <>
      {loading && (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      )}
      <div style={{ display: loading ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
};

export default Preloader;
