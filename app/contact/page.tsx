"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {

  const [selectedCountry, setSelectedCountry] = useState("United States");

  const statesByCountry: Record<string, string[]> = {
    "United States": [
      "Alabama",
      "Alaska",
      "Arizona",
      "California",
      "Colorado",
      "Florida",
      "Georgia",
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
      email: "usa@rudrongts.com",
    },

    India: {
      phone: "+91 99671 44597",
      hours: "Mon - Sat | 9AM - 7PM",
      email: "india@rudrongts.com",
    },

    Canada: {
      phone: "+1 (647) 555 0198",
      hours: "Mon - Fri | 8AM - 5PM",
      email: "canada@rudrongts.com",
    },

    "United Arab Emirates": {
      phone: "+971 56 957 5207",
      hours: "Mon - Fri | 9AM - 6PM",
      email: "uae@rudrongts.com",
    },
  };

  const globalOffices = [
  {
    country: "United States",
    focus: "Executive Search & Construction Recruitment",
  },
  {
    country: "Canada",
    focus: "Commercial & Infrastructure Markets",
  },
  {
    country: "United Arab Emirates",
    focus: "MEP & Mission Critical Recruitment",
  },
  {
    country: "India",
    focus: "Global Talent Delivery & Operations",
  },
  
];

const contactMarquee = [
  "EXECUTIVE SEARCH",
  "PROJECT STAFFING",
  "DATA CENTERS",
  "HEALTHCARE",
  "MEP",
  "COMMERCIAL",
  "INFRASTRUCTURE",
];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7,17,31,0.97) 18%, rgba(7,17,31,0.80) 42%, rgba(7,17,31,0.22) 75%), url('/contact/contact-hero.png')",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-28 sm:pt-30 lg:pt-20">

            <div className="max-w-[640px]">

              <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-4">

                Contact RUDRON

              </p>

              <h1 className="text-white font-bold leading-[1.03] text-[34px] sm:text-[48px] lg:text-[64px] mb-5">

                Let’s Build
                <br />

                What’s Next
                <br />

                <span className="text-[#C89B3C]">
                  {" "} Together
                </span>

              </h1>

              <p className="text-gray-300 text-[15px] sm:text-[17px] leading-7 sm:leading-8 max-w-[620px]">

                Whether you're hiring exceptional talent or exploring your next career opportunity, our team is ready to help.

              </p>

              <div className="flex flex-wrap gap-3 mt-8">

  {[
    "Executive Search",
    "Project Staffing",
    "Data Centers",
    "MEP Recruitment",
  ].map((item) => (

    <span
      key={item}
      className="
      px-4
      py-2
      rounded-full
      border
      border-white/15
      bg-white/5
      backdrop-blur-sm
      text-sm
      text-white
      "
    >

      {item}

    </span>

  ))}

</div>

            </div>

          </div>

        </div>

      </section>

      {/* GLOBAL RECRUITMENT NETWORK */}

<section className="bg-[#F7F7F7] py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">

        Global Recruitment Network

      </p>

      <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05]">

        Supporting Clients
        Across International Markets

      </h2>

      <p className="text-gray-600 text-[15px] sm:text-[17px] leading-7 max-w-3xl mx-auto mt-6">

        Through our international recruitment network,
        we support employers and professionals across
        construction, engineering, infrastructure,
        mission critical and MEP markets.

      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      {globalOffices.map((office, index) => (

        <div
          key={office.country}
          className="
          floating-card
          industry-glow
          bg-white
          rounded-[28px]
          border
          border-black/5
          p-6
          hover:-translate-y-2
          transition-all
          duration-500
          relative
          overflow-hidden
          "
        >

          <div className="absolute right-4 top-0 text-[90px] font-bold text-black/[0.04]">

            0{index + 1}

          </div>

          <h3 className="text-[#07111F] text-lg lg:text-xl font-bold mb-4">

            {office.country}

          </h3>

          <p className="text-gray-600 leading-7">

            {office.focus}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* CONTACT MARQUEE */}

<section className="bg-[#07111F] py-4 lg:py-6 overflow-hidden border-y border-white/10">

  <div className="roles-marquee flex whitespace-nowrap">

    {[...contactMarquee, ...contactMarquee].map(
      (item, index) => (

        <div
          key={index}
          className="flex items-center"
        >

          <span className="text-white text-[18px] sm:text-[24px] lg:text-[34px] font-bold mx-5">

            {item}

          </span>

          <span className="text-[#C89B3C] text-2xl">

            ◆

          </span>

        </div>

      )
    )}

  </div>

</section>

      {/* CONTACT SECTION */}
      <section className="bg-[#F7F7F7] py-10 sm:py-14 lg:py-16 px-5 sm:px-6 lg:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5 lg:gap-6 items-start">

            {/* LEFT */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-black/5 p-5 sm:p-6 lg:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

              <div className="mb-7">


                <div className="mb-10">
                  
                  <p className="uppercase tracking-[5px] text-[#C89B3C] text-sm mb-4">
                    
                    Connect With RUDRON
                    
                </p>
                    
            <h2 className="text-[#07111F] text-[18px] sm:text-[24px] lg:text-[38px] font-bold leading-[1.05] mb-4">
              
              Strategic Recruitment
              Partnerships Built
              Around Results
              
              </h2>
              
            <p className="text-gray-600 text-[13px] sm:text-[15px] leading-5 sm:leading-6">
              
              Whether you're seeking exceptional talent,
              exploring career opportunities, or discussing
              workforce strategy, our team is ready to support
              your objectives across the built environment.
              
              </p>

</div>


              </div>

              {/* COUNTRY */}
              <div className="mb-5">

                <label className="block text-[#07111F] text-[14px] font-medium mb-2">

                  Select Country

                </label>

                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-[#07111F] outline-none text-[14px] sm:text-[15px]"
                >

                  {Object.keys(countryInfo).map((country) => (

                    <option key={country} value={country}>
                      {country}
                    </option>

                  ))}

                </select>

              </div>

              {/* INFO CARDS */}
              <div className="space-y-3">

                <div className="border border-black/5 rounded-[18px] p-4 sm:p-5">

                  <h3 className="text-[#07111F] font-semibold text-[16px] mb-2">

                    Call Us

                  </h3>

                  <p className="text-gray-600 text-[14px] sm:text-[15px]">

                    {countryInfo[selectedCountry].phone}

                  </p>

                </div>

                <div className="border border-black/5 rounded-[18px] p-4 sm:p-5">

                  <h3 className="text-[#07111F] font-semibold text-[16px] mb-2">

                    Email

                  </h3>

                  <p className="text-gray-600 text-[14px] sm:text-[15px] break-all">

                    {countryInfo[selectedCountry].email}

                  </p>

                </div>

                <div className="border border-black/5 rounded-[18px] p-4 sm:p-5">

                  <h3 className="text-[#07111F] font-semibold text-[16px] mb-2">

                    Business Hours

                  </h3>

                  <p className="text-gray-600 text-[14px] sm:text-[15px]">

                    {countryInfo[selectedCountry].hours}

                  </p>

                </div>

              </div>

              {/* INFO */}
              <div className="mt-7 pt-6 border-t border-black/10">

                <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-xs mb-3">

                  Global Recruitment Support

                </p>

                <p className="text-gray-600 leading-7 text-[14px] sm:text-[15px] mb-4">

                  RUDRON Global Talent Solutions partners with leading construction and infrastructure firms across commercial, industrial, mission critical, and residential sectors.

                </p>

                <p className="text-gray-600 leading-7 text-[14px] sm:text-[15px]">

                  Submit the form and our recruitment team will connect with you shortly.

                </p>

              </div>

            </div>

            {/* RIGHT */}
            
            <div className="bg-[#0D1726] rounded-[24px] sm:rounded-[28px] border border-black/5 p-5 sm:p-6 lg:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

              <div className="mb-8">

  <p className="text-[#C89B3C] uppercase tracking-[4px] text-[11px] sm:text-sm mb-3">

    Start A Conversation

  </p>

  <h2 className="text-[#F7F7F7] text-[18px] sm:text-[24px] lg:text-[38px] font-bold leading-[1.05] mb-4">

    Tell Us About
    Your Requirements

  </h2>

  <p className="text-gray-400 text-[13px] sm:text-[15px] leading-7 mb-6">

    Whether you're hiring talent, exploring new
    opportunities, or seeking market intelligence,
    our specialists are ready to help.

  </p>

  
</div>

              <form
              action="https://formsubmit.co/admin@rudrongts.com"
              method="POST"
              encType="multipart/form-data"
            >

              <input
              type="hidden"
              name="_subject"
              value="New Website Contact Inquiry"
            />
            
            <input
            type="hidden"
            name="_captcha"
            value="false"
          />

                {/* ROW 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                  <input
                    type="text"
                    name="Full Name"
                    placeholder="Full Name"
                    required
                    className="bg-[#07111F] border border-white/10 rounded-xl px-4 py-3 text-white outline-none text-[14px] sm:text-[15px]"
                  />

                  <input
                    type="email"
                    name="Email Address"
                    placeholder="Email Address"
                    required
                    className="bg-[#07111F] border border-white/10 rounded-xl px-4 py-3 text-white outline-none text-[14px] sm:text-[15px]"
                  />

                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="bg-[#07111F] border border-white/10 rounded-xl px-4 py-3 text-white outline-none text-[14px] sm:text-[15px]"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    className="bg-[#07111F] border border-white/10 rounded-xl px-4 py-3 text-white outline-none text-[14px] sm:text-[15px]"
                  />

                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="bg-[#07111F] border border-white/10 rounded-xl px-4 py-3 text-white outline-none text-[14px] sm:text-[15px]"
                  >

                    {Object.keys(statesByCountry).map((country) => (

                      <option key={country} value={country}>
                        {country}
                      </option>

                    ))}

                  </select>

                  <select
                    className="bg-[#07111F] border border-white/10 rounded-xl px-4 py-3 text-white outline-none text-[14px] sm:text-[15px]"
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
                    className="w-full bg-[#07111F] border border-white/10 rounded-xl px-4 py-3 text-white outline-none text-[14px] sm:text-[15px]"
                  >

                    <option>Service Needed</option>
                    <option>Hire Talent</option>
                    <option>Find Jobs</option>
                    <option>Executive Search</option>

                  </select>

                </div>

                {/* MESSAGE */}
                <div className="mb-4">

                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Tell us about your hiring needs or career goals..."
                    className="w-full bg-[#07111F] border border-white/10 rounded-xl px-4 py-4 text-white outline-none resize-none text-[14px] sm:text-[15px]"
                  />

                </div>

                {/* FILE */}
                <div className="mb-3">

                  <input
                    type="file"
                    name="attachment"
                    className="w-full text-gray-400 text-[13px] sm:text-sm
                    file:mr-3
                    file:px-4
                    file:py-2
                    file:rounded-lg
                    file:border-0
                    file:bg-[#C89B3C]
                    file:text-black
                    file:font-medium"
                  />

                  <p className="text-gray-500 text-[12px] sm:text-sm mt-2">

                    Max. file size: 10 MB.

                  </p>

                </div>

                {/* CONSENT */}
                <div className="flex items-start gap-3 mb-6 mt-4">

                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 accent-[#C89B3C]"
                  />

                  <label
                    htmlFor="consent"
                    className="text-gray-400 leading-6 text-[13px] sm:text-[14px]"
                  >

                    I consent to RUDRON Global Talent Solutions storing and sharing my information for recruitment-related opportunities.

                  </label>

                </div>

                {/* BUTTON */}
                <div className="grid grid-cols-2 gap-3 mb-6">

  <div className="bg-[#07111F] rounded-[18px] p-3">

    <p className="text-[#C89B3C] font-semibold mb-2">

      Fast Response

    </p>

    <p className="text-gray-400 text-xs leading-4">

      Typically within 1 business day

    </p>

  </div>

  <div className="bg-[#07111F] rounded-[18px] p-3">

    <p className="text-[#C89B3C] font-semibold mb-2">

      Confidential

    </p>

    <p className="text-gray-400 text-xs leading-4">

      All inquiries remain private

    </p>

  </div>

</div>
                
                <button
                  type="submit"
                  className="w-full bg-[#07111F] text-white font-semibold py-4 rounded-full hover:bg-[#C89B3C] hover:text-[#07111F] transition-all duration-300"
                >

                  Send Inquiry →

                </button>

                

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </main>

  );
}