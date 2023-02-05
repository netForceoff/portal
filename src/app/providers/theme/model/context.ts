import { createContext } from "react";
import { IContext } from "../types/types";

const Context = createContext<IContext>({});

export default Context;