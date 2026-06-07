export default function HomeMarquee() {
  const items = [
    "COMMERCIAL CONSTRUCTION",
    "DATA CENTERS",
    "HEALTHCARE",
    "Institutional/K-12",
    "INFRASTRUCTURE",
    "MISSION CRITICAL",
    "Residential",
    "AEC Hiring",
    "MEP Hiring",
    "EXECUTIVE SEARCH",
    "Full-Time Recruitment",
  ];

  return (
    <section className="bg-[#07111F] border-y border-white/10 overflow-hidden py-4">

      <div className="marquee-track">

        {[...items, ...items].map((item, index) => (

          <div
            key={index}
            className="mx-10 text-[#C89B3C] font-semibold tracking-[2px] whitespace-nowrap"
          >

            {item}

          </div>

        ))}

      </div>

    </section>
  );
}