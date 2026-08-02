import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how RUDRON Global Talent Solutions LLP collects, uses, shares, and protects personal information through its recruitment and talent solutions services.",
  alternates: {
    canonical: "https://www.rudrongts.com/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 16, 2026";

type PolicyBlock =
  | { type: "paragraph" | "subheading"; text: string }
  | { type: "list"; items: string[] };

interface PolicySection {
  id: string;
  title: string;
  blocks: PolicyBlock[];
}

const policySections: PolicySection[] = [
  {
    "id": "section-1",
    "title": "1. What Information Do We Collect?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Personal information you disclose to us In Short: We collect personal information that you provide to us. We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:"
      },
      {
        "type": "list",
        "items": [
          "names",
          "phone numbers",
          "email addresses",
          "job titles",
          "resume / cv uploads",
          "employment history",
          "location",
          "company information (clients)",
          "calendly / appointment data",
          "cookies & analytics",
          "ip address",
          "device/browser info",
          "contact forms Sensitive Information. We do not process sensitive information. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information. Information automatically collected In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services. We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: https://www.rudrongts.com/cookie-policy. The information we collect includes:",
          "Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called \"crash dumps\"), and hardware settings).",
          "Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.",
          "Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.",
          "Pages visited.",
          "Time spent.",
          "Referring website. Information collected from other sources In Short: We may collect limited data from public databases, marketing partners, and other outside sources. In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion."
        ]
      }
    ]
  },
  {
    "id": "section-2",
    "title": "2. How Do We Process Your Information?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent. We process your personal information for a variety of reasons, depending on how you interact with our Services, including:"
      },
      {
        "type": "list",
        "items": [
          "To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.",
          "To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.",
          "To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.",
          "To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.",
          "To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see \"WHAT ARE YOUR PRIVACY RIGHTS?\" below.",
          "To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.",
          "To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.",
          "To determine the effectiveness of our marketing and promotional campaigns. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.",
          "To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.",
          "Candidate evaluation and recruitment processes.",
          "Job placement and talent acquisition services.",
          "Interview coordination and communication.",
          "Client hiring support and workforce solutions.",
          "Business development and relationship management.",
          "Career opportunity notifications.",
          "Candidate sourcing, recruitment, talent acquisition, and workforce placement services.. We use personal information to identify, evaluate, communicate with, and connect qualified candidates with employers. This information also helps us provide recruitment, staffing, hiring support, interview coordination, and workforce solutions to our clients and candidates."
        ]
      }
    ]
  },
  {
    "id": "section-3",
    "title": "3. What Legal Bases Do We Rely on to Process Your Information?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests. If you are located in the EU or UK, this section applies to you. The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:"
      },
      {
        "type": "list",
        "items": [
          "Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.",
          "Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.",
          "Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:",
          "Send users information about special offers and discounts on our products and services",
          "Analyze how our Services are used so we can improve them to engage and retain users",
          "Support our marketing activities",
          "Diagnose problems and/or prevent fraudulent activities",
          "Understand how our users use our products and services so we can improve user experience",
          "In order to connect qualified candidates with employers, support recruitment and hiring processes, maintain talent pipelines, and provide efficient staffing and workforce solutions to clients.",
          "Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.",
          "Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person. If you are located in Canada, this section applies to you. We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:",
          "If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way",
          "For investigations and fraud detection and prevention",
          "For business transactions provided certain conditions are met",
          "If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim",
          "For identifying injured, ill, or deceased persons and communicating with next of kin",
          "If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse",
          "If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province",
          "If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records",
          "If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced",
          "If the collection is solely for journalistic, artistic, or literary purposes",
          "If the information is publicly available and is specified by the regulations",
          "We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments"
        ]
      }
    ]
  },
  {
    "id": "section-4",
    "title": "4. When and With Whom Do We Share Your Personal Information?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We may share information in specific situations described in this section and/or with the following categories of third parties. Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents (\"third parties\") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:"
      },
      {
        "type": "list",
        "items": [
          "Communication & Collaboration Tools",
          "Data Analytics Services",
          "Data Storage Service Providers",
          "Sales & Marketing Tools",
          "Social Networks",
          "Website Hosting Service Providers",
          "Performance Monitoring Tools",
          "Cloud Computing Services",
          "Recruitment Clients / Hiring Companies",
          "Scheduling / Appointment Management Services",
          "Recruitment Management / ATS / CRM Systems We also may need to share your personal information in the following situations:",
          "Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
          "Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions."
        ]
      }
    ]
  },
  {
    "id": "section-5",
    "title": "5. Do We Use Cookies and Other Tracking Technologies?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We may use cookies and other tracking technologies to collect and store your information. We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions. We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites. To the extent these online tracking technologies are deemed to be a \"sale\"/\"sharing\" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section \"DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?\" Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: https://www.rudrongts.com/cookie-policy. Google Analytics We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit https://tools.google.com/dlpage/gaoptout. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page."
      }
    ]
  },
  {
    "id": "section-6",
    "title": "6. Is Your Information Transferred Internationally?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We may transfer, store, and process your information in countries other than your own. Our servers are located in India. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see \"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?\" above), including facilities in the United States, United Arab Emirates, Canada, Germany, Ireland, United Kingdom, and other countries. If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law. European Commission's Standard Contractual Clauses: We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations.Our Standard Contractual Clauses can be provided upon request.We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request."
      }
    ]
  },
  {
    "id": "section-7",
    "title": "7. How Long Do We Keep Your Information?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 3 years. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible."
      }
    ]
  },
  {
    "id": "section-8",
    "title": "8. How Do We Keep Your Information Safe?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment."
      }
    ]
  },
  {
    "id": "section-9",
    "title": "9. Do We Collect Information From Minors?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction. We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at contact@rudrongts.com."
      }
    ]
  },
  {
    "id": "section-10",
    "title": "10. What Are Your Privacy Rights?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information.You may review, change, or terminate your account at any time, depending on your country, province, or state of residence. In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section \"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\" below. We will consider and act upon any request in accordance with applicable data protection laws. If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority. If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner. Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section \"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\" below. However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by replying \"STOP\" or \"UNSUBSCRIBE\" to the SMS messages that we send, or by contacting us using the details provided in the section \"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties. Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice: https://www.rudrongts.com/cookie-policy. If you have questions or comments about your privacy rights, you may email us at contact@rudrongts.com."
      }
    ]
  },
  {
    "id": "section-11",
    "title": "11. Controls for Do-Not-Track Features",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (\"DNT\") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice. California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time."
      }
    ]
  },
  {
    "id": "section-12",
    "title": "12. Do United States Residents Have Specific Privacy Rights?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below. Categories of Personal Information We Collect The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section \"WHAT INFORMATION DO WE COLLECT?\" Category Examples Collected A. Identifiers Contact details, such as real name, alias, postal address, telephone or mobile contact YES number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name B. Personal information as Name, contact information, defined in the California education, employment, Customer Records statute employment history, and financial YES information C. Protected classification Gender, age, date of birth, race characteristics under state or and ethnicity, national origin, federal law marital status, and other YES demographic data D. Commercial information Transaction information, purchase history, financial details, and payment information NO E. Biometric information Fingerprints and voiceprints NO F. Internet or other similar Browsing history, search history, network activity online behavior, interest data, and interactions with our and other YES websites, applications, systems, and advertisements G. Geolocation data Device location YES H. Audio, electronic, sensory, or Images and audio, video or call similar information recordings created in connection with our business activities NO I. Professional or employment- Business contact details in order related information to provide you our Services at a business level or job title, work YES history, and professional qualifications if you apply for a job with us J. Education Information Student records and directory information NO K. Inferences drawn from Inferences drawn from any of the collected personal information collected personal information listed above to create a profile or NO summary about, for example, an individual’s preferences and characteristics L. Sensitive personal Information NO We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:"
      },
      {
        "type": "list",
        "items": [
          "Receiving help through our customer support channels;",
          "Participation in customer surveys or contests; and",
          "Facilitation in the delivery of our Services and to respond to your inquiries. We will use and retain the collected personal information as needed to provide the Services or for:",
          "Category A - 3 years",
          "Category B - 3 years",
          "Category C - 3 years",
          "Category F - 1 year",
          "Category G - 1 year",
          "Category I - 3 years Sources of Personal Information Learn more about the sources of personal information we collect in \"WHAT INFORMATION DO WE COLLECT?\" How We Use and Share Personal Information Learn more about how we use your personal information in the section, \"HOW DO WE PROCESS YOUR INFORMATION?\" We collect and share your personal information through:",
          "Targeting cookies/Marketing cookies",
          "Social media cookies",
          "Beacons/Pixels/Tags Will your information be shared with anyone else? We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, \"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?\" We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be \"selling\" of your personal information. We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:",
          "Category A. Identifiers",
          "Category B. Personal information as defined in the California Customer Records law",
          "Category C. Characteristics of protected classifications under state or federal law",
          "Category F. Internet or other electronic network activity information",
          "Category G. Geolocation data",
          "Category I. Professional or employment-related information The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under \"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?\" Your Rights You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:",
          "Right to know whether or not we are processing your personal data",
          "Right to access your personal data",
          "Right to correct inaccuracies in your personal data",
          "Right to request the deletion of your personal data",
          "Right to obtain a copy of the personal data you previously shared with us",
          "Right to non-discrimination for exercising your rights",
          "Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (\"profiling\") Depending upon the state where you live, you may also have the following rights:",
          "Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)",
          "Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)",
          "Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)",
          "Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)",
          "Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)",
          "Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)",
          "Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida) How to Exercise Your Rights To exercise these rights, you can contact us by visiting https://www.rudrongts.com/contact, by emailing us at contact@rudrongts.com, by visiting https://www.rudrongts.com/contact, or by referring to the contact details at the bottom of this document. Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws. Request Verification Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf. Appeals Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at contact@rudrongts.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general. California \"Shine The Light\" Law California Civil Code Section 1798.83, also known as the \"Shine The Light\" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section \"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?\""
        ]
      }
    ]
  },
  {
    "id": "section-13",
    "title": "13. Do Other Regions Have Specific Privacy Rights?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: You may have additional rights based on the country you reside in. Australia and New Zealand We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act). This Privacy Notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information. If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:"
      },
      {
        "type": "list",
        "items": [
          "offer you the products or services that you want",
          "respond to or help with your requests At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section \"HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?\" If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner. Republic of South Africa At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section \"HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?\" If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are: The Information Regulator (South Africa) General enquiries: enquiries@inforegulator.org.za Complaints (complete POPIA/PAIA form 5): PAIAComplaints@inforegulator.org.za & POPIAComplaints@inforegulator.org.za"
        ]
      }
    ]
  },
  {
    "id": "section-14",
    "title": "14. Do We Make Updates to This Notice?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws. We may update this Privacy Notice from time to time. The updated version will be indicated by an updated \"Revised\" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information."
      }
    ]
  },
  {
    "id": "section-15",
    "title": "15. How Can You Contact Us About This Notice?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "If you have questions or comments about this notice, you may email us at contact@rudrongts.com or contact us by post at: RUDRON Global Talent Solutions"
      }
    ]
  },
  {
    "id": "section-16",
    "title": "16. How Can You Review, Update, or Delete the Data We Collect From You?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: https://www.rudrongts.com/contact."
      }
    ]
  }
];

function PolicyBlocks({ blocks }: { blocks: PolicyBlock[] }) {
  return (
    <div className="space-y-4 text-[15px] leading-7 text-[#444444]">
      {blocks.map((block, index) => {
        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2 pl-1">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-[#C89B3C]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3 key={index} className="pt-2 text-base font-bold text-[#1A1A2E]">
              {block.text}
            </h3>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <header className="bg-[#1A1A2E] px-6 py-32 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C89B3C]">
            Legal
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-14 lg:flex lg:gap-12">
          <aside className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border border-gray-100 bg-[#F8F7F4] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                Contents
              </p>
              <nav aria-label="Privacy policy contents">
                <ul className="space-y-2.5">
                  {policySections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-[13px] leading-5 text-[#555555] transition-colors hover:text-[#C89B3C]"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <article className="min-w-0 flex-1">
            <section className="mb-12 rounded-2xl border border-gray-100 bg-[#F8F7F4] p-6 md:p-8">
              <p className="mb-4 text-[15px] leading-7 text-[#444444]">
                This Privacy Notice for RUDRON Global Talent Solutions LLP, doing business as RUDRON GTS
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), explains how and why we may access,
                collect, store, use, and share your personal information when you use our Services.
              </p>
              <ul className="space-y-2 text-[15px] leading-7 text-[#444444]">
                <li className="flex gap-3"><span className="font-bold text-[#C89B3C]">•</span><span>Visit <a href="https://www.rudrongts.com" className="text-[#C89B3C] underline underline-offset-2">www.rudrongts.com</a> or another website that links to this Privacy Notice.</span></li>
                <li className="flex gap-3"><span className="font-bold text-[#C89B3C]">•</span><span>Use our global AEC and MEP recruitment, talent acquisition, staffing, hiring support, workforce consulting, and career opportunity services.</span></li>
                <li className="flex gap-3"><span className="font-bold text-[#C89B3C]">•</span><span>Engage with us in other related ways, including marketing communications or events.</span></li>
              </ul>
              <p className="mt-4 text-[15px] leading-7 text-[#444444]">
                If you do not agree with our policies and practices, please do not use our Services. Questions may be sent to <a href="mailto:contact@rudrongts.com" className="text-[#C89B3C] underline underline-offset-2">contact@rudrongts.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 border-b-2 border-[#C89B3C] pb-2 text-xl font-bold text-[#1A1A2E]">
                Summary of Key Points
              </h2>
              <div className="space-y-3 text-[15px] leading-7 text-[#444444]">
                <p><strong>Information processed:</strong> Information depends on how you interact with us, the Services you use, and the choices you make.</p>
                <p><strong>Sensitive information:</strong> We do not intentionally process sensitive personal information.</p>
                <p><strong>Third-party sources:</strong> We may obtain limited information from public databases, marketing partners, social media platforms, data providers, and other outside sources.</p>
                <p><strong>Purposes:</strong> We process information to provide and improve Services, communicate with you, support recruitment and hiring, maintain security, prevent fraud, and comply with law.</p>
                <p><strong>Sharing:</strong> We share personal information only in the situations and with the categories of recipients described below.</p>
                <p><strong>Your rights:</strong> Your rights depend on the privacy laws applicable where you reside.</p>
              </div>
            </section>

            {policySections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <h2 className="mb-4 border-b-2 border-[#C89B3C] pb-2 text-xl font-bold text-[#1A1A2E]">
                  {section.title}
                </h2>
                <PolicyBlocks blocks={section.blocks} />
              </section>
            ))}
          </article>
        </div>
      </main>

    </>
  );
}