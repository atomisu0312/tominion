import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CardKind } from "@/lib/features/home/card/search/cardKind";
import { CardAttribute } from "@/lib/features/home/card/search/cardAttribute";
import { CardOwner } from "@/lib/features/home/card/search/cardOwner";

type State ={
  costMin: undefined | number;
  costMax: undefined | number;
  searchWord: undefined | String;
  cardKindList: CardKind[];
  cardAttributeList: CardAttribute[];
  cardOwner: CardOwner;
}

const initialState: State = {
  costMin: undefined,
  costMax: undefined,
  searchWord: undefined,
  cardKindList: [],
  cardAttributeList: [],
  cardOwner: CardOwner.EveryOne,
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
    },
    handleCardAttributeList:(state, action:PayloadAction<CardAttribute>) => {
      const index = state.cardAttributeList.indexOf(action.payload);
      if (index === -1){
        state.cardAttributeList.push(action.payload);
      }else{
        state.cardAttributeList.splice(index, 1);
      }
    },
    handleCardOwner:(state, action:PayloadAction<CardOwner>) => {
      state.cardOwner = action.payload;
    }

  }
});
export const {setCostMin, setCostMax, setCostMinMax, setSearchWord, handleCardKindList, handleCardAttributeList, handleCardOwner} = searchSlice.actions;
export default searchSlice.reducer;