import { Dispatch, SetStateAction } from "react";

export interface ContextValues {
  accessToken: string | null;
  setAccessToken?: Dispatch<SetStateAction<string | null>>;
}
