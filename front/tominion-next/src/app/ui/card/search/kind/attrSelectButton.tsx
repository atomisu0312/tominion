interface Props {
  labelStr: string;
}

export default function AttrSelectButton({labelStr}:Props){
  return(<>
    <span>{labelStr}</span>
  </>)
}