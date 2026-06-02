"use client";

import Script from "next/script";
import { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import ApplyModal from "@/components/ApplyModal";

import { jobs } from "@/data/jobs";

interface JobType {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  industry: string;
  specialisation: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  slug?: string;
}

export default function JobDetailsClient({
  job,
}: {
  job: JobType;
}) {

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const relatedJobs = jobs
    .filter(
      (item) =>
        item.slug !== job.slug &&
        (
          item.industry === job.industry ||
          item.specialisation ===
            job.specialisation
        )
    )
    .slice(0, 3);

  return (

  <main className="bg-[#07111F] text-white overflow-hidden">

    <Script
      id="job-posting-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",

          title: job.title,

          description: job.description,

          employmentType: job.type,

          industry: job.industry,

          hiringOrganization: {
            "@type": "Organization",
            name: "RUDRON Global Talent Solutions",
            sameAs: "https://www.rudrongts.com",
          },

          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location,
            },
          },
        }),
      }}
    />

    <Navbar />

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[44vh] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.72) 45%, rgba(7,17,31,0.25) 80%), url('/jobs/jobs-hero.webp')",
          }}
        />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24">

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mb-5">

              <div className="bg-[#C89B3C] text-black text-[10px] font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

                {job.specialisation}

              </div>

              <div className="bg-white/10 text-white text-[10px] font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

                {job.type}

              </div>

            </div>

            {/* TITLE */}
            <h1 className="text-white font-bold leading-[1.05] text-[34px] md:text-[44px] lg:text-[52px] mb-4 max-w-[850px]">

              {job.title}

            </h1>

            {/* DETAILS */}
            <div className="flex flex-wrap gap-5 text-gray-300 text-[14px]">

              <p>{job.company}</p>

              <p>{job.location}</p>

              <p>{job.salary}</p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-10 px-6 lg:px-12">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px] gap-6">

          {/* LEFT */}
          <div className="space-y-5">

            <InfoCard title="Job Overview">

              <p className="text-gray-300 leading-7 text-[15px]">

                {job.description}

              </p>

            </InfoCard>

            <InfoList
              title="Responsibilities"
              items={job.responsibilities}
            />

            <InfoList
              title="Requirements"
              items={job.requirements}
            />

            <InfoList
              title="Benefits"
              items={job.benefits}
            />

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-6 sticky top-28">

              <h3 className="text-white text-[22px] font-bold mb-5">

                Job Summary

              </h3>

              <div className="space-y-4 mb-7">

                <SummaryItem
                  label="Industry"
                  value={job.industry}
                />

                <SummaryItem
                  label="Specialisation"
                  value={job.specialisation}
                />

                <SummaryItem
                  label="Location"
                  value={job.location}
                />

                <SummaryItem
                  label="Employment Type"
                  value={job.type}
                />

                <SummaryItem
                  label="Compensation"
                  value={job.salary}
                />

                <SummaryItem
                  label="Recruiter"
                  value="RUDRON Executive Search"
                />

                <SummaryItem
                  label="Posted"
                  value="Recently Posted"
                />

              </div>

              {/* BUTTON */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold py-3 rounded-xl transition-all duration-300"
              >

                Apply Now

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* RELATED JOBS */}
      <section className="pb-10 px-6 lg:px-12">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-7">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-xs mb-3">

              Similar Opportunities

            </p>

            <h2 className="text-white text-[28px] md:text-[34px] font-bold">

              Related Jobs

            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {relatedJobs.map((item) => (

              <div
                key={item.id}
                className="bg-[#0D1726] border border-white/5 hover:border-[#C89B3C]/30 rounded-[24px] p-5 transition-all duration-300"
              >

                {/* BADGES */}
                <div className="flex flex-wrap gap-2 mb-4">

                  <div className="bg-[#C89B3C] text-black text-[10px] font-semibold uppercase tracking-[2px] px-3 py-2 rounded-full">

                    {item.specialisation}

                  </div>

                  <div className="bg-white/10 text-white text-[10px] font-semibold uppercase tracking-[2px] px-3 py-2 rounded-full">

                    {item.type}

                  </div>

                </div>

                {/* TITLE */}
                <h3 className="text-white text-[22px] font-bold leading-tight mb-3">

                  {item.title}

                </h3>

                {/* COMPANY */}
                <p className="text-[#C89B3C] text-sm mb-4">

                  {item.company}

                </p>

                {/* DETAILS */}
                <div className="space-y-2 text-gray-400 text-sm mb-5">

                  <p>{item.location}</p>

                  <p>{item.salary}</p>

                </div>

                {/* BUTTON */}
                <Link
                  href={`/jobs/${item.slug}`}
                  className="inline-flex items-center gap-3 text-white text-sm font-semibold"
                >

                  View Position

                  <span className="text-[#C89B3C] text-lg">

                    →

                  </span>

                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={job.title}
      />

      <HomeCTA />

      <Footer />

    </main>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  return (

    <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-6">

      <h2 className="text-white text-[24px] font-bold mb-5">

        {title}

      </h2>

      {children}

    </div>
  );
}

function InfoList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {

  return (

    <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-6">

      <h2 className="text-white text-[24px] font-bold mb-5">

        {title}

      </h2>

      <ul className="space-y-3">

        {items.map((item, index) => (

          <li
            key={index}
            className="flex items-start gap-3 text-gray-300 text-[15px] leading-7"
          >

            <span className="text-[#C89B3C] text-lg">

              •

            </span>

            {item}

          </li>

        ))}

      </ul>

    </div>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (

    <div>

      <p className="text-gray-500 text-xs uppercase tracking-[2px] mb-1">

        {label}

      </p>

      <p className="text-white text-[15px]">

        {value}

      </p>

    </div>
  );
}