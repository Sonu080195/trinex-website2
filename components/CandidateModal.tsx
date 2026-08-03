"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  Link as LinkIcon,
  Loader2,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Upload,
  User,
  X,
} from "lucide-react";

interface CandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export default function CandidateModal({
  isOpen,
  onClose,
}: CandidateModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(true);
      closeButtonRef.current?.focus();
    }, 20);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) return;

    setVisible(false);

    const timer = window.setTimeout(() => {
      setSubmitted(false);
      setSubmitting(false);
      setFileName("");
      setError("");
      formRef.current?.reset();
    }, 300);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, submitting]);

  const closeModal = () => {
    if (!submitting) {
      onClose();
    }
  };

  const validateFile = (file: File) => {
    const extension = file.name
      .slice(file.name.lastIndexOf("."))
      .toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return "Please upload a PDF, DOC, or DOCX resume.";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "Your resume must be smaller than 10 MB.";
    }

    return "";
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      setFileName("");
      return;
    }

    const validationError = validateFile(file);

    if (validationError) {
      setError(validationError);
      setFileName("");
      event.target.value = "";
      return;
    }

    setError("");
    setFileName(file.name);
  };

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting) return;

    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");

    if (!(attachment instanceof File) || attachment.size === 0) {
      setError("Please upload your resume before submitting.");
      return;
    }

    const validationError = validateFile(attachment);

    if (validationError) {
      setError(validationError);
      return;
    }

    formData.set("type", "candidate_profile");
    setSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      let data: { error?: string } = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Submission failed. Please try again."
        );
      }

      setSubmitted(true);
      form.reset();
      setFileName("");
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again.";

      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <button
        type="button"
        aria-label="Close candidate profile form"
        className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-md transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={closeModal}
        tabIndex={-1}
      />

      <div
        className="absolute right-0 top-0 flex h-[100dvh] w-full flex-col overflow-hidden border-l border-white/10 bg-[#07111F] shadow-[0_0_80px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out sm:max-w-[520px]"
        style={{
          transform: visible
            ? "translateX(0)"
            : "translateX(100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.14),transparent_42%)]" />

        <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-80 w-80 rounded-full bg-[#C89B3C]/10 blur-[110px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,155,60,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,155,60,1) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        <div className="pointer-events-none absolute bottom-20 left-0 top-20 w-[2px] bg-gradient-to-b from-transparent via-[#C89B3C]/45 to-transparent" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeModal}
          disabled={submitting}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#07111F]/80 text-white backdrop-blur-md transition-all duration-300 hover:border-[#C89B3C]/50 hover:bg-white/10 hover:text-[#C89B3C] disabled:cursor-not-allowed disabled:opacity-50 sm:right-5 sm:top-5"
          aria-label="Close candidate profile form"
        >
          <X size={18} />
        </button>

        <div className="relative z-10 flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-7 sm:pt-7">
          {submitted ? (
            <div className="flex min-h-full flex-col items-center justify-center py-14 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#C89B3C]/25 bg-[#C89B3C]/15 shadow-[0_15px_45px_rgba(200,155,60,0.14)] animate-[candidateModalPop_500ms_cubic-bezier(0.34,1.56,0.64,1)]">
                <CheckCircle2
                  size={36}
                  className="text-[#C89B3C]"
                />
              </div>

              <h2
                id={titleId}
                className="mb-3 text-[30px] font-bold text-white"
              >
                Profile Submitted
              </h2>

              <p
                id={descriptionId}
                className="mx-auto mb-8 max-w-sm text-[14px] leading-7 text-gray-400"
              >
                Our recruitment team will review your profile and
                contact you regarding suitable opportunities.
              </p>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-2xl bg-[#C89B3C] px-9 py-3.5 font-bold text-[#07111F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D6AB52] hover:shadow-[0_10px_28px_rgba(200,155,60,0.34)]"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-7 pr-12 pt-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#C89B3C]" />

                  <div className="inline-flex items-center gap-2">
                    <Sparkles
                      size={13}
                      className="text-[#C89B3C]"
                    />

                    <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C89B3C]">
                      Candidate Inquiry
                    </p>
                  </div>
                </div>

                <h2
                  id={titleId}
                  className="mb-3 text-[29px] font-bold leading-[1.05] text-white sm:text-[36px]"
                >
                  Advance Your
                  <br />
                  <span className="bg-gradient-to-r from-[#C89B3C] to-[#E0B55D] bg-clip-text text-transparent">
                    Career Journey.
                  </span>
                </h2>

                <p
                  id={descriptionId}
                  className="text-[14px] leading-6 text-gray-400"
                >
                  Submit your profile and connect with relevant
                  opportunities across construction, engineering and
                  MEP markets.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                <IconInput
                  icon={User}
                  name="full_name"
                  label="Full name"
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                />

                <IconInput
                  icon={BriefcaseBusiness}
                  name="desired_role"
                  label="Desired role"
                  placeholder="Desired Role"
                  required
                />

                <IconInput
                  icon={Mail}
                  name="email"
                  label="Email address"
                  placeholder="Email Address"
                  type="email"
                  autoComplete="email"
                  required
                />

                <IconInput
                  icon={Phone}
                  name="phone"
                  label="Phone number"
                  placeholder="Phone Number"
                  type="tel"
                  autoComplete="tel"
                />

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  <LocationInput
                    icon={MapPin}
                    name="city"
                    label="City"
                    placeholder="City"
                    autoComplete="address-level2"
                  />

                  <LocationInput
                    icon={MapPin}
                    name="state"
                    label="State"
                    placeholder="State"
                    autoComplete="address-level1"
                  />

                  <LocationInput
                    icon={Globe2}
                    name="country"
                    label="Country"
                    placeholder="Country"
                    autoComplete="country-name"
                  />
                </div>

                <IconInput
                  icon={LinkIcon}
                  name="linkedin"
                  label="LinkedIn profile URL"
                  placeholder="LinkedIn Profile URL"
                  type="url"
                  autoComplete="url"
                />

                <label className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-dashed border-white/15 bg-white/[0.035] px-4 py-4 transition-all duration-300 hover:border-[#C89B3C]/50 hover:bg-white/[0.05]">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C89B3C]/10 transition-colors duration-300 group-hover:bg-[#C89B3C]/20">
                      {fileName ? (
                        <FileText
                          size={17}
                          className="text-[#C89B3C]"
                        />
                      ) : (
                        <Upload
                          size={17}
                          className="text-[#C89B3C]"
                        />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-white">
                        {fileName || "Upload Resume"}
                      </p>

                      <p className="mt-0.5 text-[11px] text-gray-500">
                        PDF, DOC or DOCX · Maximum 10 MB
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-[12px] font-semibold text-[#C89B3C]">
                    Browse
                  </span>

                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    required
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>

                <label className="block">
                  <span className="sr-only">
                    Experience, expertise or career goals
                  </span>

                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your experience, expertise, or career goals..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-[14px] text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-[#C89B3C]/45 focus:bg-white/[0.05]"
                  />
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <input
                    type="checkbox"
                    name="consent"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#C89B3C]"
                  />

                  <span className="text-[12px] leading-6 text-gray-400">
                    I consent to RUDRON Global Talent Solutions
                    storing and processing my personal information
                    for recruitment purposes.
                  </span>
                </label>

                <div className="flex items-center gap-2 text-[11px] text-gray-500">
                  <LockKeyhole
                    size={13}
                    className="shrink-0 text-[#C89B3C]"
                  />
                  Your profile and resume are handled confidentially.
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-[13px] leading-5 text-red-300"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative w-full overflow-hidden rounded-2xl bg-[#C89B3C] py-4 font-bold text-[#07111F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D6AB52] hover:shadow-[0_10px_30px_rgba(200,155,60,0.34)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? (
                      <>
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Profile
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </span>

                  <span className="absolute inset-0 -translate-x-[120%] skew-x-12 bg-white/15 transition-transform duration-500 group-hover:translate-x-[120%]" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes candidateModalPop {
          from {
            opacity: 0;
            transform: scale(0.5);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>,
    document.body
  );
}

function IconInput({
  icon: Icon,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
}: {
  icon: typeof User;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>

      <Icon
        size={16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]"
      />

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="h-[50px] w-full rounded-xl border border-white/10 bg-white/[0.035] pl-11 pr-4 text-[14px] text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-[#C89B3C]/45 focus:bg-white/[0.05]"
      />
    </label>
  );
}

function LocationInput({
  icon: Icon,
  name,
  label,
  placeholder,
  autoComplete,
}: {
  icon: typeof MapPin;
  name: string;
  label: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>

      <Icon
        size={14}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#C89B3C]"
      />

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-[48px] w-full rounded-xl border border-white/10 bg-white/[0.035] pl-9 pr-3 text-[13px] text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-[#C89B3C]/45 focus:bg-white/[0.05]"
      />
    </label>
  );
}