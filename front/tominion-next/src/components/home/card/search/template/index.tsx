import NameBox from "@/components/home/card/search/nameBox";
import Cost from "@/components/home/card/search/cost";
import CardKind from "@/app/ui/card/search/cardKind";
import Owner from "@/components/home/card/search/ownerShip";

export default function SearchArea(){
  return(
  <>
    <div className="flex flex-row justify-center h-[10vh] my-3">
      <div className="w-full mx-3 min-h-[10vh]">
        <NameBox/>
      </div>
    </div>
    <div className="flex flex-row justify-center h-[20vh]">
      <div className="flex flex-col justify-start w-2/3 mx-3 h-full">
        <Cost/>
        <Owner/>
      </div>
      <div className="flex flex-col justify-start w-1/3 mx-3 h-full">
          <CardKind/>
      </div>
    </div>
  </>)
} 