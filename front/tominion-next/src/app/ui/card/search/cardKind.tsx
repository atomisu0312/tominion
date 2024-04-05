import KindSelectButton from "./kind/kindSelectButton";
import KindLabel from "./kind/kindLabel";
import AttrLabel from "./kind/attrLabel";
import AttrSelectButton from "./kind/attrSelectButton";

export default function CardKind(){
  return(
  <>
    <div className=" bg-green-400 h-full">
    <div className="grid grid-flow-col grid-rows-6 h-full">
        <div className ="col-span-1 row-span-2">
          <KindLabel labelStr = "種別"/>
        </div>
        <div className ="col-span-1 row-span-1">
          <KindSelectButton labelStr = "アクション"/>
        </div>
        <div className ="row-span-1">
          <KindSelectButton labelStr = "財宝"/>
        </div>
        <div className ="row-span-1">
          <KindSelectButton labelStr = "勝利点"/>
        </div>
        <div className ="row-span-1">
          <KindSelectButton labelStr = "呪い"/>
        </div>
        <div className ="col-span-1 row-span-2">
          <KindLabel labelStr = "属性"/>
        </div>
        <div className ="col-span-1 row-span-1">
          <KindSelectButton labelStr = "なし"/>
        </div>
        <div className ="row-span-1">
          <KindSelectButton labelStr = "アタック"/>
        </div>
        <div className ="row-span-1">
          <KindSelectButton labelStr = "リアクション"/>
        </div>
        <div className ="row-span-1">
          <KindSelectButton labelStr = "持続"/>
        </div>
    </div>
    </div>
  </>)
} 