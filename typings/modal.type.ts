import { Dispatch, SetStateAction } from "react";

export interface IModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
