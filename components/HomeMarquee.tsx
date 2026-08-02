import {
  Building2,
  Factory,
  Hospital,
  School,
  HardHat,
  Server,
  Home,
  BriefcaseBusiness,
  Wrench,
  Search,
  Users,
} from "lucide-react";

const items = [
  {
    title: "Commercial Construction",
    icon: Building2,
  },
  {
    title: "Data Centers",
    icon: Server,
  },
  {
    title: "Healthcare",
    icon: Hospital,
  },
  {
    title: "Institutional / K-12",
    icon: School,
  },
  {
    title: "Infrastructure",
    icon: HardHat,
  },
  {
    title: "Mission Critical",
    icon: Factory,
  },
  {
    title: "Residential",
    icon: Home,
  },
  {
    title: "AEC Hiring",
    icon: BriefcaseBusiness,
  },
  {
    title: "MEP Hiring",
    icon: Wrench,
  },
  {
    title: "Executive Search",
    icon: Search,
  },
  {
    title: "Full-Time Recruitment",
    icon: Users,
  },
];

export default function HomeMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#07111F] py-5">
      {/* Left & Right fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#07111F] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#07111F] to-transparent" />

      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />

      <div className="marquee-track group">
        {[...items, ...items].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group/item mx-7 flex items-center gap-3 whitespace-nowrap transition-all duration-300 hover:scale-105"
            >
              <Icon
                size={17}
                className="text-[#C89B3C] transition-transform duration-300 group-hover/item:rotate-6"
                strokeWidth={1.9}
              />

              <span className="text-[13px] font-semibold uppercase tracking-[2.5px] text-white transition-colors duration-300 group-hover/item:text-[#C89B3C]">
                {item.title}
              </span>

              <div className="ml-4 h-1.5 w-1.5 rounded-full bg-[#C89B3C]/70" />
            </div>
          );
        })}
      </div>
    </section>
  );
}