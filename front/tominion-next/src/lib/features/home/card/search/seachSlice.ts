import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CardKind } from "@/lib/features/home/card/search/cardKind";

type State ={
  costMin: undefined | number;
  costMax: undefined | number;
  searchWord: undefined | String;
  cardKindList: CardKind[];
}

const initialState: State = {
  costMin: undefined,
  costMax: undefined,
  searchWord: undefined,
  cardKindList: [],
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
    },
    // cardKindListに追加したり除外したりする関数を追加する
    handleCardKindList:(state, action:PayloadAction<CardKind>) => {
      const index = state.cardKindList.indexOf(action.payload);
      if (index === -1){
        state.cardKindList.push(action.payload);
      }else{
        state.cardKindList.splice(index, 1); 
      }
    }
  }
});
export const {setCostMin, setCostMax, setCostMinMax, setSearchWord, handleCardKindList} = searchSlice.actions;
export default searchSlice.reducer;