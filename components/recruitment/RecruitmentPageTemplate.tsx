import Link from "next/link";
import { RecruitmentPageData } from "./RecruitmentTypes";

type Props = {
  data: RecruitmentPageData;
};

export default function RecruitmentPageTemplate({
  data,
}: Props) {
  return (
    <main className="bg-[#07111F] text-white">

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,60,.18),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <span className="rounded-full border border-[#C89B3C]/30 bg-[#C89B3C]/10 px-4 py-2 text-sm font-semibold text-[#C89B3C]">
            Construction Recruitment Specialists
          </span>

          <h1 className="mt-8 text-5xl font-bold lg:text-7xl">
            {data.heroTitle}
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
            {data.heroDescription}
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-[#C89B3C] px-7 py-4 font-semibold text-[#07111F]"
            >
              Hire {data.role}
            </Link>

            <Link
              href="/jobs"
              className="rounded-xl border border-white/20 px-7 py-4"
            >
              Browse Jobs
            </Link>

          </div>

        </div>

      </section>

      <section className="bg-[#F4F4F0] py-24 text-[#07111F]">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold">
            Industries We Support
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {data.industries.map((industry) => (

              <div
                key={industry}
                className="rounded-xl border p-5"
              >
                {industry}
              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold">
            Key Responsibilities
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {data.responsibilities.map((item) => (

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

      <section className="bg-[#F4F4F0] py-24 text-[#07111F]">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold">
            Interview Questions
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {data.interviewQuestions.map((question) => (

              <div
                key={question}
                className="rounded-xl border p-5"
              >
                {question}
              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">

            {data.faqs.map((faq) => (

              <details
                key={faq.question}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-4 text-gray-400">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}