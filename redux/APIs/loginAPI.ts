import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostReq, UserArgs } from "../interfaces";
import { handleOpenSuccessNotificationHelper } from "../../common/helpers/handleOpenSuccessNotification.helper";
import { handleOpenErrorNotificationHelper } from "../../common/helpers/handleOpenErrorNotification.helper";
import { StatusCodesEnum } from "../../common/enums/StatusCodes.enum";
import { setAccessToken } from "../slicers/accessTokenSlicer";

export const loginAPI = createApi({
  reducerPath: "loginAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (reqArgs: UserArgs): PostReq => ({
        url: `register?username=${reqArgs.username}&password=${reqArgs.password}`,
        method: "POST",
      }),
      onQueryStarted: async (arg, { queryFulfilled }) => {
        queryFulfilled
          .then((data) => {
            handleOpenSuccessNotificationHelper("Success!");
          })
          .catch((error) => {
            console.error(error.error.data.detail);
            handleOpenErrorNotificationHelper(
              StatusCodesEnum[error.error.status]
            );
          });
      },
    }),
    login: build.mutation({
      query: (body: string): PostReq => ({
        url: "login",
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        queryFulfilled
          .then((data) => {
            const accessToken = data.data.access_token;
            dispatch(setAccessToken(accessToken));
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
            handleOpenSuccessNotificationHelper("Success!");
          })
          .catch((error) => {
            console.error(error.error.data.detail);
            handleOpenErrorNotificationHelper(
              StatusCodesEnum[error.error.status]
            );
          });
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = loginAPI;
