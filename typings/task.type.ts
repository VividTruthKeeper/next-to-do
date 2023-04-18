import { Dispatch, SetStateAction } from "react";
import { ICategory } from "./category.type";

export interface ITask {
  id: string;
  completed?: boolean;
  name: string;
  category: ICategory;
}

export interface ITaskContext {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITaskContext["tasks"]>>;
}
