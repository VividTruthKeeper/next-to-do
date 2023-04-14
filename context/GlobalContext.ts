import { IContext } from "@/typings/context.type";
import { createContext } from "react";

const GlobalContext = createContext<IContext>({} as IContext);

export default GlobalContext;
