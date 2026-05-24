import Link from "next/link";

export default function Footer() {

  return (

    <footer className="bg-[#07111F] px-6 lg:px-18 pt-20 pb-10">

      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 border-b border-white/10 pb-16">

          {/* BRAND */}
          <div className="lg:col-span-1">

            {/* LOGO */}
            <img
              src="/images/TRINEX Logo.png"
              alt="TRINEX"
              className="w-[160px] mb-6"
            />

            {/* TEXT */}
            <p className="text-gray-400 leading-8 text-[15px] mb-8">

              TRINEX Global Talent Solutions is a specialist recruitment firm
              focused on the AEC & MEP industries. We connect exceptional talent
              with leading companies to build the infrastructure of tomorrow.

            </p>

          </div>

          {/* EMPLOYERS */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              For Employers
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Hire Talent
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Our Process
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Industries
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Case Studies
              </Link>

            </div>

          </div>

          {/* CANDIDATES */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              For Candidates
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Find Jobs
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Submit Resume
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Career Resources
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Interview Tips
              </Link>

            </div>

          </div>

          {/* SPECIALISATIONS */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Specialisations
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#" className="text-gray-400 hover:text-white transition">
                AEC Recruitment
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                MEP Recruitment
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Mission Critical
              </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition">
                Leadership Hiring
              </Link>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h3>

            <div className="flex flex-col gap-5 text-gray-400 text-[15px]">

              <div>
                <p className="text-[#C89B3C] mb-1">USA</p>
                <p>+1 (239) 309 3969</p>
              </div>

              <div>
                <p className="text-[#C89B3C] mb-1">UAE</p>
                <p>+971 56 957 5207</p>
              </div>

              <div>
                <p className="text-[#C89B3C] mb-1">India</p>
                <p>+91 99671 44597</p>
              </div>

              <div>
                <p>info@trinexgts.com</p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

          <p className="text-gray-500 text-sm">
            © 2026 TRINEX Global Talent Solutions. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8 text-sm">

            <Link href="#" className="text-gray-500 hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="#" className="text-gray-500 hover:text-white transition">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );
}