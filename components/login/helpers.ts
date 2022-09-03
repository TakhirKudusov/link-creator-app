import { Form } from "./types";
import { handleOpenErrorNotificationHelper } from "../../common/helpers/handleOpenErrorNotification.helper";
import { StatusCodesEnum } from "../../common/enums/StatusCodes.enum";
import { handleOpenSuccessNotificationHelper } from "../../common/helpers/handleOpenSuccessNotification.helper";

const handleFormSubmit =
  (register: any, status: any, isSignInForm: boolean) => async (form: Form) => {
    console.log(form);
    if (!isSignInForm) {
      try {
        await register(form);
        // status.isSuccess && handleOpenSuccessNotificationHelper("Success!");
      } catch (error: any) {
        console.error(error.status);
        handleOpenErrorNotificationHelper(StatusCodesEnum[error.status]);
      }
    }
  };

export { handleFormSubmit };
