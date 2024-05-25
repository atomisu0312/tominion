import { HexagonButton } from "../../atoms/hexagonButton";

interface Props {
  text: string;
  checked?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function HexagonEmeral({ text, checked=false, handleClick, ...rest }: Props) {
  return(
    <HexagonButton text={text} handleClick={handleClick} color={checked ? "bg-red-500" : "bg-green-500"}/>
  )
}