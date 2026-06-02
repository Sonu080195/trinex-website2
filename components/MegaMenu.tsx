"use client";

import Image from "next/image";

const industries = [
  {
    title: "Commercial",
    image: "/Commercial.webp",
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
    image: "/Industrial.webp",
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
    image: "/Residential.webp",
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
    image: "/Civil.webp",
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
    <div className="absolute left-0 top-full w-full bg-[#07111F]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.title} className="group">
              <div className="relative h-[220px] rounded-2xl overflow-hidden mb-5 border border-red-500">
  <img
    src={industry.image}
    alt={industry.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute bottom-4 left-4 z-10">
    <h3 className="text-white text-2xl font-bold">
      {industry.title}
    </h3>
  </div>
</div>

              <div className="space-y-2">
                {industry.items.map((item) => (
                  <p
                    key={item}
                    className="text-gray-300 hover:text-[#C89B3C] transition-colors cursor-pointer"
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