import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head from next/head to manage meta tags and links
import React, { ReactNode } from "react";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GK | Group of recruiters", // Update title to match your application
  description: "Job Listing Landing Template", // Update description if needed
  keywords: "Job, CV, Career, Resume, Job Portal, Create Job, Post job, tailwind Css, GK group", // Update keywords if needed
};

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <html lang="en" className="light scroll-smooth">
        <body className={`dark:bg-slate-900 ${inter.className}`}>{children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
