"use client";
import Image from "next/image";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(GlobalContext).themeContext;
  return (
    <div
      className="fixed top-12 right-12 w-10 h-10"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <div className="relative cursor-pointer w-10 h-10">
        <Image
          src="/sun.svg"
          alt="sun"
          unoptimized
          unselectable="off"
          width={40}
          height={40}
          className={`w-10 h-10 absolute top-0 left-0 object-contain  transition-all ${
            theme === "light"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-9"
          }`}
        />
        <Image
          src="/moon.svg"
          alt="sun"
          unoptimized
          unselectable="off"
          width={40}
          height={40}
          className={`w-10 h-10 absolute top-0 left-0 object-contain  transition-all ${
            theme === "dark"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-9"
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeButton;
