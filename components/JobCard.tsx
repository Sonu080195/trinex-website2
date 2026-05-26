import Link from "next/link";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  industry: string;
  slug: string;
}

export default function JobCard({
  title,
  company,
  location,
  salary,
  type,
  industry,
  slug,
}: JobCardProps) {

  return (

    <Link
      href={`/jobs/${slug}`}
      className="group block"
    >

      <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-6 hover:border-[#C89B3C]/30 transition-all duration-500">

        {/* BADGES */}
        <div className="flex flex-wrap gap-2 mb-5">

          <div className="bg-[#C89B3C] text-black text-[10px] font-semibold uppercase tracking-[2px] px-3 py-2 rounded-full">

            {industry}

          </div>

          <div className="bg-white/5 text-white text-[10px] font-semibold uppercase tracking-[2px] px-3 py-2 rounded-full">

            {type}

          </div>

        </div>

        {/* TITLE */}
        <h3 className="text-white text-[22px] lg:text-[26px] font-bold leading-tight mb-3">

          {title}

        </h3>

        {/* COMPANY */}
        <p className="text-[#C89B3C] text-[16px] mb-4">

          {company}

        </p>

        {/* DETAILS */}
        <div className="flex flex-wrap gap-5 text-gray-400 text-[14px] mb-6">

          <p>{location}</p>

          <p>{salary}</p>

        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">

          <p className="text-white text-[15px] font-medium">
            View Position
          </p>

          <span className="text-[#C89B3C] text-xl transition duration-300 group-hover:translate-x-2">
            →
          </span>

        </div>

      </div>

    </Link>
  );
}