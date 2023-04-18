import { ITheme } from "./theme.type";
import { IColor } from "./color.type";
import { IModal } from "./modal.type";
import { ICategoryContext } from "./category.type";
import { ITaskContext } from "./task.type";

export interface IContext {
  themeContext: ITheme;
  colorContext: IColor;
  modalContext: {
    category: IModal;
    task: IModal;
  };
  categoriesContext: ICategoryContext;
  tasksContext: ITaskContext;
}
