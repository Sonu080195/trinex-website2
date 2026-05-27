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

  company: "Confidential ENR Contractor",

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

    company: "Mission Critical GC",

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
];