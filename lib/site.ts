// lib/site.ts

export const SITE = {
  name: "RUDRON Global Talent Solutions",
  shortName: "RUDRON",
  url: "https://www.rudrongts.com",

  phone: {
    display: "+1 (623) 309-2345",
    international: "+1-623-309-2345",
    tel: "+16233092345",
  },

  address: {
    street: "3707 East Southern Avenue",
    city: "Mesa",
    state: "AZ",
    postalCode: "85206",
    country: "United States",
    countryCode: "US",

    display:
      "3707 East Southern Avenue, Mesa, AZ 85206, United States",
  },

  emails: {
    general: "contact@rudrongts.com",
    admin: "admin@rudrongts.com",
    jobs: "jobs@rudrongts.com",
    usa: "usa@rudrongts.com",
    canada: "canada@rudrongts.com",
    uae: "uae@rudrongts.com",
    india: "india@rudrongts.com",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/rudrongts/",
    instagram: "https://www.instagram.com/rudron_gts/",
    facebook:
      "https://www.facebook.com/share/1HQMr8GCcd/?mibextid=wwXlfr",
  },
} as const;