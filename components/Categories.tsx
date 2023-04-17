"use client";
import { v4 } from "uuid";
import Category from "./Category";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

const Categories = () => {
  const context = useContext(GlobalContext);
  const { isOpen, setIsOpen } = context.modalContext.category;
  const { categories } = context.categoriesContext;
  return (
    <div className="w-72 bg-secondary dark:bg-[#354259] transition-all flex flex-col gap-[25px] p-6 rounded-[10px] border-b-[4px] border-b-[#44A0A0] dark:border-b-main justify-between h-full">
      <div className="flex flex-col gap-[25px]">
        <h6 className="text-white text-xl text-center font-semibold">
          Categories
        </h6>
        <div className="flex flex-col gap-[10px] justify-self-start">
          {categories.map((category) => (
            <Category
              title={category.title}
              color={category.color}
              key={v4()}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 bg-main dark:bg-[#44A0A0] rounded-[10px] text-white font-extrabold transition-all"
      >
        Add category
      </button>
    </div>
  );
};

export default Categories;
