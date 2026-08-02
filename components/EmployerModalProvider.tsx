"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import EmployerModal from "@/components/EmployerModal";

type EmployerModalContextType = {
  openEmployerModal: () => void;
  closeEmployerModal: () => void;
};

const EmployerModalContext =
  createContext<EmployerModalContextType | null>(null);

export default function EmployerModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openEmployerModal = () => setIsOpen(true);
  const closeEmployerModal = () => setIsOpen(false);

  return (
    <EmployerModalContext.Provider
      value={{
        openEmployerModal,
        closeEmployerModal,
      }}
    >
      {children}

      <EmployerModal
        isOpen={isOpen}
        onClose={closeEmployerModal}
      />
    </EmployerModalContext.Provider>
  );
}

export function useEmployerModal() {
  const context = useContext(EmployerModalContext);

  if (!context) {
    throw new Error(
      "useEmployerModal must be used inside EmployerModalProvider"
    );
  }

  return context;
}