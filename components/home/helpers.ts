import { Dispatch, SetStateAction } from "react";
import { TablePaginationConfig } from "antd";
import { statisticsApi } from "../../redux/APIs/statisticsAPI";
import { AppDispatch } from "../../redux/types";
import { DataType } from "./interfaces";
import { setData } from "../../redux/slicers/dataSlicer";
import {
  setCurrentPage,
  setIsLoading,
} from "../../redux/slicers/formParametersSlicer";
import { StatusCodesEnum } from "../../common/enums/StatusCodes.enum";
import { handleOpenErrorNotificationHelper } from "../../common/helpers/handleOpenErrorNotification.helper";

const handleRefetchData = (
  dispatch: AppDispatch,
  filter: string,
  offset?: string,
  e?: TablePaginationConfig
): void => {
  dispatch(setIsLoading(true));
  dispatch(
    statisticsApi.endpoints.getStatistics.initiate({
      offset: offset ? offset : String((e?.current! - 1) * 20),
      filter,
    })
  )
    .then((data) => {
      console.log(data.data);
      dispatch(setData(data.data));
      dispatch(setCurrentPage(e ? e.current : 1));
    })
    .catch((error) => {
      console.error(error);
      handleOpenErrorNotificationHelper(StatusCodesEnum[error.error.status]);
    })
    .finally(() => dispatch(setIsLoading(false)));
};

const handleValidateForm = async (
  form: any,
  setIsDisabled: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
  try {
    const data = await form.validateFields();
    setIsDisabled(false);
    console.log(data);
  } catch (error) {
    console.error(error);
    setIsDisabled(true);
  }
};

export { handleValidateForm, handleRefetchData };
