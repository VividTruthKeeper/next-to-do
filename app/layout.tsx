"use client";
import { useState, useMemo } from "react";
import "./globals.css";
import { ITheme } from "@/typings/theme.type";
import GlobalContext from "@/context/GlobalContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme["theme"]>("light");
  const themeContext: ITheme = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  return (
    <html lang="en" className={theme}>
      <head />
      <body>
        <GlobalContext.Provider value={{ themeContext }}>
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
