"use client";

const industries = [
  {
    title: "Commercial",
    image: "/mega-menu/Commercial.png",
    items: [
      "Educational Construction",
      "Healthcare Construction",
      "Data Centers",
      "Retail",
      "Office Buildings",
    ],
  },

  {
    title: "Industrial",
    image: "/mega-menu/Industrial.png",
    items: [
      "Warehouse",
      "Distribution Centers",
      "Wastewater Treatment",
      "Power Plants",
      "Tilt-Up",
    ],
  },

  {
    title: "Residential",
    image: "/mega-menu/Residential.png",
    items: [
      "Multi-Family",
      "Single-Family",
      "Highrise",
      "Student Housing",
      "Senior Housing",
    ],
  },

  {
    title: "Civil",
    image: "/mega-menu/Civil.png",
    items: [
      "Roadways",
      "Rail & Metro",
      "Bridges",
      "Tunnels",
      "Aviation Infrastructure",
    ],
  },
];

export default function MegaMenu() {
  return (
    <div className="absolute left-0 top-full w-full bg-[#07111F]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">

      <div className="max-w-7xl mx-auto px-10 py-12">

        <div className="grid grid-cols-4 gap-8">

          {industries.map((industry, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >

              {/* IMAGE CARD */}
              <div className="relative h-[180px] rounded-2xl overflow-hidden mb-5">

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${industry.image})`,
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent" />

                {/* TITLE */}
                <div className="absolute bottom-5 left-5 z-10">

                  <h3 className="text-white text-3xl font-bold">
                    {industry.title}
                  </h3>

                </div>

              </div>

              {/* LINKS */}
              <div className="space-y-3 pl-1">

                {industry.items.map((item, i) => (
                  <p
                    key={i}
                    className="text-gray-300 hover:text-[#C89B3C] transition cursor-pointer"
                  >
                    {item}
                  </p>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}