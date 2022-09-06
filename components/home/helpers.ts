import { Dispatch, SetStateAction } from "react";
import { TablePaginationConfig } from "antd";
import { statisticsApi } from "../../redux/APIs/statisticsAPI";
import { AppDispatch } from "../../redux/types";
import { DataType } from "./interfaces";
import { handleOpenErrorNotificationHelper } from "../../common/helpers/handleOpenErrorNotification.helper";
import { StatusCodesEnum } from "../../common/enums/StatusCodes.enum";

const handleChangeTablePage = async (
  e: TablePaginationConfig,
  dispatch: AppDispatch,
  setData: Dispatch<SetStateAction<DataType[]>>,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  prevData: DataType[]
) => {
  if (e.current !== 1) {
    try {
      setLoading(true);
      const data = await dispatch(
        statisticsApi.endpoints.getStatistics.initiate(
          String((e.current! - 1) * 20)
        )
      );
      if (data.status === "fulfilled" || data.status === "rejected") {
        setLoading(false);
      }
      setData(data.data);
      setCurrentPage(e.current!);
    } catch (error: any) {
      console.error(error.error.data.detail);
      handleOpenErrorNotificationHelper(StatusCodesEnum[error.error.status]);
    }
  } else {
    setData(prevData);
    setCurrentPage(e.current!);
  }
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

export { handleChangeTablePage, handleValidateForm };
