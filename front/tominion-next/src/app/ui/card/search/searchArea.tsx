import CardKind from "./cardKind";
import Cost from "./cost";
import Namebox from "./namebox";
import Owner from "./owner";

export default function SearchArea(){

  return(
  <>
    <div className="flex flex-row justify-center h-[10vh] my-3">
      <div className="w-full mx-3 min-h-[10vh]">
          <Namebox/>
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