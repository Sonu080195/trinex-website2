export interface RecruitmentPageData {
  slug: string;

  title: string;

  heroTitle: string;

  heroDescription: string;

  metaTitle: string;

  metaDescription: string;

  role: string;

  salaryTitle: string;

  industries: string[];

  responsibilities: string[];

  interviewQuestions: string[];

  faqs: {
    question: string;
    answer: string;
  }[];
}