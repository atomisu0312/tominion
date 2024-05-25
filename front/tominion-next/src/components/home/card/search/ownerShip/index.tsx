
import { CardOwner } from "@/lib/features/home/card/search/cardOwner";
import RectangleMarine from "@/components/common/molecules/rectangleMarine";

import { handleCardOwner } from "@/lib/features/home/card/search/seachSlice";
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/features/home/card/store";
import { useSelector } from "react-redux";

function calcTargetList(current :CardOwner){
  if(current === CardOwner.EveryOne){
    return [CardOwner.EveryOne, CardOwner.MyTeam, CardOwner.Mine];
  }
  if(current === CardOwner.MyTeam){
    return [CardOwner.MyTeam, CardOwner.Mine];
  }
  if(current === CardOwner.Mine){
    return [CardOwner.Mine];
  }
  return [];
}

export default function OwnerShip(){
  const dispatch = useAppDispatch();
  const cardOwnerEnumList = [CardOwner.Mine, CardOwner.MyTeam, CardOwner.EveryOne];
  const nameList = ["自分のみ", "所属チーム", "全て"];
  const currentCardOwner = useSelector((state: RootState) => state.cardSearch.cardOwner);

  return (
    <div className="grid grid-cols-3 grid-flow-rows h-full">
      {cardOwnerEnumList.map((cardOwner, index) => {
        const isChecked = calcTargetList(currentCardOwner).includes(cardOwner);        
        return (
          <div key={index} className="col-span-1">
            <RectangleMarine text={nameList[index]} checked={isChecked} handleClick={() => dispatch(handleCardOwner(cardOwner))}/>
          </div>
        )
      })}
    </div>
  )
}