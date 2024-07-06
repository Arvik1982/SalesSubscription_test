import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  checkStatus: Array<number>;
};

const dataSlice = createSlice({
  name: "data",
  initialState: <initialState>{
    checkStatus: [],
  },

  reducers: {
    setCheckStatus(state, action) {
      state.checkStatus.includes(action.payload)
        ? (state.checkStatus = state.checkStatus.filter((el) => {
            return el !== action.payload;
          }))
        : state.checkStatus.push(action.payload);
    },
  },
});

export const { setCheckStatus } = dataSlice.actions;
export default dataSlice.reducer;
