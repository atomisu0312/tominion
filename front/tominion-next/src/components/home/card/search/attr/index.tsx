import { CardAttribute } from "@/lib/features/home/card/search/cardAttribute";
import { useAppDispatch } from "@/lib/hooks";
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/features/home/card/store';
import HexagonGold from "@/components/common/molecules/hexagonGold";

import BlockText from "@/components/common/atoms/blockText";
import { handleCardAttributeList } from "@/lib/features/home/card/search/seachSlice";

export default function Attr(){
  const dispatch = useAppDispatch();
  const cardAttrEnumList = [CardAttribute.None, CardAttribute.Attack, CardAttribute.Reaction, CardAttribute.Duration];

  const nameList = ["なし", "アタック", "リアクション", "持続"]
  const currentCardList = useSelector((state: RootState) => state.cardSearch.cardAttributeList);

  return (
    <div className="grid grid-rows-6 grid-flow-cols h-full">
      <div className="row-span-2">
        <BlockText name="種別"/>
      </div>
      {cardAttrEnumList.map((cardAttr, index) => {
        const isChecked = currentCardList.includes(cardAttr);        
        return (
          <div key={index} className="row-span-1">
            <HexagonGold text={nameList[index]} checked={isChecked} handleClick={() => dispatch(handleCardAttributeList(cardAttr))}/>
          </div>
        )
      })}
    </div>
  )
  
}