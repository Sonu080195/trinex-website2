"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import ApplyModal from "@/components/ApplyModal";

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
}

export default function JobDetailsClient({
  job,
}: {
  job: JobType;
}) {

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[46vh] flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.72) 45%, rgba(7,17,31,0.25) 80%), url('/jobs/jobs-hero.png')",
          }}
        />

        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24">

            <div className="flex flex-wrap gap-3 mb-6">

              <div className="bg-[#C89B3C] text-black text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

                {job.specialisation}

              </div>

              <div className="bg-white/10 text-white text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full">

                {job.type}

              </div>

            </div>

            <h1 className="text-white font-bold leading-[1.05] text-[34px] md:text-[46px] lg:text-[54px] mb-4 max-w-[900px]">

              {job.title}

            </h1>

            <div className="flex flex-wrap gap-6 text-gray-300 text-[16px]">

              <p>{job.company}</p>

              <p>{job.location}</p>

              <p>{job.salary}</p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-10 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_340px] gap-8">

          {/* LEFT */}
          <div className="space-y-6">

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

              <h3 className="text-white text-[22px] font-bold mb-6">

                Job Summary

              </h3>

              <div className="space-y-4 mb-8">

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
  value="2 Days Ago"
/>

              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#C89B3C] hover:bg-[#d6ab52] text-black font-semibold py-4 rounded-xl transition-all duration-300"
              >

                Apply Now

              </button>

            </div>

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

    <div className="bg-[#0D1726] border border-white/5 rounded-[28px] p-6">

      <h2 className="text-white text-[32px] font-bold mb-6">

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

    <div className="bg-[#0D1726] border border-white/5 rounded-[28px] p-6">

      <h2 className="text-white text-[24px] font-bold mb-6">

        {title}

      </h2>

      <ul className="space-y-4">

        {items.map((item, index) => (

          <li
            key={index}
            className="flex items-start gap-4 text-gray-300 leading-7"
          >

            <span className="text-[#C89B3C] text-xl">
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

      <p className="text-gray-400 text-sm mb-1">
        {label}
      </p>

      <p className="text-white">
        {value}
      </p>

    </div>
  );
}