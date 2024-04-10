import KindSelectButton from "./kind/kindSelectButton";
import KindLabel from "./kind/kindLabel";
import AttrLabel from "./attr/attrLabel";
import AttrSelectButton from "./attr/attrSelectButton";
import {CardKind} from "@/lib/features/home/card/search/cardKind";
import { CardAttribute } from "@/lib/features/home/card/search/cardAttribute";

export default function CardKindComponent(){
  return(
  <>
    <div className="h-full">
      <div className="grid grid-flow-col grid-rows-6 h-full">
        <div className ="col-span-1 row-span-2">
          <KindLabel labelStr = "種別"/>
        </div>
        <div className ="col-span-1 row-span-1">
          <KindSelectButton labelStr = "アクション" cardKind={CardKind.action} />
        </div>
        <div className ="col-span-1 row-span-1">
          <KindSelectButton labelStr = "財宝" cardKind={CardKind.treasure}/>
        </div>
        <div className ="col-span-1 row-span-1">
          <KindSelectButton labelStr = "勝利点" cardKind={CardKind.victory}/>
        </div>
        <div className ="col-span-1 row-span-1">
          <KindSelectButton labelStr = "呪い" cardKind={CardKind.curse} />
        </div>
        <div className ="col-span-2 row-span-2">
          <AttrLabel labelStr = "属性"/>
        </div>
        <div className ="col-span-2 row-span-1">
          <AttrSelectButton labelStr = "なし" cardAttribute={CardAttribute.None} />
        </div>
        <div className ="col-span-2 row-span-1">
          <AttrSelectButton labelStr = "アタック" cardAttribute={CardAttribute.Attack}/>
        </div>
        <div className ="col-span-2 row-span-1">
          <AttrSelectButton labelStr = "リアクション" cardAttribute={CardAttribute.Reaction}/>
        </div>
        <div className ="col-span-2 row-span-1">
          <AttrSelectButton labelStr = "持続" cardAttribute={CardAttribute.Duration}/>
        </div>
      </div>
    </div>
  </>)
} 