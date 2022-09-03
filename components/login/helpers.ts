import { Form } from "./types";
import { handleOpenErrorNotificationHelper } from "../../common/helpers/handleOpenErrorNotification.helper";
import { StatusCodesEnum } from "../../common/enums/StatusCodes.enum";
import { handleOpenSuccessNotificationHelper } from "../../common/helpers/handleOpenSuccessNotification.helper";

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
  (register: any, login: any, isSignInForm: boolean) => async (form: Form) => {
    console.log(form);
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
          // console.log(data.data.access_token);
          localStorage.setItem(
            "accessToken",
            JSON.stringify(data.data.access_token)
          );
        })
        .catch((error: any) => {
          handleCatchError(error);
        });
    }
  };

export { handleFormSubmit };
