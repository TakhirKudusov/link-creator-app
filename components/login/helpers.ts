import { Form } from "./types";
import { AppDispatch } from "../../redux/types";

const handleFormSubmit =
  (register: any, login: any, isSignInForm: boolean, dispatch: AppDispatch) =>
  async (form: Form) => {
    if (!isSignInForm) {
      await register(form);
    } else {
      const { username, password, ...rest } = form;
      const reqBody = `username=${username}&password=${password}`;
      await login(reqBody);
    }
  };

const handleGetUsername = (reqArgs: string): string =>
  reqArgs.split("&")[0].split("=")[1];

export { handleFormSubmit, handleGetUsername };
