"use client";
import { useState, useMemo } from "react";
import "./globals.css";
import { ITheme } from "@/typings/theme.type";
import GlobalContext from "@/context/GlobalContext";
import { useColor } from "react-color-palette";
import { IColor } from "@/typings/color.type";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme["theme"]>("light");
  const [color, setColor] = useColor("hex", "#121212");

  const themeContext: ITheme = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );
  const colorContext: IColor = useMemo(
    () => ({ color, setColor }),
    [color, setColor]
  );

  return (
    <html lang="en" className={theme}>
      <head />
      <body>
        <GlobalContext.Provider value={{ themeContext, colorContext }}>
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
