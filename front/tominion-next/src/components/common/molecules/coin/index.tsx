import CircleText from "@/components/common/atoms/circleText";

interface Props extends React.InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  checked?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Coin({ text, checked=false, handleClick, ...rest }: Props) {
  const checkedColor = "bg-red-500";
  const unCheckedColor = "bg-yellow-500";
  return(
    <CircleText text={text} handleClick = {handleClick} color = {checked ? checkedColor : unCheckedColor}/>
    )
  } 