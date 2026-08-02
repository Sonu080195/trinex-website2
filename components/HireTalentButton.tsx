"use client";

import type { ReactNode } from "react";

import { useEmployerModal } from "@/components/EmployerModalProvider";

type HireTalentButtonProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function HireTalentButton({
  children,
  className = "",
  ariaLabel,
}: HireTalentButtonProps) {
  const { openEmployerModal } = useEmployerModal();

  return (
    <button
      type="button"
      onClick={openEmployerModal}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}