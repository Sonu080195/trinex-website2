import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="flex items-center justify-between py-6">

          {/* LOGO */}
          <Link href="/">

            <img
              src="/images/TRINEX Logo.png"
              alt="TRINEX Logo"
              className="h-28 w-auto cursor-pointer"
            />

          </Link>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">

            <Link href="/">Home</Link>

            <a href="#">About Us</a>

            <a href="#">Industries</a>

            <a href="#">Employers</a>

            <a href="#">Candidates</a>

            <a href="#">Insights</a>

            <a href="#">Contact Us</a>

          </nav>

          {/* BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">

            <button className="border border-[#C89B3C] text-white px-7 py-3 rounded-lg hover:bg-[#C89B3C] hover:text-black transition">
              Find Jobs
            </button>

            <button className="bg-[#C89B3C] text-black px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Hire Talent
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}