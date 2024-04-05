import { createSlice } from "@reduxjs/toolkit";
import {
  GetData,
  getBarChartdata,
  getPieChartdata,
  getrevanue,
} from "./action";
const initialState = {
  loading: false,
  error: false,
  message: null,
  data: [],
  visitors: [],
  sales: [],
  revanue: [],
};
const Data = createSlice({
  name: "AnalystData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetData.pending, (state) => {
      console.log("pehle app");
      state.loading = true;
    });
    builder.addCase(GetData.fulfilled, (state, action) => {
      console.log(action, "aaaa");
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(GetData.rejected, (state) => {
      console.log("tum chalo");
      state.loading = false;
      state.error = true;
      state.message = "something wrong";
    });
    //VISITORS DATA
    builder.addCase(getBarChartdata.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBarChartdata.fulfilled, (state, data) => {
      // console.log("ffff",data);
      state.loading = false;
      console.log(data.payload, "kkk");
      state.visitors = data.payload;
    });
    builder.addCase(getBarChartdata.rejected, (state) => {
      (state.loading = false),
        (state.error = true),
        (state.message = "something wrong");
    });
    //SALES DATA

    builder.addCase(getPieChartdata.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPieChartdata.fulfilled, (state, data) => {
      // console.log("ffff",data);
      state.loading = false;
      state.sales = data.payload;
    });
    builder.addCase(getPieChartdata.rejected, (state) => {
      (state.loading = false),
        (state.error = true),
        (state.message = "something wrong");
    });

    //REVENUE DATA
    builder.addCase(getrevanue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getrevanue.fulfilled, (state, data) => {
      // console.log("ffff",data);
      state.loading = false;
      state.revanue = data.payload;
    });
    builder.addCase(getrevanue.rejected, (state) => {
      (state.loading = false),
        (state.error = true),
        (state.message = "something wrong");
    });
  },
});

export { GetData, getBarChartdata, getPieChartdata, getrevanue };
export default Data.reducer;
