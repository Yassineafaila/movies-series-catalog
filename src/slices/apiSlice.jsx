import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.themoviedb.org/3";
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Movies", "Series", "People"],
  endpoints: (builder) => ({}),
});
