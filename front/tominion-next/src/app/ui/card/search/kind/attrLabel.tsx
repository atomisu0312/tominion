interface Props {
  labelStr: string;
}

export default function AttrLabel({labelStr}:Props){
  return(
  <>
    <span>{labelStr}</span>
  </>)
}