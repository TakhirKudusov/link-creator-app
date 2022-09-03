import { Dispatch, SetStateAction } from "react";

export interface ContextValues {
  isLogged: boolean | null;
  setIsLogged?: Dispatch<SetStateAction<boolean | null>>;
}
