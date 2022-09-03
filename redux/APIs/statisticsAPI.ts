import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostReq, ReqArgs } from "../interfaces";

export const statisticsAPI = createApi({
  reducerPath: "statisticsAPI",
  tagTypes: ["Statistics"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://79.143.31.216/" }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (reqArgs: ReqArgs): PostReq => ({
        url: `register?username=${reqArgs.username}&password=${reqArgs.password}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation } = statisticsAPI;
