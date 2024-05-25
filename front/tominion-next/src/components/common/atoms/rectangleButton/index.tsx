interface Props extends React.InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

export function RectangleButton({text, handleClick, color = "bg-red-500", ...rest }: Props) {
  const buttonClassName = `text-white px-4 py-1 ${color}`

  return (
    <button className={buttonClassName} onClick={handleClick}>
        {text}
    </button>
  )
}