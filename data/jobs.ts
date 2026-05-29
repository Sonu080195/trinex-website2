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

{
  id: 7,

  featured: false,

  urgent: true,

  postedDate: "1",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Project Manager – Process Piping (Pharmaceutical & Data Center Projects)",

  company: "Mechanical Contractor",

  location: "Charlotte, NC",

  salary: "$120K - $180K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Mechanical",

  slug: "project-manager-Process-Piping-charlotte",

  description:
    "A leading mechanical contractor is seeking a Project Manager with a strong piping background to join a growing mechanical contractor specializing in self-perform process piping systems. This role is focused exclusively on piping scopes across pharmaceutical and mission-critical/data center projects, offering the opportunity to manage highly technical, large-scale builds.",

  responsibilities: [
    "Manage full lifecycle of piping projects from kickoff through completion",
    "Oversee self-perform piping scopes including labor, materials, and execution strategy",
    "Coordinate with superintendents, field teams, engineers, and clients",
    "Manage budgets, schedules, procurement, RFIs, submittals, and change orders",
    "Ensure compliance with safety standards, quality control, and project specifications",
    "Support preconstruction including estimating, planning, and constructability reviews",
    "Maintain and grow client relationships within pharmaceutical and data center sectors",
  ],

  requirements: [
    "5–7+ years of experience in construction project management with a focus on piping systems",
    "Experience managing process piping or high-purity piping projects in pharma, biotech, semiconductor, or data center environments",
    "Strong knowledge of piping materials, fabrication, and installation methods",
    "Proven ability to manage project budgets, schedules, and field operations",
    "Proficiency with construction software (Procore, Bluebeam, MS Project, etc.)",
    "Industries: Pharmaceutical Manufacturing, Data Centers (Mission-Critical)",
  ],

  benefits: [
    "Comprehensive benefits: Health, Dental, Vision",
    "401K with company match",
    "Relocation assistance available (if applicable)",
    "401(k) with company match",
  ],
},

{
  id: 8,

  featured: false,

  urgent: false,

  postedDate: "1",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Estimator",

  company: "Electrical Contractor",

  location: "Seattle, WA",

  salary: "$125K - $155K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Electrical",

  slug: "estimator-seattle",

  description:
    "A leading electrical contractor is seeking an experienced Electrical Estimator to join a growing commercial and industrial construction team in Seattle, WA. This role is responsible for preparing accurate and competitive cost estimates for complex electrical construction projects, including industrial facilities, manufacturing plants, commercial buildings, healthcare, data centers, and mission-critical environments.",

  responsibilities: [
    "Prepare detailed electrical estimates and bid proposals for commercial and industrial construction projects",
    "Review drawings, specifications, and project documents to determine scope and material requirements",
    "Perform quantity takeoffs for electrical systems including power distribution, lighting, low voltage, controls, and equipment",
    "Solicit and evaluate subcontractor and vendor pricing",
    "Develop labor, material, and equipment cost estimates",
    "Analyze project risks, value engineering opportunities, and constructability concerns",
    "Coordinate with project management and operations teams during bid turnover",
    "Maintain current pricing databases and estimating tools",
    "Participate in pre-bid meetings, site walks, and client presentations as needed",
    "Support negotiated and design-build project pursuits",
  ],

  requirements: [
    "4+ years of electrical estimating experience in commercial and/or industrial construction",
    "Strong understanding of NEC codes, electrical systems, and construction methodologies",
    "Experience estimating projects ranging from $1M to $50M+ preferred",
    "Proficiency with estimating software such as Accubid, ConEst, Bluebeam, or similar platforms",
    "Ability to read and interpret construction drawings and specifications",
    "Excellent communication, organizational, and problem-solving skills",
    "Bachelor’s degree in Construction Management, Electrical Engineering, or related field preferred",
    "Field experience as an electrician or project engineer is a plus",
  ],

  benefits: [
    "Performance-based bonus structure",
    "Comprehensive medical, dental, and vision coverage",
    "401(k) with company match",
    "Paid time off and company holidays",
    "Vehicle allowance or company vehicle",
    "Career advancement opportunities within a growing organization",
  ],
},

{
  id: 9,

  featured: false,

  urgent: true,

  postedDate: "3",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Senior Project Manager",

  company: "General Contractor",

  location: "Philadelphia, PA",

  salary: "$100K - $135K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Commercial/Industrial",

  slug: "senior-project-manager-Philadelphia",

  description:
    "A leading general contractor is seeking an experienced Senior Project Manager to lead and oversee commercial and industrial construction projects in the Philadelphia area. This role is ideal for a driven professional who can manage complex builds, lead cross-functional teams, and ensure projects are delivered on time, within budget, and to the highest quality standards.",

  responsibilities: [
    "Manage all phases of commercial and industrial construction projects from pre-construction through closeout",
    "Develop and maintain project schedules, budgets, and forecasts",
    "Coordinate with clients, architects, engineers, subcontractors, and internal teams",
    "Lead project meetings and provide regular updates to stakeholders",
    "Ensure compliance with safety regulations, building codes, and company standards",
    "Identify and mitigate risks, resolving issues proactively",
    "Oversee procurement, contract administration, and change order management",
    "Mentor and guide junior project management staff",
  ],

  requirements: [
    "Minimum of 7 years of experience in commercial and/or industrial construction project management",
    "Proven track record of successfully delivering ground-up and/or large-scale renovation projects",
    "Strong knowledge of construction methods, materials, and project management principles",
    "Proficiency in project management software (e.g., Procore, MS Project, or similar)",
    "Excellent leadership, communication, and organizational skills",
    "Ability to manage multiple projects simultaneously in a fast-paced environment",
    "Bachelor’s degree in Construction Management, Engineering, or related field preferred",
  ],

  benefits: [
    "Performance-based bonuses",
    "Comprehensive benefits package (medical, dental, vision)",
    "401(k) with company match",
    "Paid time off and holidays",
    "Opportunities for career growth and advancement",
  ],
},

{
  id: 10,

  featured: false,

  urgent: false,

  postedDate: "10",

  recruiter: "RUDRON Executive Search",

  heroImage:
    "/jobs/commercial-pm.jpg",

  title: "Pipe Designer – Process Piping",

  company: "Mechanical Contractor",

  location: "Remote or Atlanta, GA",

  salary: "$100K - $130K",

  type: "Full Time",

  industry: "Construction",

  specialisation: "Mechanical",

  slug: "piping-designer-remote",

  description:
    "A leading mechanical contractor is seeking a Pipe Designer with strong MEP and fabrication experience to support complex piping systems across pharmaceutical and mission-critical/data center projects. This role will focus on detailed piping design, coordination, and clash detection within a fast-paced, self-perform mechanical construction environment.",

  responsibilities: [
    "Develop detailed 3D piping models using Revit for construction and fabrication",
    "Perform clash detection and coordination using Navisworks",
    "Produce fabrication-ready drawings and spool sheets for field installation",
    "Coordinate with project managers, engineers, and field teams to ensure constructability",
    "Participate in BIM coordination meetings with clients and trade partners",
    "Support prefabrication efforts and optimize layouts for efficiency",
    "Maintain drawing accuracy, standards, and version control",
  ],

  requirements: [
    "Proven experience in piping design within an MEP or mechanical construction environment",
    "Strong proficiency in Revit (piping modeling)",
    "Experience with Navisworks for clash detection and coordination",
    "Familiarity with fabrication workflows and spool drawings",
    "Experience working on pharmaceutical, industrial, or mission-critical projects preferred",
    "Stratus experience is a strong plus",
    "Strong understanding of constructability and installation sequencing",
  ],

  benefits: [
    "Full benefits package (health, dental, vision)",
    "401K with company match",
    "Flexible work environment (Remote or Atlanta-based)",
  ],
},
];