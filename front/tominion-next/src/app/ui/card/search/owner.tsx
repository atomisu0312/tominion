import OwnerSelectButton from "./owner/ownerSelectButton"
import { CardOwner } from "@/lib/features/home/card/search/cardOwner";

export default function Owner(){
  return(
  <>
    <div className="grid grid-cols-3 grid-flow-rows h-full">
      <div className="col-span-1">
       <OwnerSelectButton labelStr="自分のみ" cardOwner={CardOwner.Mine}/>
      </div>
      <div className="col-span-1">
        <OwnerSelectButton labelStr="所属チーム" cardOwner={CardOwner.MyTeam}/>
      </div>
      <div className="col-span-1">
        <OwnerSelectButton labelStr="全て" cardOwner={CardOwner.EveryOne}/>
      </div>
    </div>
  </>)
} 