import { TRENDING_URL } from "../constants";
import { apiSlice } from "./apiSlice";
export const trendingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => ({
        url: `${TRENDING_URL}/all/day?language=en-US`,
        params: {
          api_key: "5321efb425aa5c58b0834805f108acd8",
        },
        }),
        keepUnusedDataFor:5,
    }),
  }),
});
export const {useGetTrendingQuery}=trendingSlice