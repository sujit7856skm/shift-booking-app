import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dateUtils } from "../../utils/dateUtils";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8080" }),
  tagTypes: ["shif"],
  endpoints: (builder) => ({
    shifts: builder?.query({
      query: () => ({ url: "shifts", method: "GET" }),
      providesTags: ["shif"],
      transformResponse: (shifts) =>
        shifts?.length ? shifts?.sort(dateUtils.sort) : [],
    }),
    shift: builder?.query({
      query: (shiftId) => ({ url: `shifts/${shiftId}`, method: "GET" }),
    }),
    updateShift: builder.mutation({
      query: (shift) => ({
        url: `shifts/${shift?.id}/${shift?.booked ? "book" : "cancel"}`,
        method: "GET",
        // body: shift,
      }),
      invalidatesTags: ["shif"],
    }),
  }),
});

export const { useShiftsQuery, useShiftQuery, useUpdateShiftMutation } = api;
