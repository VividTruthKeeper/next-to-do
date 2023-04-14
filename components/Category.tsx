import { RandomColor } from "@/classes/RandomColor";
import { ICategory } from "@/typings/category.type";

const Category = ({ name }: ICategory) => {
  const randomColor = new RandomColor();
  return (
    <p
      style={{ background: randomColor.getColor() }}
      className={`rounded-[10px] text-xl text-white text-center min-w-[200px] w-full block`}
    >
      {name}
    </p>
  );
};

export default Category;
