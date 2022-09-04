import { Form } from "./types";
import { handleOpenErrorNotificationHelper } from "../../common/helpers/handleOpenErrorNotification.helper";
import { StatusCodesEnum } from "../../common/enums/StatusCodes.enum";
import { handleOpenSuccessNotificationHelper } from "../../common/helpers/handleOpenSuccessNotification.helper";
import { AppDispatch } from "../../redux/types";
import { setAccessToken } from "../../redux/slicers/accessTokenSlicer";

const handleRespStatus = (data: any): void => {
  if (data.error) {
    const error = JSON.stringify(data.error);
    throw new Error(error);
  }
  handleOpenSuccessNotificationHelper("Success!");
};

const handleCatchError = (error: any): void => {
  const errorObj = JSON.parse(error.message);
  console.error(errorObj.data.detail);
  handleOpenErrorNotificationHelper(StatusCodesEnum[errorObj.status]);
};

const handleFormSubmit =
  (register: any, login: any, isSignInForm: boolean, dispatch: AppDispatch) =>
  async (form: Form) => {
    if (!isSignInForm) {
      await register(form)
        .then((data: any) => {
          handleRespStatus(data);
        })
        .catch((error: any) => {
          handleCatchError(error);
        });
      return;
    } else {
      const { username, password, ...rest } = form;
      const reqBody = `username=${username}&password=${password}`;
      await login(reqBody)
        .then((data: any) => {
          handleRespStatus(data);
          const accessToken = data.data.access_token;
          dispatch(setAccessToken(accessToken));
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
        })
        .catch((error: any) => {
          handleCatchError(error);
        });
    }
  };

const handleGetUsername = (reqArgs: string): string =>
  reqArgs.split("&")[0].split("=")[1];

export { handleFormSubmit, handleGetUsername };
