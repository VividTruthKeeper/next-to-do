"use client";
import { useContext, useRef } from "react";

import ModalWrapper from "./ModalWrapper";
import GlobalContext from "@/context/GlobalContext";

const AddCategory = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useContext(GlobalContext).modalContext.category;
  return (
    <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} elementRef={ref}>
      <div
        ref={ref}
        className="max-w-[500px] max-h-[450px] w-full h-full rounded-[10px] border-2 border-white bg-[#54BAB9] dark:bg-[#354259] transition-all"
      ></div>
    </ModalWrapper>
  );
};

export default AddCategory;
