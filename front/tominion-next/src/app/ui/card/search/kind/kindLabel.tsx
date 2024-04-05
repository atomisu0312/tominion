interface Props {
  labelStr: string;
}

export default function KindLabel({labelStr}:Props){
  return(
  <>
    <span>{labelStr}</span>
  </>)
}