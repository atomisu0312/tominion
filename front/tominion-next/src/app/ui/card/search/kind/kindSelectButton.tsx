interface Props {
  labelStr: string;
}

export default function KindSelectButton({labelStr}:Props){
  return(<>
    <span>{labelStr}</span>
  </>)
}