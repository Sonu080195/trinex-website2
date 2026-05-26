"use client";

interface JobsSidebarProps {
  selectedIndustry: string;
  selectedSpecialisation: string;
  selectedCountry: string;
  selectedState: string;
  selectedEmployment: string;

  setSelectedIndustry: (value: string) => void;
  setSelectedSpecialisation: (value: string) => void;
  setSelectedCountry: (value: string) => void;
  setSelectedState: (value: string) => void;
  setSelectedEmployment: (value: string) => void;
}

export default function JobsSidebar({
  selectedIndustry,
  selectedSpecialisation,
  selectedCountry,
  selectedState,
  selectedEmployment,

  setSelectedIndustry,
  setSelectedSpecialisation,
  setSelectedCountry,
  setSelectedState,
  setSelectedEmployment,
}: JobsSidebarProps) {

  const statesByCountry: Record<string, string[]> = {

    "United States": [
      "Texas",
      "Florida",
      "California",
      "New York",
      "Arizona",
      "Nevada",
    ],

    Canada: [
      "Ontario",
      "Alberta",
      "British Columbia",
      "Quebec",
    ],

    UAE: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
    ],

    India: [
      "Maharashtra",
      "Delhi",
      "Karnataka",
      "Tamil Nadu",
      "Gujarat",
    ],
  };

  return (

    <div className="bg-[#0D1726] border border-white/5 rounded-[24px] p-5 sticky top-28">

      <h3 className="text-white text-[24px] font-bold mb-6">

        Filter Jobs

      </h3>

      <div className="space-y-4">

        {/* INDUSTRY */}
        <div>

          <label className="block text-gray-300 text-[13px] mb-2">
            Industry
          </label>

          <select
            value={selectedIndustry}
            onChange={(e) =>
              setSelectedIndustry(e.target.value)
            }
            className="w-full h-[52px] bg-[#07111F] border border-white/10 rounded-xl px-4 text-white text-[14px] outline-none"
          >

            <option value="">All Industries</option>

            <option>Construction</option>
            <option>Architecture</option>
            <option>Engineering</option>
            <option>MEP</option>

          </select>

        </div>

        {/* SPECIALISATION */}
        <div>

          <label className="block text-gray-300 text-[13px] mb-2">
            Specialisation
          </label>

          <select
            value={selectedSpecialisation}
            onChange={(e) =>
              setSelectedSpecialisation(e.target.value)
            }
            className="w-full h-[52px] bg-[#07111F] border border-white/10 rounded-xl px-4 text-white text-[14px] outline-none"
          >

            <option value="">All Sectors</option>

            <option>Commercial</option>
            <option>Industrial</option>
            <option>Residential</option>
            <option>Infrastructure</option>
            <option>Data Centers</option>

          </select>

        </div>

        {/* COUNTRY */}
        <div>

          <label className="block text-gray-300 text-[13px] mb-2">
            Country
          </label>

          <select
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedState("");
            }}
            className="w-full h-[52px] bg-[#07111F] border border-white/10 rounded-xl px-4 text-white text-[14px] outline-none"
          >

            <option value="">All Countries</option>

            {Object.keys(statesByCountry).map((country) => (

              <option
                key={country}
                value={country}
              >

                {country}

              </option>

            ))}

          </select>

        </div>

        {/* STATE */}
        <div>

          <label className="block text-gray-300 text-[13px] mb-2">
            State
          </label>

          <select
            value={selectedState}
            onChange={(e) =>
              setSelectedState(e.target.value)
            }
            className="w-full h-[52px] bg-[#07111F] border border-white/10 rounded-xl px-4 text-white text-[14px] outline-none"
          >

            <option value="">All States</option>

            {selectedCountry &&
              statesByCountry[selectedCountry].map((state) => (

                <option
                  key={state}
                  value={state}
                >

                  {state}

                </option>

              ))}

          </select>

        </div>

        {/* EMPLOYMENT */}
        <div>

          <label className="block text-gray-300 text-[13px] mb-2">
            Employment Type
          </label>

          <select
            value={selectedEmployment}
            onChange={(e) =>
              setSelectedEmployment(e.target.value)
            }
            className="w-full h-[52px] bg-[#07111F] border border-white/10 rounded-xl px-4 text-white text-[14px] outline-none"
          >

            <option value="">All Types</option>

            <option>Full Time</option>
            <option>Contract</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Executive</option>

          </select>

        </div>

      </div>

    </div>
  );
}