import { CardAttribute } from "@/lib/features/home/card/search/cardAttribute";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MouseEventHandler } from "react";
import { handleCardAttributeList } from "@/lib/features/home/card/search/seachSlice";
import '@/components/common/atoms/hexagonButton'

interface Props {
  labelStr: string;
  cardAttribute: CardAttribute;
  color ?: string;
}

export default function AttrSelectButton({labelStr, cardAttribute}:Props){
  const dispatch = useAppDispatch();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(handleCardAttributeList(cardAttribute));
  };
  
  const attrList = useAppSelector((state) => state.cardSearch.cardAttributeList);
  const isSelected = attrList.includes(cardAttribute);

  const buttonClassName = "hexagon-button relative transform " + (isSelected ? "bg-red-500" : "bg-yellow-500");
  return(
    <div className="flex justify-center">
      <button className={buttonClassName} onClick={handleClick}>
        <span className="absolute inset-0 flex items-center justify-center text-white">
          {labelStr}
        </span>
      </button>
    </div>)
}