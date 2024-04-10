import {useAppDispatch, useAppSelector, useAppStore} from '@/lib/hooks'

import './button.css'
import { CardKind } from "@/lib/features/home/card/search/cardKind";
import { MouseEventHandler } from 'react';
import {handleCardKindList} from '@/lib/features/home/card/search/seachSlice'

interface Props {
  labelStr: string;
  cardKind: CardKind;
  color?: string; // colorは現状任意とする
}

export default function KindSelectButton({labelStr, cardKind}:Props){
  const dispatch = useAppDispatch();

  // クリックされたときにcardKindListに追加したり除外したりする関数をdispatchする
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(handleCardKindList(cardKind));
  };
  
  const cardKindList = useAppSelector((state) => state.cardSearch.cardKindList);
  const isCardKindSelected = cardKindList.includes(cardKind);

  const buttonClassName = "hexagon-button relative transform " + (isCardKindSelected ? "bg-red-500" : "bg-green-500");
  return(
  <div className="flex justify-center">
    <button className={buttonClassName} onClick = {handleClick}>
      <span className="absolute inset-0 flex items-center justify-center text-white">
        {labelStr}
      </span>
    </button>
  </div>)
}