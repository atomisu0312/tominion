import "./style.css"

interface Props extends React.InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

export function RectangleButtonLg({text, handleClick, color = "bg-red-500", ...rest }: Props) {
  const buttonClassName = `hexagon-button-lg relative transform ${color}`

  return (
  <div className="flex justify-center items-center h-full">
    <button className={buttonClassName} onClick={handleClick}>
      <span className="absolute inset-0 flex items-center justify-center text-white">
        {text}
      </span>
    </button>
  </div>
  )
}

export function RectangleButton({text, handleClick, color = "bg-red-500", ...rest }: Props) {
  const buttonClassName = `hexagon-button relative transform ${color}`

  return (
  <div className="flex justify-center items-center h-full">
    <button className={buttonClassName} onClick={handleClick}>
      <span className="absolute inset-0 flex items-center justify-center text-white">
        {text}
      </span>
    </button>
  </div>
  )
}