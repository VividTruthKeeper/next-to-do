// import { RandomColor } from "@/classes/RandomColor";
import GlobalContext from "@/context/GlobalContext";
import { ICategory } from "@/typings/category.type";
import { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Category = ({ title, color }: ICategory) => {
  // const randomColor = new RandomColor();
  const { categories, setCategories } =
    useContext(GlobalContext).categoriesContext;
  const [trash, setTrash] = useState<boolean>(false);
  return (
    <div
      className="grid grid-cols-animatable"
      onMouseOver={() => setTrash(true)}
      onMouseLeave={() => setTrash(false)}
    >
      <p
        style={{ backgroundColor: color }}
        className={`rounded-[10px] text-xl text-white text-center min-w-[200px] w-full block pointer-events-none`}
      >
        {title}
      </p>
      <div
        onClick={() => {
          const filtered = categories.filter(
            (category) => category.title !== title
          );
          setCategories(filtered);
        }}
        className={`cursor-pointer py-2 h-8 bg-[#38938A] dark:bg-[#54BAB9] rounded-[10px] flex justify-center  transition-all overflow-hidden ${
          trash ? "px-3 w-full" : "px-0 w-0"
        }`}
      >
        <FaTrashAlt height={8} />
      </div>
    </div>
  );
};

export default Category;
