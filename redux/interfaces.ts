import { DataType } from "../components/home/interfaces";

export interface UserArgs {
  username: string;
  password: string;
}

export interface PostReq {
  url: string;
  method: "POST";
  headers?: {
    [key: string]: string;
  };
  body?: UserArgs | string;
}

export interface TAccessTokenState {
  accessToken: string | null;
}

export interface TUsernameState {
  username: string | null;
}

export interface TOpenModalState {
  isOpen: boolean;
}

export interface TFilterState {
  filter: string;
}

export interface TDataState {
  data: DataType[];
}

export interface TFormParametersState {
  currentPage: number;
  isLoading: boolean;
}
