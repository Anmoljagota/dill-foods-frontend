import { createAsyncThunk } from "@reduxjs/toolkit";

const GetData = createAsyncThunk("get/analyst", async (selectedyear) => {
    try {
      const res = await fetch(
        `https://dil-foods-backend-fwgy.onrender.com/headerData?year=${
          selectedyear ? selectedyear : "2024"
        }`
      );
      const data = await res.json();
      console.log(data, "frfr");
      return data;
    } catch (err) {
      console.log(err, "err");
    }
  });

  const getBarChartdata = createAsyncThunk(
    "get/visitors",
    async (selectedyear) => {
      try {
        const res = await fetch(
          `https://dil-foods-backend-fwgy.onrender.com/visitors?year=${
            selectedyear ? selectedyear : "2024"
          }`
        );
        const data = await res.json();
  
        return data;
      } catch (err) {
        console.log(err, "err");
      }
    }
  );

  const getrevanue = createAsyncThunk("get/revenue", async (selectedyear) => {
    try {
      const res = await fetch(
        `https://dil-foods-backend-fwgy.onrender.com/revenue?year=${
          selectedyear ? selectedyear : "2024"
        }`
      );
      const data = await res.json();
  
      return data;
    } catch (err) {
      console.log(err, "err");
    }
  });


  const getPieChartdata = createAsyncThunk("get/sales", async (selectedyear) => {
    try {
      const res = await fetch(
        `https://dil-foods-backend-fwgy.onrender.com/sales?year=${
          selectedyear ? selectedyear : "2024"
        }`
      );
      const data = await res.json();
  
      return data;
    } catch (err) {
      console.log(err, "err");
    }
  });

  export {GetData,getBarChartdata,getPieChartdata,getrevanue}