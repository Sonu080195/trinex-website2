import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  DollarSign,
  Users,
  TrendingUp,
  Target,
  Award,
  FileText,
} from "lucide-react";
import HireTalentButton from "@/components/HireTalentButton";

const SITE_URL = "https://www.rudrongts.com";

export const metadata: Metadata = {
  title: "Construction Project Manager Recruitment | RUDRON",
  description:
    "Construction Project Manager recruitment specialists. Hire experienced Project Managers for commercial, industrial, civil, residential, healthcare and data center projects.",
  alternates: {
    canonical: `${SITE_URL}/project-manager-recruitment`,
  },
};

export default function ProjectManagerRecruitmentPage() {
  return (
    <main className="bg-[#07111F] text-white">

      {/* Hero */}

<section className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-[860px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#C89B3C]">
                Construction Project Manager Recruitment
              </p>
              <span className="h-px w-10 bg-[#C89B3C]" />
            </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight lg:text-7xl">
            Construction Project Manager
            <br />
              <span className="text-[#C89B3C]">
                Recruitment Specialists
              </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            RUDRON Global Talent Solutions helps General Contractors,
            Mechanical Contractors, EPC firms and Developers hire experienced
            Construction Project Managers across Commercial, Industrial,
            Healthcare, Data Centers, Civil Infrastructure and Residential
            projects throughout North America.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <HireTalentButton
            ariaLabel="Hire a Project Manager"
            className="rounded-xl bg-[#C89B3C] px-7 py-4 font-semibold text-[#07111F] transition hover:scale-105"
            >
            Hire a Project Manager

            <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
            />
            </HireTalentButton>

            <Link
              href="/jobs"
              className="rounded-xl border border-white/20 px-7 py-4 font-semibold hover:bg-white/10"
            >
              Browse Jobs
            </Link>

          </div>

        </div>

      </section>

      {/* Quick Stats */}

      <section className="bg-[#0d1a2c] py-16">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">

          {[
            {
              icon: Building2,
              title: "Commercial",
              text: "Healthcare, Education, Office, Retail",
            },
            {
              icon: Users,
              title: "Leadership",
              text: "Project Managers & Executives",
            },
            {
              icon: Clock3,
              title: "Fast Hiring",
              text: "Priority recruitment process",
            },
            {
              icon: DollarSign,
              title: "Executive Search",
              text: "Senior Construction Talent",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <Icon className="mb-5 text-[#C89B3C]" size={34} />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>

      </section>

      {/* Overview */}

      <section className="bg-[#F4F4F0] py-24 text-[#07111F]">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold">
            Construction Project Manager Recruiters
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-700">
            Hiring an experienced Construction Project Manager has become one
            of the biggest challenges facing General Contractors,
            Developers and Mechanical Contractors. Today's projects demand
            professionals who can successfully manage budgets,
            subcontractors, schedules, procurement, safety,
            client communication and field execution simultaneously.

            RUDRON specializes in identifying experienced Project Managers
            with proven leadership across Commercial Construction,
            Healthcare, Data Centers, Mission Critical Facilities,
            Industrial Construction, Residential Developments
            and Civil Infrastructure.
          </p>

        </div>

      </section>

      {/* Responsibilities */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold">
            What Does a Construction Project Manager Do?
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {[
              "Manage project budgets",
              "Coordinate subcontractors",
              "Manage client communication",
              "Oversee procurement",
              "Monitor schedules",
              "Lead project teams",
              "Review RFIs",
              "Handle Change Orders",
              "Risk Management",
              "Quality Control",
              "Safety Compliance",
              "Project Closeout",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2
                  className="text-[#C89B3C]"
                  size={24}
                />

                <span>{item}</span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Salary Guide */}

<section className="bg-[#F4F4F0] py-24 text-[#07111F]">

  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-4xl">

      <span className="text-sm font-semibold uppercase tracking-[4px] text-[#C89B3C]">
        Salary Guide
      </span>

      <h2 className="mt-4 text-5xl font-bold">
        Construction Project Manager Salary Guide
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-700">
        Salaries vary based on project complexity, location, contractor size,
        market demand, technical specialization and years of experience.
        Companies competing for experienced Project Managers often need
        competitive compensation packages alongside attractive projects and
        career progression opportunities.
      </p>

    </div>

    <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

      <table className="w-full">

        <thead className="bg-[#07111F] text-white">

          <tr>

            <th className="p-6 text-left">
              Experience
            </th>

            <th className="p-6 text-left">
              Typical Base Salary
            </th>

            <th className="p-6 text-left">
              Typical Project Types
            </th>

          </tr>

        </thead>

        <tbody>

          {[
            [
              "3-5 Years",
              "$90K - $120K",
              "Commercial & Residential",
            ],
            [
              "5-8 Years",
              "$120K - $145K",
              "Healthcare, Education",
            ],
            [
              "8-12 Years",
              "$145K - $175K",
              "Industrial, Data Centers",
            ],
            [
              "12+ Years",
              "$175K - $220K+",
              "Mission Critical & Mega Projects",
            ],
          ].map((row) => (

            <tr
              key={row[0]}
              className="border-t"
            >

              <td className="p-6 font-semibold">
                {row[0]}
              </td>

              <td className="p-6">
                {row[1]}
              </td>

              <td className="p-6">
                {row[2]}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</section>



{/* Why Companies Struggle */}

<section className="py-24">

<div className="mx-auto max-w-7xl px-6">

<h2 className="text-5xl font-bold">

Why Hiring Construction Project Managers Is So Difficult

</h2>

<div className="mt-14 grid gap-8 lg:grid-cols-2">

{[

{

title:"High Demand",

desc:"Experienced Project Managers are in demand across healthcare, commercial, mission critical and infrastructure sectors.",

},

{

title:"Passive Candidates",

desc:"Most top Project Managers are already employed and rarely apply through job boards.",

},

{

title:"Leadership Skills",

desc:"Employers need professionals capable of managing budgets, schedules, owners, subcontractors and field teams simultaneously.",

},

{

title:"Technical Knowledge",

desc:"Successful candidates require expertise in construction methods, contracts, scheduling software, procurement and risk management.",

},

{

title:"Communication",

desc:"Project Managers act as the bridge between owners, architects, engineers and field operations.",

},

{

title:"Retention",

desc:"Replacing an experienced Project Manager can significantly impact project timelines and profitability.",

},

].map((item)=>(

<div

key={item.title}

className="rounded-3xl border border-white/10 bg-white/5 p-8"

>

<h3 className="text-2xl font-bold text-[#C89B3C]">

{item.title}

</h3>

<p className="mt-5 leading-8 text-gray-300">

{item.desc}

</p>

</div>

))}

</div>

</div>

</section>

{/* Recruitment Process */}

<section className="bg-[#F4F4F0] py-24 text-[#07111F]">

<div className="mx-auto max-w-7xl px-6">

<div className="max-w-3xl">

<span className="text-sm font-semibold uppercase tracking-[4px] text-[#C89B3C]">
Recruitment Process
</span>

<h2 className="mt-4 text-5xl font-bold">
Our Construction Project Manager Recruitment Process
</h2>

<p className="mt-6 text-lg leading-8 text-gray-700">
Finding an exceptional Project Manager requires much more than posting a vacancy.
Our recruitment process focuses on technical expertise, project experience,
leadership ability and cultural fit.
</p>

</div>

<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

{[
["01","Requirement Discovery"],
["02","Market Mapping"],
["03","Candidate Assessment"],
["04","Interview Coordination"],
["05","Offer Management"],
["06","Onboarding Support"],
["07","Post Placement Follow-up"],
["08","Long-Term Partnership"],
].map((item)=>(
<div
key={item[0]}
className="rounded-3xl bg-white p-8 shadow-lg"
>

<p className="text-5xl font-bold text-[#C89B3C]">
{item[0]}
</p>

<h3 className="mt-5 text-xl font-bold">
{item[1]}
</h3>

</div>
))}

</div>

</div>

</section>



{/* Interview Questions */}

<section className="py-24">

<div className="mx-auto max-w-7xl px-6">

<h2 className="text-5xl font-bold">
Interview Questions For Construction Project Managers
</h2>

<p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400">
Below are examples of topics many employers evaluate during Project Manager interviews.
</p>

<div className="mt-14 grid gap-5 md:grid-cols-2">

{[
"Describe the largest project you have managed.",
"How do you manage construction budgets?",
"How do you control project schedules?",
"Tell us about a difficult client.",
"How do you manage subcontractors?",
"What scheduling software have you used?",
"How do you handle change orders?",
"How do you manage RFIs?",
"Describe your safety philosophy.",
"How do you resolve conflicts onsite?",
"How do you forecast project costs?",
"Describe a project that went wrong and how you recovered it.",
].map((item)=>(

<div
key={item}
className="rounded-xl border border-white/10 bg-white/5 p-5"
>

{item}

</div>

))}

</div>

</div>

</section>



{/* Why Choose RUDRON */}

<section className="bg-[#0d1a2c] py-24">

<div className="mx-auto max-w-7xl px-6">

<h2 className="text-5xl font-bold">
Why Companies Partner With RUDRON
</h2>

<div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

{[
"Construction industry specialization",
"Project-focused candidate evaluation",
"Executive search capability",
"Permanent recruitment",
"MEP & EPC expertise",
"Commercial, Industrial, Civil and Residential markets",
"Transparent communication",
"Quality-first recruitment approach",
"Long-term hiring partnerships",
].map((item)=>(
<div
key={item}
className="rounded-2xl border border-white/10 bg-white/5 p-7"
>

<div className="flex items-center gap-3">

<CheckCircle2 className="text-[#C89B3C]" size={22}/>

<h3 className="font-semibold">
{item}
</h3>

</div>

</div>
))}

</div>

</div>

</section>



{/* Related Recruitment Services */}

<section className="bg-[#F4F4F0] py-24 text-[#07111F]">

<div className="mx-auto max-w-7xl px-6">

<h2 className="text-4xl font-bold">
Explore Related Recruitment Services
</h2>

<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

{[
["Superintendent Recruitment","/superintendent-recruitment"],
["Estimator Recruitment","/estimator-recruitment"],
["Mechanical Project Manager Recruitment","/mechanical-project-manager-recruitment"],
["Electrical Project Manager Recruitment","/electrical-project-manager-recruitment"],
["Preconstruction Manager Recruitment","/preconstruction-manager-recruitment"],
["Commercial Construction Recruitment","/commercial"],
].map((item)=>(

<Link

key={item[0]}

href={item[1]}

className="group rounded-2xl border p-7 transition hover:border-[#C89B3C] hover:shadow-xl"

>

<h3 className="text-xl font-bold">

{item[0]}

</h3>

<p className="mt-4 text-gray-600">
Learn more →
</p>

</Link>

))}

</div>

</div>

</section>

{/* Why Great Project Managers Deliver Better Projects */}

<section className="bg-[#07111F] py-24">

<div className="mx-auto max-w-7xl px-6">

<div className="max-w-4xl">

<span className="text-sm font-semibold uppercase tracking-[4px] text-[#C89B3C]">
Business Impact
</span>

<h2 className="mt-4 text-5xl font-bold">
Why Hiring the Right Project Manager Matters
</h2>

<p className="mt-6 text-lg leading-8 text-gray-300">
An experienced Construction Project Manager influences every stage of a
project—from planning and procurement through execution and closeout. The
right hire improves communication, controls budgets, reduces delays, manages
risk, and helps maintain strong relationships with owners, consultants and
subcontractors.
</p>

</div>

<div className="mt-16 grid gap-8 lg:grid-cols-4">

{[
{
icon:TrendingUp,
title:"Better Profitability",
text:"Effective project leadership helps reduce cost overruns and improve financial performance."
},
{
icon:Target,
title:"Improved Scheduling",
text:"Experienced managers keep projects moving through proactive planning and coordination."
},
{
icon:Award,
title:"Higher Quality",
text:"Attention to quality and coordination reduces rework and improves project delivery."
},
{
icon:FileText,
title:"Clear Documentation",
text:"Strong documentation, RFIs, change orders and reporting support successful project outcomes."
},
].map((item)=>{

const Icon=item.icon;

return(

<div
key={item.title}
className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#C89B3C]/40 hover:-translate-y-2"
>

<Icon
size={36}
className="text-[#C89B3C]"
/>

<h3 className="mt-6 text-2xl font-bold">
{item.title}
</h3>

<p className="mt-4 leading-8 text-gray-400">
{item.text}
</p>

</div>

)

})}

</div>

</div>

</section>

{/* FAQ */}

<section className="py-24">

<div className="mx-auto max-w-5xl px-6">

<h2 className="text-center text-5xl font-bold">
Frequently Asked Questions
</h2>

<div className="mt-14 space-y-5">

{[
[
"How long does it take to hire a Construction Project Manager?",
"Hiring timelines vary depending on the project requirements, location, seniority level and candidate availability."
],
[
"Do you recruit Project Managers nationwide?",
"Yes. We support hiring across multiple U.S. markets and other regions depending on client requirements."
],
[
"What industries do your Project Managers come from?",
"Commercial, Industrial, Healthcare, Data Centers, Mission Critical, Civil Infrastructure and Residential Construction."
],
[
"Do you recruit Executive level Project Managers?",
"Yes. We support senior leadership and executive search assignments."
],
[
"Can you recruit confidentially?",
"Yes. Confidential searches are supported where required."
],
].map((faq)=>(

<details

key={faq[0]}

className="rounded-2xl border border-white/10 bg-white/5 p-6"

>

<summary className="cursor-pointer text-lg font-semibold">

{faq[0]}

</summary>

<p className="mt-5 leading-8 text-gray-400">

{faq[1]}

</p>

</details>

))}

</div>

</div>

</section>

      {/* CTA */}

      <section className="bg-[#C89B3C] py-20">

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

          <BriefcaseBusiness
            size={56}
            className="mb-6 text-[#07111F]"
          />

          <h2 className="text-5xl font-bold text-[#07111F]">
            Looking to Hire a Construction Project Manager?
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-[#07111F]/80">
            Whether you're expanding your operations, replacing a key leader or building
            a new project team, RUDRON helps employers identify experienced Construction
            Project Managers with backgrounds aligned to their projects, sector and
            organizational goals.
          </p>

            <HireTalentButton
            ariaLabel="Hire a Project Manager"
            className="mt-10 inline-flex items-center rounded-xl bg-[#07111F] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
            Request Talent

            <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
            />
            </HireTalentButton>

        </div>

      </section>

    </main>
  );
}