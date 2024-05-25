import { CardKind } from "@/lib/features/home/card/search/cardKind";
import { useAppDispatch } from "@/lib/hooks";
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/features/home/card/store';
import HexagonEmeral from "@/components/common/molecules/hexagonEmeral";

import BlockText from "@/components/common/atoms/blockText";
import { handleCardKindList } from "@/lib/features/home/card/search/seachSlice";

export default function Kind(){
  const dispatch = useAppDispatch();
  const cardKindEnumList = [CardKind.action, CardKind.treasure, CardKind.victory, CardKind.curse];
  const nameList = ["アクション", "財宝", "勝利点", "呪い"];
  const currentCardList = useSelector((state: RootState) => state.cardSearch.cardKindList);

  return (
    <div className="grid grid-rows-6 grid-flow-cols h-full">
      <div className="row-span-2">
        <BlockText name="種別"/>
      </div>
      {cardKindEnumList.map((cardKind, index) => {
        const isChecked = currentCardList.includes(cardKind);        
        return (
          <div key={index} className="row-span-1">
            <HexagonEmeral text={nameList[index]} checked={isChecked} handleClick={() => dispatch(handleCardKindList(cardKind))}/>
          </div>
        )
      })}
    </div>
  )
  
}