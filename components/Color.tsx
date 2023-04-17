"use client";

import GlobalContext from "@/context/GlobalContext";
import { IColor } from "@/typings/color.type";
import { useContext } from "react";
import { ColorPicker } from "react-color-palette";
const Color = () => {
  const { color, setColor }: IColor = useContext(GlobalContext).colorContext;
  return (
    <div>
      <ColorPicker
        color={color}
        onChange={setColor}
        width={227}
        height={130}
        hideHSV
        hideRGB
      />
    </div>
  );
};

export default Color;
