import { createSlice } from "@reduxjs/toolkit";
import data from "../data/stackline_frontend_assessment_data_2021.json";

const initialState = {
  data: data,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
