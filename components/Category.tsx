// import { RandomColor } from "@/classes/RandomColor";
import { ICategory } from "@/typings/category.type";

const Category = ({ title, color }: ICategory) => {
  // const randomColor = new RandomColor();
  return (
    <p
      style={{ backgroundColor: color }}
      className={` rounded-[10px] text-xl text-white text-center min-w-[200px] w-full block`}
    >
      {title}
    </p>
  );
};

export default Category;
