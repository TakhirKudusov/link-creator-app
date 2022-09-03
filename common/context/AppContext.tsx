import { ContextValues } from "./interfaces";
import { useState, createContext, ReactNode } from "react";
import { handleGetLogged } from "./helpers";

const AppContext = createContext<ContextValues>({ accessToken: null });

interface Props {
  children: ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    handleGetLogged()
  );

  const values: ContextValues = {
    accessToken,
    setAccessToken,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, ContextProvider };
