import { v4 } from "uuid";
import Category from "./Category";

const Categories = () => {
  const tempList = ["Completed", "Urgent", "Important", "Later", "To study"];
  return (
    <div className="bg-[#54BAB9] dark:bg-[#354259] transition-all flex flex-col gap-[25px] p-6 rounded-[10px] border-b-[4px] border-b-[#44A0A0] dark:border-b-[#38938A] justify-between h-full">
      <div className="flex flex-col gap-[25px]">
        <h6 className="text-white text-xl text-center font-semibold">
          Categories
        </h6>
        <div className="flex flex-col gap-[10px] justify-self-start">
          {tempList.map((name) => (
            <Category name={name} key={v4()} />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="px-3 py-2 bg-[#38938A] dark:bg-[#44A0A0] rounded-[10px] text-white font-extrabold transition-all"
      >
        Add category
      </button>
    </div>
  );
};

export default Categories;
