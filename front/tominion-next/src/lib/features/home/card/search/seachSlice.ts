import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type State ={
  costMin: undefined | number;
  costMax: undefined | number;
}

const initialState: State = {
  costMin: undefined,
  costMax: undefined,
}

export const searchSlice =  createSlice({
  name: 'cardSearch',
  initialState,
  reducers: {
    setCostMin:(state, action:PayloadAction<number | undefined>) =>{
      state.costMin = action.payload
    },
    setCostMax:(state, action:PayloadAction<number | undefined>) =>{
      state.costMax = action.payload
    },
  }
});
export const {setCostMin, setCostMax} = searchSlice.actions;
export default searchSlice.reducer;