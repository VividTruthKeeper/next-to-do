"use client";
import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";

import ModalWrapper from "./ModalWrapper";
import GlobalContext from "@/context/GlobalContext";
import Color from "./Color";
import { IContext } from "@/typings/context.type";

const AddCategory = () => {
  const ref = useRef<HTMLFormElement>(null);
  const context = useContext<IContext>(GlobalContext);
  const { isOpen, setIsOpen } = context.modalContext.category;
  const { color } = context.colorContext;
  const { categories, setCategories } = context.categoriesContext;
  const [input, setInput] = useState<string>("");
  return (
    <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} elementRef={ref}>
      <form
        onSubmit={(e: FormEvent) => {
          setCategories([...categories, { color: color.hex, title: input }]);
          e.preventDefault();
          setIsOpen(false);
        }}
        ref={ref}
        className="flex flex-col items-center gap-9 max-w-[500px] max-h-fit w-full h-fit rounded-[10px] p-6 border-2 border-white bg-[#54BAB9] dark:bg-[#354259] transition-all"
      >
        <div className="flex flex-col gap-5">
          <h5 className="uppercase text-center text-xl font-bold text-white">
            Create Category
          </h5>
          <input
            value={input}
            type="text"
            name="category"
            id="category"
            placeholder="Category name"
            className="p-2 text-xl placeholder:text-[#858585] text-[#858585] rounded-[10px]"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
        </div>
        <div className="flex gap-5">
          <Color />
          <div className="w-full flex flex-col gap-2">
            <h6 className=" text-lg font-bold text-center text-white">
              Preview
            </h6>
            <span className="text-white text-base font-semibold">Color:</span>
            <div
              id="color"
              className="w-full h-20"
              style={{ background: color.hex }}
            ></div>
            <span className="text-white text-base font-semibold">
              Category:
            </span>
            <p
              className="rounded-[10px] text-xl text-white text-center min-w-[200px] w-full block"
              style={{ background: color.hex }}
            >
              {input.length > 0 ? input : "Category name"}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className=" uppercase font-bold rounded-[10px] border-2 border-[#38938A] text-[#38938A] text-xl bg-white max-w-[182px] py-1 px-2"
        >
          Add Category
        </button>
      </form>
    </ModalWrapper>
  );
};

export default AddCategory;
