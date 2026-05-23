import {
  Briefcase,
  Search,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";

export default function ValueSection() {

  const items = [
    {
      icon: Users,
       title: "Specialist Recruiters",
      description:
        "Industry-experienced consultants who understand your business and talent needs.",
    },
    {
      icon: Search,
      title: "Tailored Search",
      description:
        "A customised approach to identify the right talent for your projects and culture.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Focused",
      description:
        "We focus on long-term fit and value over volume and speed.",
    },
    {
      icon: Handshake,
      title: "Client Partnership",
      description:
        "We build strong partnerships based on trust, transparency and results.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Impact",
      description:
        "Our goal is to help you build high-performing teams that drive success.",
    },
  ];

  return (
    <section className="bg-[#07111F] py-14 px-6 lg:px-20">

      {/* TOP */}
      <div className="text-center mb-20">

        <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm mb-5">
          Our Approach
        </p>

        <h2 className="text-white text-5xl lg:text-6xl font-bold mb-6">
          Recruitment Solutions That Create Value
        </h2>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {items.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="text-center"
            >

              {/* ICON */}
              <div className="flex justify-center mb-6">

                <div className="w-20 h-20 rounded-full border border-[#C89B3C]/30 flex items-center justify-center">

                  <Icon
                    size={34}
                    className="text-[#C89B3C]"
                  />

                </div>

              </div>

              {/* TITLE */}
              <h3 className="text-white text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-8 text-lg">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}