"use client";
import { useState, useMemo } from "react";
import { v4 } from "uuid";
import "./globals.css";
import { ITheme } from "@/typings/theme.type";
import GlobalContext from "@/context/GlobalContext";
import { useColor } from "react-color-palette";
import { IColor } from "@/typings/color.type";
import { IModal } from "@/typings/modal.type";
import { IContext } from "@/typings/context.type";
import { ICategory } from "@/typings/category.type";
import { ITask } from "@/typings/task.type";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme["theme"]>("light");
  const [color, setColor] = useColor("hex", "#121212");
  const [categoryOpen, setCategoryOpen] = useState<IModal["isOpen"]>(false);
  const [taskOpen, setTaskOpen] = useState<IModal["isOpen"]>(false);
  const [categories, setCategories] = useState<ICategory[]>([
    { color: "#e41e1e", title: "Important" },
    { color: "#3ed267", title: "Completed" },
  ]);
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: v4(),
      category: { color: "red", title: "Urgent" },
      name: "Memorize the fifty states and their capitals",
      completed: true,
    },
    {
      id: v4(),
      category: { color: "green", title: "Completed" },
      name: "Memorize the fifty states and their capitals",
      completed: false,
    },
    {
      id: v4(),
      category: { color: "purple", title: "Later" },
      name: "Memorize the fifty states and their capitals",
      completed: true,
    },
  ]);

  const themeContext: ITheme = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );
  const colorContext: IColor = useMemo(
    () => ({ color, setColor }),
    [color, setColor]
  );
  const categoryContext: IModal = useMemo(
    () => ({ isOpen: categoryOpen, setIsOpen: setCategoryOpen }),
    [categoryOpen, setCategoryOpen]
  );
  const taskContext: IModal = useMemo(
    () => ({ isOpen: taskOpen, setIsOpen: setTaskOpen }),
    [taskOpen, setTaskOpen]
  );
  const modalContext: IContext["modalContext"] = {
    category: categoryContext,
    task: taskContext,
  };
  const categoriesContext = useMemo(
    () => ({ categories, setCategories }),
    [categories, setCategories]
  );
  const tasksContext = useMemo(() => ({ tasks, setTasks }), [tasks, setTasks]);

  return (
    <html lang="en" className={theme}>
      <head />
      <body>
        <GlobalContext.Provider
          value={{
            themeContext,
            colorContext,
            modalContext,
            categoriesContext,
            tasksContext,
          }}
        >
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
