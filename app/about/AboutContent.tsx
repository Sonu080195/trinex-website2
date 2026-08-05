"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import HomeCTA from "@/components/HomeCTA";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const expertiseCards = [
  { number: "01", title: "Built-Environment Focus", icon: "🏗️", desc: "Specialist recruitment across construction, engineering, MEP, infrastructure and mission-critical environments." },
  { number: "02", title: "Quality-First Search", icon: "🎯", desc: "Shortlists are shaped around project scope, technical capability, leadership fit and long-term potential." },
  { number: "03", title: "Responsive Delivery", icon: "⚡", desc: "Initial candidate delivery is targeted within 24–48 hours when the market and assignment permit." },
  { number: "04", title: "Partnership Mindset", icon: "🤝", desc: "Clear communication, transparent terms and consistent support from search launch through placement." },
];

const clientTypes = [
  { title: "General Contractors", desc: "Project delivery, field leadership, preconstruction, estimating and operational hiring across regional and national platforms." },
  { title: "Specialty & MEP Contractors", desc: "Mechanical, electrical, plumbing, HVAC, controls, fire protection, BIM/VDC and commissioning talent." },
  { title: "Developers & Owners", desc: "Development, construction management, owner representation, capital projects and portfolio leadership." },
  { title: "EPC & Engineering Firms", desc: "Engineering, design, project controls, procurement, construction management and technical leadership." },
  { title: "Manufacturers & Industrial Operators", desc: "Plant engineering, maintenance, capital improvement, operations, safety and quality professionals." },
  { title: "Mission-Critical Operators", desc: "Data-center construction, commissioning, controls, electrical, mechanical and facility leadership." },
];

const sectors = [
  "Commercial & Mixed-Use",
  "Data Centers & Mission Critical",
  "Healthcare & Life Sciences",
  "Industrial & Manufacturing",
  "Education & Institutional",
  "Residential & Multifamily",
  "Civil Infrastructure",
  "Transportation & Aviation",
];

const roleGroups = [
  { title: "Project Leadership", roles: "Project Engineers, Assistant Project Managers, Project Managers, Senior Project Managers, Project Executives and Directors." },
  { title: "Field Operations", roles: "Superintendents, General Superintendents, Field Operations Leaders, MEP Superintendents and Site Managers." },
  { title: "Preconstruction & Estimating", roles: "Estimators, Senior Estimators, Chief Estimators, Preconstruction Managers and Preconstruction Directors." },
  { title: "MEP & Technical", roles: "Mechanical and Electrical Project Managers, BIM/VDC, Commissioning, QA/QC, Design and Controls professionals." },
  { title: "Corporate & Executive", roles: "Vice Presidents, Operations Leaders, Business Unit Heads, Safety Leaders, Quality Leaders and confidential executive appointments." },
  { title: "Project Controls & Support", roles: "Schedulers, Cost Controls, Procurement, Contracts, Document Controls and project administration professionals." },
];

const processSteps = [
  { number: "01", title: "Discovery & Search Definition", desc: "We clarify the role, project environment, reporting structure, technical requirements, compensation, location and the business outcome the hire must deliver." },
  { number: "02", title: "Market Mapping & Outreach", desc: "We identify relevant professionals through targeted research, established networks and direct outreach rather than relying only on active applicants." },
  { number: "03", title: "Qualification & Shortlisting", desc: "Candidates are assessed for project background, technical alignment, career motivation, compensation, availability and practical fit before presentation." },
  { number: "04", title: "Interview Coordination", desc: "We manage communication, scheduling, feedback and expectation alignment so the process remains organized and candidates stay engaged." },
  { number: "05", title: "Offer & Placement Support", desc: "We assist with offer positioning, notice-period discussions, counteroffer risks and closing details through acceptance and start date." },
  { number: "06", title: "Post-Placement Partnership", desc: "Our support continues after the start date, backed by a 90-day replacement guarantee under the agreed service terms." },
];


const services = [
  { title: "Permanent Recruitment", desc: "Contingency search for critical permanent hires across project delivery, field operations, preconstruction, estimating, MEP, engineering, safety, quality and leadership functions." },
  { title: "Executive Search", desc: "Focused and confidential search support for senior project, operational and executive appointments where discretion, market mapping and direct outreach are essential." },
  { title: "Project & Contract Staffing", desc: "Flexible talent support for project-based demand, peak workloads, urgent mobilization and specialist assignments, subject to location and engagement requirements." },
  { title: "Talent Mapping & Market Intelligence", desc: "Research-led insight into candidate availability, compensation expectations, competitor talent and market conditions before or during a hiring initiative." },
];

const clientBenefits = [
  { title: "Faster Access To Relevant Talent", desc: "We reduce time spent reviewing unsuitable applications by focusing outreach on professionals whose project history, technical background and career goals align with the assignment." },
  { title: "Better Hiring Decisions", desc: "Candidate presentations include the practical information hiring leaders need to evaluate fit, including relevant projects, scope, team exposure, compensation, motivation and availability." },
  { title: "Support For Difficult Searches", desc: "We help when positions are confidential, highly specialized, geographically challenging, repeatedly open or unlikely to be filled through advertisements alone." },
  { title: "A More Controlled Process", desc: "One recruitment partner manages outreach, candidate communication, interview coordination, feedback, offer discussions and post-placement follow-up." },
  { title: "Reduced Hiring Risk", desc: "Our qualification process and 90-day replacement guarantee provide added protection when making important permanent hiring decisions." },
  { title: "Scalable Recruitment Support", desc: "Clients can use RUDRON for an individual critical hire, several project positions or an ongoing pipeline across functions, offices and project locations." },
];

const candidateSupport = [
  { title: "Relevant Career Opportunities", desc: "We discuss opportunities that align with your project background, technical strengths, location preferences, compensation goals and long-term career direction." },
  { title: "Confidential Representation", desc: "Your profile is handled professionally and is not shared with a client without discussing the opportunity and receiving your interest in being represented." },
  { title: "Clear Role Information", desc: "We explain the employer, project environment, responsibilities, reporting structure, location, compensation range and hiring process as clearly as the available information allows." },
  { title: "Interview Preparation", desc: "Candidates receive practical preparation on the position, company expectations, likely areas of discussion and how their experience connects to the employer's requirements." },
  { title: "Communication & Feedback", desc: "We coordinate interviews, keep candidates informed of progress and seek useful feedback so they understand where the process stands." },
  { title: "Offer & Transition Support", desc: "We help manage compensation discussions, notice periods, start dates, resignation concerns and counteroffer risks through the transition into a new role." },
];

const candidateJourney = [
  { number: "01", title: "Career Conversation", desc: "We learn about your experience, completed projects, responsibilities, career goals and what would make a move worthwhile." },
  { number: "02", title: "Opportunity Alignment", desc: "We introduce roles that fit your background and explain the client, project, expectations, location and compensation." },
  { number: "03", title: "Profile Presentation", desc: "Once you are interested, we present your experience accurately and highlight the strongest alignment with the assignment." },
  { number: "04", title: "Interview Support", desc: "We coordinate the process, help you prepare and maintain communication before and after each interview stage." },
  { number: "05", title: "Offer Guidance", desc: "We support negotiations and help both sides reach clear agreement on compensation, timing and expectations." },
  { number: "06", title: "Successful Transition", desc: "We remain available through resignation, notice period, onboarding and the early stage of your new position." },
];

const geographicMarkets = [
  { market: "United States", detail: "Primary recruitment market supporting regional and national construction, engineering, MEP and mission-critical employers." },
  { market: "Canada", detail: "Talent support for construction, engineering and infrastructure organizations across key Canadian markets." },
  { market: "United Arab Emirates", detail: "Recruitment support for selected construction, engineering, development and infrastructure requirements." },
  { market: "India", detail: "Access to professional and technical talent for domestic requirements and selected global hiring initiatives." },
];

const principles = [
  { title: "Specialization", desc: "We focus on the built environment so conversations begin with an understanding of projects, delivery models and technical disciplines." },
  { title: "Transparency", desc: "Clients and candidates receive direct communication, realistic expectations and clear commercial terms throughout the process." },
  { title: "Precision", desc: "We prioritize relevant, well-aligned professionals over large volumes of loosely matched résumés." },
  { title: "Accountability", desc: "Every assignment is managed with urgency, ownership and attention to the details that influence a successful hire." },
];

export default function AboutContent() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  const { ref: expertiseRef, inView: expertiseInView } = useInView(0.05);
  const { ref: storyRef, inView: storyInView } = useInView(0.05);
  const { ref: profileRef, inView: profileInView } = useInView(0.05);
  const { ref: clientsRef, inView: clientsInView } = useInView(0.05);
  const { ref: coverageRef, inView: coverageInView } = useInView(0.05);
  const { ref: servicesRef, inView: servicesInView } = useInView(0.05);
  const { ref: benefitsRef, inView: benefitsInView } = useInView(0.05);
  const { ref: candidatesRef, inView: candidatesInView } = useInView(0.05);
  const { ref: marketsRef, inView: marketsInView } = useInView(0.05);
  const { ref: processRef, inView: processInView } = useInView(0.05);
  const { ref: foundationRef, inView: foundationInView } = useInView(0.05);
  const { ref: principlesRef, inView: principlesInView } = useInView(0.05);

  return (
    <main className="overflow-hidden bg-[#07111F] text-white">
      {/* ══════════════════════════════════════
          HERO — unchanged
      ══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms] ease-out"
            style={{ backgroundImage: "url('/about/about-hero.webp')", transform: heroVisible ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/88 to-[#07111F]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-1000 delay-500"
          style={{ background: "linear-gradient(to bottom, transparent, #C89B3C, transparent)", opacity: heroVisible ? 0.6 : 0 }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,.10) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-32 lg:pt-40 pb-16">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-3 mb-6 transition-all duration-700"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(18px)" }}>
                <span className="h-px w-10 bg-[#C89B3C]" />
                <p className="text-[#C89B3C] uppercase tracking-[5px] text-[11px] font-semibold">
                  About RUDRON</p>
                <span className="h-px w-10 bg-[#C89B3C]" />
              </div>
              <h1 className="text-white text-[30px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.08] mb-4 transition-all duration-700 delay-150"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(28px)" }}>
                Building The Teams<br />Behind The World's<br />
                <span className="relative inline-block text-[#C89B3C]">
                  Most Critical Projects
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#C89B3C] rounded-full opacity-20" />
                </span>
              </h1>
              <p className="text-gray-300 text-[14px] lg:text-[16px] leading-7 max-w-[720px] mb-8 transition-all duration-700 delay-300"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)" }}>
                RUDRON Global Talent Solutions partners with construction, engineering, infrastructure and mission-critical 
                organizations to secure exceptional professionals, strengthen leadership teams and 
                support long-term business growth.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-500"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)" }}>
                {["Commercial","Healthcare","Mission Critical","Infrastructure"].map((item) => (
                  <span key={item} className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-white hover:border-[#C89B3C]/40 transition-all duration-300">{item}</span>
                ))}
              </div>
              <div
                className="
                  grid grid-cols-2 lg:grid-cols-4
                  gap-3 sm:gap-4
                  w-full max-w-[780px]
                  transition-all duration-700 delay-700
                "
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {[
                  ["24–48 Hrs", "Initial Candidate Delivery"],
                  ["Pre-Vetted", "Quality-First Shortlists"],
                  ["90 Days", "Replacement Guarantee"],
                  ["15%", "Transparent Recruitment Fee"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="
                      flex min-h-[110px] sm:min-h-[125px]
                      flex-col justify-center
                      rounded-[16px] sm:rounded-[18px]
                      border border-white/10
                      bg-white/[0.04]
                      px-3 py-4 sm:p-5
                      backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#C89B3C]/40
                      hover:bg-white/[0.07]
                    "
                  >
                    <h3
                      className="
                        mb-1.5
                        text-lg sm:text-xl lg:text-[22px]
                        font-bold leading-tight
                        text-[#C89B3C]
                      "
                    >
                      {value}
                    </h3>

                    <p
                      className="
                        text-[11px] sm:text-xs lg:text-[13px]
                        leading-relaxed
                        text-gray-300
                      "
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
      </section>


      {/* ══════════════════════════════════════
          TRUSTED EXPERTISE — animated
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#07111F] px-5 py-8 sm:px-6 lg:py-12">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[600px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,155,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div ref={expertiseRef} className="relative mx-auto max-w-7xl">
          <div
            className="mb-10 text-center transition-all duration-700 sm:mb-14"
            style={{
              opacity: expertiseInView ? 1 : 0,
              transform: expertiseInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C] sm:text-xs sm:tracking-[5px]">
                Trusted Expertise
              </p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>

            <h2 className="text-[28px] font-bold leading-[1.06] text-white sm:text-[38px] lg:text-[52px]">
              Built Around Industry<br />
              <span className="relative inline-block text-[#C89B3C]">
                Knowledge
                <span
                  className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#C89B3C] transition-all delay-500 duration-1000"
                  style={{ width: expertiseInView ? "100%" : "0%", opacity: 0.25 }}
                />
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-gray-400 sm:text-base sm:leading-8">
              RUDRON combines built-environment knowledge, focused direct search and responsive delivery to help clients secure professionals who can perform in demanding project environments.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {expertiseCards.map((item, index) => (
              <ExpertiseCard
                key={item.number}
                item={item}
                index={index}
                inView={expertiseInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY — continuous animated timeline
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#07111F] px-5 py-8 sm:px-6 lg:py-12">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[420px] w-[650px]"
          style={{ background: "radial-gradient(ellipse at left, rgba(200,155,60,0.07) 0%, transparent 70%)" }}
        />

        <div
          ref={storyRef}
          className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* LEFT — sticky company story */}
          <div
            className="self-start transition-all duration-700 lg:sticky lg:top-28"
            style={{
              opacity: storyInView ? 1 : 0,
              transform: storyInView ? "translateX(0)" : "translateX(-28px)",
            }}
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#C89B3C]" />
              <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C] sm:text-xs sm:tracking-[5px]">
                About RUDRON
              </p>
              <span className="h-px w-8 bg-[#C89B3C]" />
            </div>

            <h2 className="mb-6 text-[26px] font-bold leading-[1.12] sm:text-[34px] lg:text-[44px]">
              A specialist <span className="text-[#C89B3C]">AEC &amp; MEP talent partner</span> supporting the organizations building tomorrow&apos;s world.
            </h2>

            <div className="mb-8 h-[2px] w-24 rounded-full bg-[#C89B3C] sm:w-32" />

            <div className="space-y-5 text-[15px] leading-7 text-gray-400 sm:text-base sm:leading-8">
              <p>
                Backed by more than 10 years of combined recruitment experience, RUDRON understands that construction hiring goes far beyond matching a résumé with a job title. Successful appointments depend on project experience, technical depth, delivery environment, leadership capability, location, compensation and long-term career alignment.
              </p>
              <p>
                We support hiring across ground-up construction, tenant improvement, mission-critical facilities, healthcare, industrial, residential and infrastructure projects. Every search is shaped around the realities of the client&apos;s business and the outcomes the new hire must deliver.
              </p>
              <p>
                Our approach combines targeted market research, direct candidate engagement, careful qualification and consistent communication—helping clients make confident hiring decisions while giving candidates a clear and respectful recruitment experience.
              </p>
            </div>

            <div className="mt-8 rounded-[26px] border border-[#C89B3C]/20 bg-[#0D1726] p-5 sm:p-6">
              <p className="text-sm font-semibold leading-7 text-white sm:text-base">
                In construction, project success starts with the right people.
              </p>
              <p className="mt-2 text-lg font-bold leading-7 text-[#C89B3C] sm:text-xl">
                RUDRON — Building Teams Behind Tomorrow&apos;s Projects.
              </p>
            </div>
          </div>

          {/* RIGHT — continuously moving timeline */}
          <div className="relative h-[560px] overflow-hidden sm:h-[650px] lg:h-[760px]">
            <div className="story-scroll space-y-6">
              {[
                {
                  number: "01",
                  title: "The Beginning",
                  desc: "RUDRON was created to provide construction, engineering, MEP, infrastructure and mission-critical organizations with a more focused recruitment partner—one built around industry knowledge, responsive delivery and long-term hiring outcomes.",
                },
                {
                  number: "02",
                  title: "Understanding The Industry",
                  desc: "Construction recruitment is different from general hiring. Project type, delivery method, technical discipline, leadership scope and cultural alignment all influence whether a professional will succeed in a role.",
                },
                {
                  number: "03",
                  title: "Supporting Complex Projects",
                  desc: "Our search coverage expanded across commercial construction, healthcare, data centers, mission-critical developments, industrial manufacturing, residential, transportation and infrastructure environments.",
                },
                {
                  number: "04",
                  title: "Building Meaningful Relationships",
                  desc: "We invest time in understanding our clients’ growth plans, project pipelines and hiring challenges while helping professionals evaluate important career decisions with confidence.",
                },
                {
                  number: "05",
                  title: "A Network Built On Trust",
                  desc: "Our network includes project managers, superintendents, estimators, preconstruction professionals, MEP specialists, engineers, safety and quality leaders, project controls professionals and executives.",
                },
                {
                  number: "06",
                  title: "Creating Lasting Impact",
                  desc: "Every successful placement can strengthen project delivery, improve operational capacity, support business growth and create a meaningful next step in a professional’s career.",
                },
                {
                  number: "07",
                  title: "The Future Of RUDRON",
                  desc: "As workforce demands and construction technologies evolve, RUDRON remains committed to helping organizations build resilient, high-performing teams for the next generation of projects.",
                },
                // Duplicate items create the seamless infinite movement.
                {
                  number: "01",
                  title: "The Beginning",
                  desc: "RUDRON was created to provide construction, engineering, MEP, infrastructure and mission-critical organizations with a more focused recruitment partner—one built around industry knowledge, responsive delivery and long-term hiring outcomes.",
                },
                {
                  number: "02",
                  title: "Understanding The Industry",
                  desc: "Construction recruitment is different from general hiring. Project type, delivery method, technical discipline, leadership scope and cultural alignment all influence whether a professional will succeed in a role.",
                },
                {
                  number: "03",
                  title: "Supporting Complex Projects",
                  desc: "Our search coverage expanded across commercial construction, healthcare, data centers, mission-critical developments, industrial manufacturing, residential, transportation and infrastructure environments.",
                },
                {
                  number: "04",
                  title: "Building Meaningful Relationships",
                  desc: "We invest time in understanding our clients’ growth plans, project pipelines and hiring challenges while helping professionals evaluate important career decisions with confidence.",
                },
                {
                  number: "05",
                  title: "A Network Built On Trust",
                  desc: "Our network includes project managers, superintendents, estimators, preconstruction professionals, MEP specialists, engineers, safety and quality leaders, project controls professionals and executives.",
                },
                {
                  number: "06",
                  title: "Creating Lasting Impact",
                  desc: "Every successful placement can strengthen project delivery, improve operational capacity, support business growth and create a meaningful next step in a professional’s career.",
                },
                {
                  number: "07",
                  title: "The Future Of RUDRON",
                  desc: "As workforce demands and construction technologies evolve, RUDRON remains committed to helping organizations build resilient, high-performing teams for the next generation of projects.",
                },
              ].map((item, index) => (
                <div
                  key={`${item.number}-${index}`}
                  className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0D1726]/90 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/35 sm:p-6 lg:rounded-[32px] lg:p-8"
                >
                  <div className="absolute right-4 top-3 text-[70px] font-bold leading-none text-white/[0.04] sm:text-[90px] lg:text-[120px]">
                    {item.number}
                  </div>
                  <p className="mb-3 font-semibold text-[#C89B3C]">{item.number}</p>
                  <h3 className="mb-4 text-lg font-bold text-white sm:text-xl lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-gray-400 sm:text-sm lg:text-[15px] lg:leading-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-[#07111F] to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-[#07111F] to-transparent" />
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="relative bg-[#0D1726] px-5 py-8 sm:px-6 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,155,60,0.10),transparent_38%)]" />
        <div ref={profileRef} className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div
            className="transition-all duration-700"
            style={{ opacity: profileInView ? 1 : 0, transform: profileInView ? "translateX(0)" : "translateX(-28px)" }}
          >
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="max-w-3xl text-[30px] font-bold leading-[1.12] sm:text-[40px] lg:text-[54px]">
              A Focused Talent Partner For The <span className="text-[#C89B3C]">Built Environment</span>
            </h2>
            <div className="mt-6 h-[2px] w-24 bg-[#C89B3C]" />

            <div className="mt-8 space-y-5 text-[15px] leading-7 text-gray-300 sm:text-base sm:leading-8">
              <p>
                RUDRON Global Talent Solutions supports construction, engineering, infrastructure and mission-critical organizations with permanent hiring, executive search and targeted talent acquisition services.
              </p>
              <p>
                Backed by more than 10 years of combined recruitment experience, our team understands that success in these markets depends on more than a job title. Project type, contract value, delivery method, technical discipline, leadership scope, safety culture and stakeholder exposure can all determine whether a professional will succeed.
              </p>
              <p>
                That is why every assignment starts with a detailed understanding of the client&apos;s operating environment. We then build a focused search strategy designed to identify professionals whose experience and career direction genuinely align with the opportunity.
              </p>
            </div>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2"
            style={{ opacity: profileInView ? 1 : 0, transform: profileInView ? "translateY(0)" : "translateY(28px)", transition: "all .7s ease .15s" }}
          >
            {[
              ["AEC", "Architecture, Engineering & Construction"],
              ["MEP", "Mechanical, Electrical & Plumbing"],
              ["MC", "Mission Critical & Data Centers"],
              ["INF", "Infrastructure & Transportation"],
            ].map(([abbr, label]) => (
              <div key={abbr} className="min-h-[180px] rounded-[26px] border border-white/10 bg-[#07111F] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/35">
                <p className="text-3xl font-black text-[#C89B3C]">{abbr}</p>
                <div className="my-5 h-px w-12 bg-[#C89B3C]/60" />
                <p className="text-sm leading-6 text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="relative px-5 py-8 sm:px-6 lg:py-12">
        <BackgroundGrid />
        <div ref={clientsRef} className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who We Partner With"
            title="Recruitment Support Across The Project Ecosystem"
            description="We work with organizations that plan, design, build, operate and improve the built environment—adapting each search to the client's structure, project portfolio and growth strategy."
            inView={clientsInView}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clientTypes.map((item, index) => (
              <TextCard key={item.title} item={item} index={index} inView={clientsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS AND ROLES */}
      <section className="relative bg-[#F4F4F0] px-5 py-8 text-[#07111F] sm:px-6 lg:py-12">
        <div ref={coverageRef} className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Recruitment Coverage"
            title="From Project Delivery To Executive Leadership"
            description="Our searches span the sectors, disciplines and leadership levels required to take projects from planning through completion and operation."
            inView={coverageInView}
            dark
          />

          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <div
              className="rounded-[30px] bg-[#07111F] p-6 text-white sm:p-8"
              style={{ opacity: coverageInView ? 1 : 0, transform: coverageInView ? "translateX(0)" : "translateX(-24px)", transition: "all .7s ease" }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[4px] text-[#C89B3C]">Sectors We Support</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {sectors.map((sector) => (
                  <div key={sector} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-sm text-[#C89B3C]">✓</span>
                    <span className="text-sm leading-6 text-gray-200">{sector}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {roleGroups.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(7,17,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/30"
                  style={{ opacity: coverageInView ? 1 : 0, transform: coverageInView ? "translateY(0)" : "translateY(22px)", transitionDelay: `${index * 70}ms` }}
                >
                  <p className="mb-3 text-lg font-bold text-[#07111F]">{item.title}</p>
                  <p className="text-sm leading-7 text-gray-600">{item.roles}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-[#F4F4F0] px-5 py-8 text-[#07111F] sm:px-6 lg:py-12">
        <div ref={servicesRef} className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Recruitment Solutions Built Around Real Hiring Needs"
            description="RUDRON supports organizations at different stages of growth, from one urgent project hire to confidential leadership search and longer-term workforce planning."
            inView={servicesInView}
            dark
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((item, index) => (
              <div key={item.title} className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(7,17,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/30 sm:p-8" style={{ opacity: servicesInView ? 1 : 0, transform: servicesInView ? "translateY(0)" : "translateY(22px)", transitionDelay: `${index * 80}ms` }}>
                <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#C89B3C]">Service {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mb-4 text-2xl font-bold text-[#07111F]">{item.title}</h3>
                <p className="text-[15px] leading-8 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT VALUE */}
      <section className="relative px-5 py-8 sm:px-6 lg:py-12">
        <BackgroundGrid />
        <div ref={benefitsRef} className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Help Employers"
            title="More Than Candidate Sourcing"
            description="Our role is to help hiring teams save time, reach hard-to-find professionals, improve candidate quality and move important searches forward with greater confidence."
            inView={benefitsInView}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clientBenefits.map((item, index) => (
              <TextCard key={item.title} item={item} index={index} inView={benefitsInView} />
            ))}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              ["Before The Search", "We help define the position, prioritize requirements, assess market realism and clarify the profile most likely to succeed."],
              ["During The Search", "We map the market, engage candidates, qualify interest, manage communication and keep the process moving."],
              ["After The Hire", "We support offer acceptance, notice-period management, onboarding communication and early post-placement follow-up."],
            ].map(([title, desc], index) => (
              <div key={title} className="rounded-[26px] border border-[#C89B3C]/20 bg-[#0D1726] p-6 sm:p-7" style={{ opacity: benefitsInView ? 1 : 0, transform: benefitsInView ? "translateY(0)" : "translateY(20px)", transition: `all .65s ease ${index * 90 + 150}ms` }}>
                <p className="mb-3 text-sm font-bold text-[#C89B3C]">{title}</p>
                <p className="text-sm leading-7 text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CANDIDATES */}
      <section className="relative bg-[#0D1726] px-5 py-8 sm:px-6 lg:py-12">
        <div ref={candidatesRef} className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Help Candidates"
            title="Career Support With Respect, Clarity And Confidentiality"
            description="Candidates are not simply profiles in a database. We aim to understand what they have accomplished, what they want next and whether an opportunity genuinely supports their career."
            inView={candidatesInView}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {candidateSupport.map((item, index) => (
              <TextCard key={item.title} item={item} index={index} inView={candidatesInView} />
            ))}
          </div>
          <div className="mt-12 rounded-[32px] border border-white/10 bg-[#07111F] p-6 sm:p-8 lg:p-10">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-[#C89B3C]">The Candidate Journey</p>
              <h3 className="text-[26px] font-bold leading-tight text-white sm:text-[34px]">From First Conversation To Successful Start</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {candidateJourney.map((item, index) => (
                <div key={item.number} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 sm:p-6" style={{ opacity: candidatesInView ? 1 : 0, transform: candidatesInView ? "translateY(0)" : "translateY(18px)", transition: `all .6s ease ${index * 70 + 120}ms` }}>
                  <p className="mb-3 text-sm font-bold tracking-[3px] text-[#C89B3C]">{item.number}</p>
                  <h4 className="mb-3 text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-sm leading-7 text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC REACH */}
      <section className="relative bg-[#F4F4F0] px-5 py-8 text-[#07111F] sm:px-6 lg:py-12">
        <div ref={marketsRef} className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where We Operate"
            title="Global Reach With Market-Specific Search"
            description="Our core focus is North American construction and engineering recruitment, supported by broader capabilities across Canada, the UAE and India."
            inView={marketsInView}
            dark
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {geographicMarkets.map((item, index) => (
              <div key={item.market} className="min-h-[225px] rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_18px_45px_rgba(7,17,31,0.06)]" style={{ opacity: marketsInView ? 1 : 0, transform: marketsInView ? "translateY(0)" : "translateY(22px)", transition: `all .65s ease ${index * 80}ms` }}>
                <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#C89B3C]">Market {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mb-4 text-2xl font-bold text-[#07111F]">{item.market}</h3>
                <p className="text-sm leading-7 text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-gray-600">Specific service availability, engagement structure and search timelines may vary by country, role type and client requirement. Each assignment is assessed individually before launch.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative px-5 py-8 sm:px-6 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.08),transparent_42%)]" />
        <div ref={processRef} className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Work"
            title="A Search Process Built For Clarity And Control"
            description="Our process keeps hiring teams informed, protects candidate engagement and creates a clear path from initial brief to successful start date."
            inView={processInView}
          />

          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((item, index) => (
              <ProcessCard key={item.number} item={item} index={index} inView={processInView} />
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative bg-[#F4F4F0] px-5 py-8 text-[#07111F] sm:px-6 lg:py-12">
        <div ref={foundationRef} className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Foundation"
            title="Purpose Driven. Future Focused."
            description="Our mission and vision guide how we represent clients, support professionals and build long-term partnerships."
            inView={foundationInView}
            dark
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <FoundationCard
              letter="M"
              label="Mission"
              title="Building Teams That Deliver Exceptional Projects"
              description="To help organizations secure exceptional talent while creating meaningful career opportunities across construction, engineering, infrastructure and mission-critical markets."
              inView={foundationInView}
            />
            <FoundationCard
              letter="V"
              label="Vision"
              title="Becoming A Trusted Construction Recruitment Partner"
              description="To be recognized across North America and global construction markets for specialist knowledge, transparent partnerships and consistently strong hiring outcomes."
              inView={foundationInView}
              dark
            />
          </div>
        </div>
      </section>

      {/* PRINCIPLES AND COMMITMENTS */}
      <section className="relative px-5 py-8 sm:px-6 lg:py-12">
        <BackgroundGrid />
        <div ref={principlesRef} className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The RUDRON Standard"
            title="What Clients Can Expect From Every Search"
            description="Our service model is built around four principles and clear commercial commitments that make the recruitment process easier to understand and manage."
            inView={principlesInView}
          />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((item, index) => (
                <TextCard key={item.title} item={item} index={index} inView={principlesInView} />
              ))}
            </div>

            <div
              className="rounded-[30px] border border-[#C89B3C]/25 bg-[#0D1726] p-6 sm:p-8"
              style={{ opacity: principlesInView ? 1 : 0, transform: principlesInView ? "translateX(0)" : "translateX(24px)", transition: "all .7s ease .15s" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#C89B3C]">Client Commitments</p>
              <div className="mt-7 space-y-5">
                {[
                  ["24–48 Hrs", "Targeted initial candidate delivery where feasible"],
                  ["Pre-Vetted", "Quality-first candidate shortlists"],
                  ["90 Days", "Replacement guarantee under agreed terms"],
                  ["15%", "Transparent contingency recruitment fee"],
                ].map(([value, label]) => (
                  <div key={label} className="flex gap-5 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <p className="min-w-[92px] text-xl font-bold text-[#C89B3C] sm:text-2xl">{value}</p>
                    <p className="text-sm leading-6 text-gray-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />

      <style>{`
        @keyframes rudronStoryScroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        .story-scroll {
          animation: rudronStoryScroll 42s linear infinite;
          will-change: transform;
        }

        .story-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .story-scroll {
            animation-duration: 52s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .story-scroll {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}

function BackgroundGrid() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(200,155,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(200,155,60,0.08),transparent_70%)]" />
    </>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3">
      <span className="h-px w-9 bg-[#C89B3C]" />
      <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C] sm:text-xs">{children}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, inView, dark = false }: { eyebrow: string; title: string; description: string; inView: boolean; dark?: boolean }) {
  return (
    <div
      className="mx-auto mb-10 max-w-4xl text-center transition-all duration-700 sm:mb-14"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(22px)" }}
    >
      <div className="mb-5 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-[#C89B3C]" />
        <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C] sm:text-xs">{eyebrow}</p>
        <span className="h-px w-8 bg-[#C89B3C]" />
      </div>
      <h2 className={`text-[29px] font-bold leading-[1.08] sm:text-[40px] lg:text-[54px] ${dark ? "text-[#07111F]" : "text-white"}`}>{title}</h2>
      <p className={`mx-auto mt-5 max-w-3xl text-[15px] leading-7 sm:text-base sm:leading-8 ${dark ? "text-gray-600" : "text-gray-400"}`}>{description}</p>
    </div>
  );
}

function ExpertiseCard({ item, index, inView }: { item: (typeof expertiseCards)[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative min-h-[245px] cursor-default overflow-hidden rounded-[24px] border bg-[#0D1726] p-6"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(24px)",
        borderColor: hovered
          ? "rgba(200,155,60,0.3)"
          : "rgba(255,255,255,0.1)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, border-color 0.3s ease`,
      }}
    >
      <div className="pointer-events-none absolute right-4 top-0 select-none text-[80px] font-black leading-none text-white/[0.04]">
        {item.number}
      </div>

      <div
        className="absolute left-6 right-6 top-0 h-[2px] origin-left bg-[#C89B3C] transition-transform duration-500"
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
      />

      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-xl transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(200,155,60,0.12)"
            : "rgba(255,255,255,0.05)",
        }}
      >
        {item.icon}
      </div>

      <p className="mb-3 text-xs font-bold tracking-[3px] text-[#C89B3C]">
        {item.number}
      </p>

      <h3
        className="mb-3 text-[19px] font-bold transition-colors duration-300"
        style={{ color: hovered ? "#C89B3C" : "#FFFFFF" }}
      >
        {item.title}
      </h3>

      <p className="text-sm leading-7 text-gray-400">{item.desc}</p>
    </div>
  );
}

function TextCard({ item, index, inView }: { item: { title: string; desc: string }; index: number; inView: boolean }) {
  return (
    <div
      className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/35 hover:bg-white/[0.055] sm:p-7"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(22px)", transitionDelay: `${index * 75}ms` }}
    >
      <div className="mb-5 h-[2px] w-12 bg-[#C89B3C]" />
      <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
      <p className="text-sm leading-7 text-gray-400">{item.desc}</p>
    </div>
  );
}

function ProcessCard({ item, index, inView }: { item: (typeof processSteps)[0]; index: number; inView: boolean }) {
  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0D1726]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/35 sm:p-7"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transitionDelay: `${index * 80}ms` }}
    >
      <span className="absolute right-4 top-0 text-[92px] font-black leading-none text-white/[0.035]">{item.number}</span>
      <p className="mb-5 text-sm font-bold tracking-[3px] text-[#C89B3C]">{item.number}</p>
      <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
      <p className="text-sm leading-7 text-gray-400">{item.desc}</p>
    </div>
  );
}

function FoundationCard({ letter, label, title, description, inView, dark = false }: { letter: string; label: string; title: string; description: string; inView: boolean; dark?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-9 ${dark ? "border-white/10 bg-[#07111F]" : "border-black/5 bg-white"}`}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(26px)" }}
    >
      <span className={`absolute right-4 top-0 text-[120px] font-black leading-none ${dark ? "text-white/[0.035]" : "text-black/[0.035]"}`}>{letter}</span>
      <div className="mb-6 h-[2px] w-14 bg-[#C89B3C]" />
      <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#C89B3C]">{label}</p>
      <h3 className={`mb-5 max-w-xl text-[27px] font-bold leading-[1.15] sm:text-[34px] ${dark ? "text-white" : "text-[#07111F]"}`}>{title}</h3>
      <p className={`text-[15px] leading-8 ${dark ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
    </div>
  );
}