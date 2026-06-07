export default function ValueSection() {

  const items = [
  {
    number: "01",
    title: "Industry Specialists",
    description:
      "Dedicated recruiters focused exclusively on construction, engineering, MEP and mission critical markets.",
  },
  {
    number: "02",
    title: "Executive Search",
    description:
      "Supporting confidential leadership and executive hiring across high-growth construction sectors.",
  },
  {
    number: "03",
    title: "Quality Over Volume",
    description:
      "We prioritize long-term success and cultural alignment over transactional placements.",
  },
  {
    number: "04",
    title: "Partnership Approach",
    description:
      "Building trusted relationships with clients and candidates through transparency and consistency.",
  },
  {
    number: "05",
    title: "Growth Focused",
    description:
      "Helping businesses secure talent capable of supporting long-term project and organizational growth.",
  },
];

  return (
    <section className="relative bg-[#F7F7F7] py-8 px-6 lg:px-20">

      {/* TOP */}
      <div className="text-center mb-10 lg:mb-12">

        <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-4">
          Our Approach
        </p>

        <h2 className="text-[#07111F] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-[1.05] mb-4">
          Recruitment Solutions That Create Value
        </h2>

        <p className="text-gray-600 text-[15px] sm:text-[17px] leading-5 sm:leading-6 max-w-3xl mx-auto">

  A recruitment strategy built around market
  expertise, long-term partnerships and
  exceptional talent delivery.

</p>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

  {items.map((item) => (

    <div
      key={item.number}
      className="
      group
      bg-white
      border
      border-black/5
      rounded-[28px]
      p-6
      hover:-translate-y-3
      hover:border-[#C89B3C]/30
      transition-all
      duration-500
      relative
      overflow-hidden
      "
    >

      <div className="absolute right-4 top-0 text-[90px] font-bold text-black/[0.04] leading-none">

        {item.number}

      </div>

      <p className="text-[#C89B3C] text-sm font-bold tracking-[2px] uppercase mb-4">

        {item.number}

      </p>

      <h3 className="text-[#07111F] text-xl font-bold mb-4 leading-tight">

        {item.title}

      </h3>

      <p className="text-gray-600 text-[15px] leading-7">

        {item.description}

      </p>

    </div>

  ))}

</div>

    </section>
  );
}