import { useColor } from "react-color-palette";

export interface IColor {
  color: ReturnType<typeof useColor>[0];
  setColor: ReturnType<typeof useColor>[1];
}
