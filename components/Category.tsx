// import { RandomColor } from "@/classes/RandomColor";
import GlobalContext from "@/context/GlobalContext";
import { ICategory } from "@/typings/category.type";
import { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface IProps extends ICategory {
  trashable?: boolean;
}

const Category = ({ title, color, trashable = true }: IProps) => {
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
          if (trashable) {
            const filtered = categories.filter(
              (category) =>
                !(category.color === color && category.title === title)
            );
            setCategories(filtered);
          }
        }}
        className="cursor-pointer py-1 h-8 bg-main dark:bg-secondary rounded-[10px] flex justify-center items-center  transition-all overflow-hidden px-0 w-0"
        style={
          trash && trashable
            ? { width: 38, padding: "4px 4px" }
            : { width: 0, padding: "4px 0px" }
        }
      >
        <FaTrashAlt height={6} />
      </div>
    </div>
  );
};

export default Category;
