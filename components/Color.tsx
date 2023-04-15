"use client";

import GlobalContext from "@/context/GlobalContext";
import { IColor } from "@/typings/color.type";
import { useContext } from "react";
import { ColorPicker } from "react-color-palette";
const Color = () => {
  const { color, setColor }: IColor = useContext(GlobalContext).colorContext;
  console.log(color);
  return (
    <div>
      <ColorPicker color={color} onChange={setColor} width={400} height={200} />
    </div>
  );
};

export default Color;
