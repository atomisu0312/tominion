import { CardOwner } from "@/lib/features/home/card/search/cardOwner";
import { handleCardOwner } from "@/lib/features/home/card/search/seachSlice";
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/features/home/card/store";
import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";

interface Props{
  labelStr: string,
  cardOwner: CardOwner,
  color?: string,
}
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

export default function OwnerSelectButton({labelStr, cardOwner}: Props){
  const dispatch = useAppDispatch();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(handleCardOwner(cardOwner));
  };
  const currentCardOwner = useSelector((state: RootState) => state.cardSearch.cardOwner);
  
  // セレクト判定が若干特殊なので注意
  const isSelected = calcTargetList(currentCardOwner).includes(cardOwner);
  
  const buttonClassName = "hexagon-button-lg relative transform " + (isSelected ? "bg-red-500" : "bg-blue-500");
  return(

  <div className="flex justify-center items-center h-full">
    <button className={buttonClassName} onClick={handleClick}>
      <span className="absolute inset-0 flex items-center justify-center text-white">
        {labelStr}
      </span>
    </button>
  </div>)
}