import { Dispatch, SetStateAction } from "react";

export interface ICategory {
  title: string;
  color: string;
}

export interface ICategoryContext {
  categories: ICategory[];
  setCategories: Dispatch<SetStateAction<ICategoryContext["categories"]>>;
}
