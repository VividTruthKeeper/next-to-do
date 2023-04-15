"use client";
import { useState, useMemo } from "react";
import "./globals.css";
import { ITheme } from "@/typings/theme.type";
import GlobalContext from "@/context/GlobalContext";
import { useColor } from "react-color-palette";
import { IColor } from "@/typings/color.type";
import { IModal } from "@/typings/modal.type";
import { IContext } from "@/typings/context.type";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme["theme"]>("light");
  const [color, setColor] = useColor("hex", "#121212");
  const [categoryOpen, setCategoryOpen] = useState<IModal["isOpen"]>(false);
  const [taskOpen, setTaskOpen] = useState<IModal["isOpen"]>(false);

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
  return (
    <html lang="en" className={theme}>
      <head />
      <body>
        <GlobalContext.Provider
          value={{ themeContext, colorContext, modalContext }}
        >
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
