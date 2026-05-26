"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function ContactPage() {

  const [selectedCountry, setSelectedCountry] = useState("United States");

  const statesByCountry: Record<string, string[]> = {
    "United States": [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Maryland",
    "Missouri",
    "Nevada",
    "New Jersey",
    "New York",
    "North Carolina",
    "Ohio",
    "Oregon",
    "Pennsylvania",
    "South Carolina",
    "Texas",
    "Virginia",
    "Washington",
    ],

    India: [
      "Delhi",
      "Gujarat",
      "Karnataka",
      "Maharashtra",
      "Punjab",
      "Tamil Nadu",
      "Telangana",
    ],

    Canada: [
      "Alberta",
      "British Columbia",
      "Ontario",
      "Quebec",
    ],

    "United Arab Emirates": [
      "Abu Dhabi",
      "Dubai",
      "Sharjah",
    ],
  };

  const countryInfo: Record<
    string,
    {
      phone: string;
      hours: string;
      email: string;
    }
  > = {

    "United States": {
      phone: "+1 (239) 309 3969",
      hours: "Mon - Fri | 8AM - 6PM",
      email: "usa@rudron.com",
    },

    India: {
      phone: "+91 98765 43210",
      hours: "Mon - Sat | 9AM - 7PM",
      email: "india@rudron.com",
    },

    Canada: {
      phone: "+1 (647) 555 0198",
      hours: "Mon - Fri | 8AM - 5PM",
      email: "canada@rudron.com",
    },

    "United Arab Emirates": {
      phone: "+971 50 123 4567",
      hours: "Mon - Fri | 9AM - 6PM",
      email: "uae@rudron.com",
    },
  };

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.96) 18%, rgba(7,17,31,0.78) 42%, rgba(7,17,31,0.18) 75%), url('/contact/contact-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 lg:pt-16">

            <div className="max-w-[700px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">

                Contact RUDRON

              </p>

              <h1 className="text-white font-bold leading-[1.05] text-[42px] md:text-[54px] lg:text-[60px] mb-6">

                Let’s Build
                <br />

                What’s Next
                <br />

                Together

              </h1>

              <p className="text-gray-300 text-[17px] leading-8 max-w-[680px]">

                Whether you're hiring exceptional talent or exploring
                your next career opportunity, our team is ready to help.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMBINED SECTION */}
      <section className="bg-[#F7F7F7] py-14 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-6 items-start">

            {/* LEFT PANEL */}
            <div className="bg-white rounded-[28px] p-6 lg:p-7 border border-black/5">

              {/* TITLE */}
              <div className="mb-8">

                <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-3">

                  Contact Information

                </p>

                <h2 className="text-[#07111F] text-3xl lg:text-[42px] font-bold leading-tight">

                  Connect With
                  Our Team

                </h2>

              </div>

              {/* COUNTRY */}
              <div className="mb-6">

                <label className="block text-[#07111F] text-sm font-medium mb-2">

                  Select Country

                </label>

                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full border border-black/10 rounded-xl px-5 py-3.5 text-[#07111F] outline-none text-[15px]"
                >

                  {Object.keys(countryInfo).map((country) => (

                    <option key={country} value={country}>
                      {country}
                    </option>

                  ))}

                </select>

              </div>

              {/* INFO CARDS */}
              <div className="space-y-4">

                {/* PHONE */}
                <div className="border border-black/5 rounded-[20px] p-5">

                  <h3 className="text-[#07111F] font-semibold text-[17px] mb-2">
                    Call Us
                  </h3>

                  <p className="text-gray-600 text-[15px]">
                    {countryInfo[selectedCountry].phone}
                  </p>

                </div>

                {/* EMAIL */}
                <div className="border border-black/5 rounded-[20px] p-5">

                  <h3 className="text-[#07111F] font-semibold text-[17px] mb-2">
                    Email
                  </h3>

                  <p className="text-gray-600 text-[15px]">
                    {countryInfo[selectedCountry].email}
                  </p>

                </div>

                {/* HOURS */}
                <div className="border border-black/5 rounded-[20px] p-5">

                  <h3 className="text-[#07111F] font-semibold text-[17px] mb-2">
                    Business Hours
                  </h3>

                  <p className="text-gray-600 text-[15px]">
                    {countryInfo[selectedCountry].hours}
                  </p>

                </div>

              </div>

              {/* GLOBAL */}
              <div className="mt-8 pt-6 border-t border-black/10">

                <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs mb-3">

                  Contact Us

                </p>

                <h1 className="text-gray-600 leading-7 text-[15px] mb-6">

                  Need to grow your team, explore new career opportunities, or get expert recruiting insight? RUDRON Global Talent Solution delivers a tailored approach focused on connecting exceptional talent with leading companies.

                  </h1>

                  <p className="text-gray-600 leading-7 text-[15px]">

                Submit the form, and our team will reach out shortly to assist you.

                </p>

              </div>

            </div>

            {/* RIGHT PANEL */}
            <div className="bg-[#0D1726] rounded-[28px] border border-white/10 p-6 lg:p-7">

              {/* TOP */}
              <div className="mb-8">

                <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-3">

                  Send An Inquiry

                </p>

                <h2 className="text-white text-3xl lg:text-[42px] font-bold leading-tight">

                  Let’s Start
                  The Conversation

                </h2>

              </div>

              {/* FORM */}
              <form>

                {/* ROW 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-[#07111F] border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none text-[15px]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#07111F] border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none text-[15px]"
                  />

                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="bg-[#07111F] border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none text-[15px]"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number (Optional)"
                    className="bg-[#07111F] border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none text-[15px]"
                  />

                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="bg-[#07111F] border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none text-[15px]"
                  >

                    {Object.keys(statesByCountry).map((country) => (

                      <option key={country} value={country}>
                        {country}
                      </option>

                    ))}

                  </select>

                  <select
                    className="bg-[#07111F] border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none text-[15px]"
                  >

                    <option>Select State</option>

                    {statesByCountry[selectedCountry].map((state) => (

                      <option key={state} value={state}>
                        {state}
                      </option>

                    ))}

                  </select>

                </div>

                {/* SERVICE */}
                <div className="mb-4">

                  <select
                    className="w-full bg-[#07111F] border border-white/10 rounded-xl px-5 py-3.5 text-white outline-none text-[15px]"
                  >

                    <option>Service Needed</option>
                    <option>Hire Talent</option>
                    <option>Find Jobs</option>
                    <option>Executive Search</option>
                    <option>MEP Recruitment</option>

                  </select>

                </div>

                {/* MESSAGE */}
                <div className="mb-0">

                  <textarea
                    rows={4}
                    placeholder="Tell us about your hiring needs or career goals..."
                    className="w-full bg-[#07111F] border border-white/10 rounded-xl px-5 py-4 text-white outline-none resize-none text-[15px]"
                  />

                </div>

                {/* FILE */}
                <div className="mb-2">

                  <input
                    type="file"
                    className="text-gray-400 text-sm
                    file:mr-4
                    file:px-4
                    file:py-2
                    file:rounded-lg
                    file:border-0
                    file:bg-[#C89B3C]
                    file:text-black
                    file:font-medium"
                  />

                  <p className="text-gray-500 text-sm mt-2">
                    Max. file size: 10 MB.
                  </p>

                </div>

                {/* CONSENT */}
                <div className="flex items-start gap-3 mb-6 mt-4">

                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 accent-[#C89B3C]"
                  />

                  <label
                    htmlFor="consent"
                    className="text-gray-400 leading-7 text-[14px]"
                  >

                    I consent to RUDRON Global Talent Solutions storing
                    and sharing my information for recruitment-related
                    opportunities.

                  </label>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="bg-[#C89B3C] text-black px-69 py-2.5 rounded-xl text-[15px] font-semibold hover:opacity-90 transition-all duration-300"
                >

                  Submit Form

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <HomeCTA />

      {/* FOOTER */}
      <Footer />

    </main>

  );
}