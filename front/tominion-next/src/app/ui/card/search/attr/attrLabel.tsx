interface Props {
  labelStr: string;
}

export default function AttrLabel({labelStr}:Props){
  return(
  <div className="flex justify-center items-center h-full">
    <span>{labelStr}</span>
  </div>)
}