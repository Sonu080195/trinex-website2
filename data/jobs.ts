export interface Job {

  id: number;

  title: string;

  company: string;

  location: string;

  salary: string;

  type: string;

  industry: string;

  specialisation: string;

  slug: string;

  description: string;

  responsibilities: string[];

  requirements: string[];

  benefits: string[];

  featured?: boolean;

  heroImage?: string;

  postedDate?: string;

  urgent?: boolean;

  recruiter?: string;
}

export const jobs: Job[] = [

  {
  id: 1,

  featured: true,

  urgent: true,

  postedDate: "2 Days Ago",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Senior Project Manager",

  company: "Commercial GC Contractor",

  location: "Dallas, TX",

  salary: "$160K - $190K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Commercial",

  slug: "senior-project-manager-dallas",

  description:
    "A leading commercial contractor is seeking an experienced Senior Project Manager to oversee large-scale commercial projects.",

  responsibilities: [
    "Lead commercial construction projects",
    "Manage project budgets and schedules",
    "Coordinate field operations",
  ],

  requirements: [
    "10+ years experience",
    "Commercial project background",
    "Leadership skills",
  ],

  benefits: [
    "Performance bonuses",
    "Healthcare coverage",
    "401(k)",
  ],
},

  {
    id: 2,

    featured: true,

    urgent: true,
    
    postedDate: "5 Days Ago",
    
    recruiter: "RUDRON Executive Search",

    heroImage:
        "/jobs/mep-superintendent.jpg",

    title: "MEP Superintendent",

    company: "Top ENR Contractor",

    location: "Phoenix, AZ",

    salary: "$145K - $175K",

    type: "Full Time",

    industry: "MEP",

    specialisation: "Data Centers",

    slug: "mep-superintendent-phoenix",

    description:
      "Mission critical contractor seeking experienced MEP Superintendent for hyperscale projects.",

    responsibilities: [
      "Manage MEP field operations",
      "Coordinate subcontractors",
      "Maintain safety standards",
    ],

    requirements: [
      "8+ years experience",
      "Mission critical experience",
      "Leadership skills",
    ],

    benefits: [
      "Industry-leading compensation",
      "Healthcare benefits",
      "Career advancement",
    ],
  },

  {
  id: 3,

  featured: false,

  urgent: true,

  postedDate: "10",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Piping Project Manager",

  company: "Confidential ENR Contractor",

  location: "Atlanta, GA",

  salary: "$120K - $180K",

  type: "Full Time",

  industry: "Mechanical",

  specialisation: "Commercial",

  slug: "piping-project-manager-atlanta",

  description:
    "A leading mechanical contractor is seeking Project Manager with a strong piping background to join a growing mechanical contractor specializing in self-perform process piping systems. This role is focused exclusively on piping scopes across pharmaceutical and mission-critical/data center projects, offering the opportunity to manage highly technical, large-scale builds.",

  responsibilities: [
    "Manage full lifecycle of piping projects from kickoff through completion",
    "Oversee self-perform piping scopes including labor, materials, and execution strategy",
    "Coordinate with superintendents, field teams, engineers, and clients",
    "Manage budgets, schedules, procurement, RFIs, submittals, and change orders",
    "Ensure compliance with safety standards, quality control, and project specifications",
  ],

  requirements: [
    "5–7+ years of experience in construction project management with a focus on piping systems",
    "Experience managing process piping or high-purity piping projects in pharma, biotech, semiconductor, or data center environments",
    "Strong knowledge of piping materials, fabrication, and installation methods",
    "Proven ability to manage project budgets, schedules, and field operations",
    "Proficiency with construction software (Procore, Bluebeam, MS Project, etc.)",
  ],

  benefits: [
    "Comprehensive benefits: Health, Dental, Vision",
    "401K with company match",
    "Relocation assistance available (if applicable)",
  ],
},

{
  id: 4,

  featured: false,

  urgent: true,

  postedDate: "3 Days Ago",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Sr. Project Manager - Healthcare",

  company: "Commercial GC",

  location: "San Jose, CA",

  salary: "$125K - $185K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Commercial",

  slug: "senior-project-manager-sanjose",

  description:
    "A leading general contractor is seeking an experienced Senior Project Manager to lead complex healthcare commercial construction projects in the San Jose area. This role requires a strong background in managing large-scale medical facility builds, including hospitals, outpatient centers, and specialized clinical environments.",

  responsibilities: [
    "Lead end-to-end project management for healthcare construction projects, from preconstruction through closeout",
    "Develop and manage project budgets, schedules, and resources",
    "Coordinate with architects, engineers, contractors, and healthcare stakeholders",
    "Ensure compliance with all healthcare regulations, codes, and safety standards (e.g., OSHPD/HCAI requirements)",
    "Oversee risk management, quality control, and cost control processes",
  ],

  requirements: [
    "Bachelor’s degree in Construction Management, Engineering, Architecture, or related field",
    "8–12+ years of experience in commercial construction, with a strong focus on healthcare projects",
    "Proven experience managing large, complex healthcare builds",
    "In-depth knowledge of California healthcare construction regulations and permitting processes",
    "Proficiency in project management software (e.g., Procore, Primavera P6, MS Project)",
  ],

  benefits: [
    "Performance-based bonuses",
    "Comprehensive health, dental, and vision insurance",
    "401(k) with company match",
    "Paid time off and holidays",
  ],
},

{
  id: 5,

  featured: false,

  urgent: false,

  postedDate: "2 Days Ago",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Senior Project Manager",

  company: "Electrical Contractor",

  location: "Dallas, TX",

  salary: "$125K - $165K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Electrical",

  slug: "senior-project-manager-dallas",

  description:
    "A leading electrical contractor is seeking an experienced Senior Project Manager (Sr PM) to lead complex electrical construction projects across commercial, industrial, and transportation sectors.",

  responsibilities: [
    "Lead and manage multiple large-scale electrical construction projects simultaneously",
    "Oversee project planning, scheduling, budgeting, and forecasting",
    "Manage subcontractors, vendors, field supervisors, and project engineers",
    "Develop and maintain strong relationships with owners, general contractors, engineers, and stakeholders",
    "Ensure compliance with safety regulations, electrical codes, and company standards",
  ],

  requirements: [
    "6+ years of project management experience in electrical construction",
    "Proven experience managing commercial, industrial, and/or transportation infrastructure projects",
    "Strong knowledge of electrical systems, power distribution, controls, and related construction methods",
    "Demonstrated experience managing budgets of $10M+",
    "Proficiency in construction management software (Procore, Primavera P6, MS Project, etc.)",
  ],

  benefits: [
    "Comprehensive health, dental, and vision insurance",
    "401(k) with company match",
    "Paid time off and holidays",
    "Vehicle allowance or company vehicle",
  ],
},

{
  id: 6,

  featured: false,

  urgent: false,

  postedDate: "10",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Field Operations Manager",

  company: "Electrical Contractor",

  location: "Dallas, TX",

  salary: "$175K - $250K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Electrical",

  slug: "field-operations-manager-dallas",

  description:
    "A leading electrical contractor is seeking a highly experienced Field Operations Manager to lead and scale field operations across large-scale industrial and commercial electrical projects throughout the DFW market. This executive-level role is responsible for operational performance, field leadership development, safety excellence, financial oversight, and client satisfaction.",

  responsibilities: [
    "Operational Leadership",
    "Oversee all field operations across industrial and commercial electrical projects.",
    "Lead General Foremen, Superintendents, and Project Managers to ensure on-time, on-budget delivery.",
    "Standardize processes, improve productivity, and drive operational efficiency.",
    "Own and manage operational P&L performance.",
    "Build and maintain relationships with GCs, developers, and direct-to-owner clients.",
  ],

  requirements: [
    "10+ years of leadership experience in industrial and commercial electrical contracting",
    "Master Electrician license (preferred but not required)",
    "Industrial facilities (manufacturing, distribution, energy)",
    "Commercial projects (healthcare, data centers, large office, retail)",
    "Experience managing $50M+ annual revenue operations preferred",
  ],

  benefits: [
    "Performance-based bonus structure",
    "Executive-level benefits package",
    "Vehicle allowance or company vehicle",
    "401(k) with company match",
  ],
},
];