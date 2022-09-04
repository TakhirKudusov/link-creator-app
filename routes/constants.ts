import { PathNames } from "../common/interfaces/interfaces";

export enum Page {
  HOME,
  LOGIN,
}

export const paths = {
  [Page.HOME]: "/",
  [Page.LOGIN]: "/login",
};

export const pathNames: PathNames = {
  "/": "Statistics",
  "/login": "Login",
};
