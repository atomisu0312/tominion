import NameBox from "@/components/home/card/search/nameBox";
import Cost from "@/components/home/card/search/cost";
import Owner from "@/components/home/card/search/ownerShip";
import Kind from "@/components/home/card/search/kind";
import Attr from "@/components/home/card/search/attr";

import SearchResultTable from "../searchResult";

function SearchArea(){
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
      <div className="flex flex-col justify-start w-1/6 mx-1 h-full">
        <Kind/>
      </div>
      <div className="flex flex-col justify-start w-1/6 mx-1 h-full">
        <Attr/>
      </div>
    </div>
  </>)
} 

function SearchResult(){
  return(
  <>
    <SearchResultTable/>
  </>
  )}

export {SearchArea, SearchResult}