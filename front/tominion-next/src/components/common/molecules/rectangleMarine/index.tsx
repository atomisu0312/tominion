import { RectangleButtonLg } from "../../atoms/hexagonButton";

interface Props {
  text: string;
  checked?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function RectangleMarine({ text, checked=false, handleClick, ...rest }: Props) {
  return(
    <RectangleButtonLg text={text} handleClick={handleClick} color={checked ? "bg-red-500" : "bg-blue-500"}/>
  )
}