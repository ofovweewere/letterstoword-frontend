import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: { loading: false, result: { data: [] } },
  reducers: {
    search(state) {
      state.loading = true;
      state.result.data = [];
    },
    searchComplete(state, response) {
      console.log("Payload is", response.payload);
      state.loading = false;
      state.result.data = response.payload;
      console.log("Result data is ", state.result.data);
    },
    searchError(state) {
      state.loading = false;
    },
    clearData(state) {
      state.result.data = [];
    },
  },
});

export const resultActions = resultSlice.actions;

export default resultSlice;
