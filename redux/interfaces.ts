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
