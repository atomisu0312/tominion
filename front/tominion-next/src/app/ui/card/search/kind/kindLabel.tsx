import { CardKind } from "@/lib/features/home/card/search/cardKind";

interface Props {
  labelStr: string;
}

export default function KindLabel({labelStr}:Props){
  return(
  <div className="flex justify-center items-center h-full">
    <span>{labelStr}</span>
  </div>)
}