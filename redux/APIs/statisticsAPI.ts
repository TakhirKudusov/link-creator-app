import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostReq } from "../interfaces";
import { DataType } from "../../components/home/interfaces";
import { handleOpenSuccessNotificationHelper } from "../../common/helpers/handleOpenSuccessNotification.helper";
import { handleOpenErrorNotificationHelper } from "../../common/helpers/handleOpenErrorNotification.helper";
import { StatusCodesEnum } from "../../common/enums/StatusCodes.enum";

export const statisticsApi = createApi({
  reducerPath: "statisticsApi",
  tagTypes: ["Statistics"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 60,
  endpoints: (build) => ({
    getStatistics: build.query({
      query: (offset = "0"): { url: string } => ({
        url: `statistics?offset=${offset}&limit=20`,
      }),
      onQueryStarted: async (arg, { queryFulfilled }) => {
        queryFulfilled
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error.error.data.detail);
            handleOpenErrorNotificationHelper(
              StatusCodesEnum[error.error.status]
            );
          });
      },
      transformResponse: (response: Omit<DataType, "key">[], meta, arg) => {
        const newResp = [
          ...response.map((item) => ({
            ...item,
            key: item.id,
            short: `http://79.143.31.216/s/${item.short}`,
          })),
        ];
        const emptyItem = {
          key: 0,
          id: 0,
          short: "",
          target: "",
          counter: 0,
        };
        if (newResp.length >= 20) {
          newResp.push(emptyItem);
        }
        if (Number.parseInt(arg, 10) > 0) {
          for (let i = 0; i < Number.parseInt(arg, 10); i++) {
            newResp.unshift(emptyItem);
          }
        }
        return newResp;
      },
      providesTags: (result) =>
        result
          ? [
              ...(result as any[]).map(({ id }: { id: string }) => ({
                type: "Statistics" as const,
                id,
              })),
              { type: "Statistics", id: "PARTIAL-LIST" },
            ]
          : [{ type: "Statistics", id: "PARTIAL-LIST" }],
    }),

    addSqueezeLink: build.mutation({
      query: (reqArg: string): PostReq => ({
        url: `squeeze?link=${reqArg}`,
        method: "POST",
      }),
      onQueryStarted: async (arg, { queryFulfilled }) => {
        queryFulfilled
          .then((data) => {
            console.log(data);
            handleOpenSuccessNotificationHelper("Short link created!");
          })
          .catch((error) => {
            console.error(error.error.data.detail);
            handleOpenErrorNotificationHelper(
              StatusCodesEnum[error.error.status]
            );
          });
      },
      invalidatesTags: (result, error, id) => [
        { type: "Statistics", id: "PARTIAL-LIST" },
      ],
    }),
  }),
});

export const { useGetStatisticsQuery, useAddSqueezeLinkMutation } =
  statisticsApi;
