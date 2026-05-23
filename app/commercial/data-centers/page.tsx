import SubpageCTA from "@/components/SubpageCTA";

export default function DataCentersPage() {

  const roles = [
    "Project Managers",
    "Superintendents",
    "Estimators",
    "MEP Professionals",
    "Project Engineers",
    "Schedulers",
    "Commissioning Managers",
    "BIM Engineers",
    "Project Executives",
    "Directors",
    "Vice Presidents",
  ];

  return (

    <main className="bg-[#07111F] text-white overflow-hidden">

      {/* HERO SECTION */}
<section className="relative h-screen w-full overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(14,15,16,0.92) 16%, rgba(6, 14, 26, 0.7) 48%, rgba(7,17,31,0.10) 70%), url('/subsector-pages/datacenter-hero.png')",
    }}
  />

  {/* CONTENT */}
  <div className="relative z-10 h-full flex items-center">

    <div className="max-w-7xl mx-auto w-full px-8 lg:px-18">

      <div className="max-w-[760px] pt-28">

        {/* LABEL */}
        <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">
          Commercial Construction
        </p>

        {/* HEADING */}
        <h1 className="text-white font-bold leading-[1.05] text-[52px] lg:text-[64px] mb-8">

          Data Center
          <br />

          Construction
          <br />

          <span className="text-[#C89B3C]">
            Recruitment
          </span>

        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-[18px] leading-10 max-w-[730px]">

          Delivering elite construction talent for hyperscale,
          colocation, mission critical, and cloud infrastructure
          projects across North America.

        </p>

      </div>

    </div>

  </div>

</section>

      {/* OVERVIEW */}
      <section className="py-20 px-8">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
              Market Expertise
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Supporting The Growth Of Mission Critical Infrastructure
            </h2>

            <p className="text-gray-400 text-xl leading-10 mb-8">
              TRINEX partners with leading contractors, developers,
              and mission critical firms to deliver high-performing
              construction professionals across complex data center builds.
            </p>

            <p className="text-gray-400 text-xl leading-10">
              From greenfield hyperscale campuses to advanced
              colocation facilities, we understand the speed,
              precision, and technical expertise required to
              successfully deliver these projects.
            </p>

          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-8">

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                Mission
              </h3>

              <p className="text-gray-400 leading-8">
                Critical hiring expertise tailored for fast-track
                infrastructure projects.
              </p>

            </div>

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                MEP
              </h3>

              <p className="text-gray-400 leading-8">
                Specialist recruitment across electrical,
                mechanical, and commissioning disciplines.
              </p>

            </div>

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                Hyper
              </h3>

              <p className="text-gray-400 leading-8">
                Supporting hyperscale growth across major
                North American markets.
              </p>

            </div>

            <div className="bg-[#0E1726] rounded-3xl p-10 border border-white/10">

              <h3 className="text-[#C89B3C] text-5xl font-bold mb-5">
                Elite
              </h3>

              <p className="text-gray-400 leading-8">
                Connecting contractors with top-tier
                leadership and project talent.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ROLES SECTION */}
      <section className="py-20 px-8 bg-[#0B1422]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
              Key Positions
            </p>

            <h2 className="text-5xl font-bold">
              Roles We Recruit
            </h2>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {roles.map((role, index) => (

              <div
                key={index}
                className="bg-[#07111F] border border-white/10 rounded-3xl p-8 hover:border-[#C89B3C] transition"
              >

                <h3 className="text-2xl font-semibold leading-snug">
                  {role}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      <SubpageCTA />

    </main>

  );
}