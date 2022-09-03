import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostReq, UserArgs } from "../interfaces";

export const statisticsAPI = createApi({
  reducerPath: "statisticsAPI",
  tagTypes: ["Statistics"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://79.143.31.216/" }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (reqArgs: UserArgs): PostReq => ({
        url: `register?username=${reqArgs.username}&password=${reqArgs.password}`,
        method: "POST",
      }),
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
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = statisticsAPI;
