import { ContextValues } from "./interfaces";
import { useState, createContext, ReactNode } from "react";
import { handleGetLogged } from "./helpers";

const AppContext = createContext<ContextValues>({ isLogged: null });

interface Props {
  children: ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean | null>(handleGetLogged());

  const values: ContextValues = {
    isLogged,
    setIsLogged,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, ContextProvider };
