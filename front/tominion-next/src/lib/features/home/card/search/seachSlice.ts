import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type State ={
  costMin: undefined | number;
  costMax: undefined | number;
  searchWord: undefined | String;
}

const initialState: State = {
  costMin: undefined,
  costMax: undefined,
  searchWord: undefined
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
    setCostMinMax:(state, action:PayloadAction<number>) => {
      if (state.costMax == null || state.costMin == null){
        state.costMax = action.payload;
        state.costMin = action.payload;
      }else if (state.costMin < action.payload && state.costMax > action.payload){
        state.costMax = action.payload;
        state.costMin = action.payload;
      }else if (state.costMin >= action.payload){
        state.costMin = action.payload;
      }else if (state.costMax <= action.payload){
        state.costMax = action.payload;
      }
    },
    setSearchWord:(state, action:PayloadAction<String>) => {
      state.searchWord = action.payload;
    }
  }
});
export const {setCostMin, setCostMax, setCostMinMax, setSearchWord} = searchSlice.actions;
export default searchSlice.reducer;