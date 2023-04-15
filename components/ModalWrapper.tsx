"use client";
import { Dispatch, RefObject, SetStateAction } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  elementRef: RefObject<HTMLElement>;
}

const ModalWrapper = ({ children, isOpen, setIsOpen, elementRef }: IProps) => {
  useOnClickOutside(elementRef, () => setIsOpen(false));
  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 w-[100vw] h-screen bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-sm transition-all ${
        isOpen
          ? "opacity-100 pointer-events-[all]"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
