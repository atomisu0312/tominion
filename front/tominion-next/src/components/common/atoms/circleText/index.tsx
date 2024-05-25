interface Props extends React.InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

/**
 * 丸の中にテキストが入った部品である
 * @param text 実際に入れたい文字
 * @param handleClick クリックイベント
 * @param color 色(デフォルトは赤)
 * @returns 
 */
export default function CircleText({text, handleClick, color = "bg-red-500", ...rest }: Props) {
  const classNameBase = "rounded-full h-8 w-8"
  const coinClass = `${classNameBase} ${color}`

  return(
    <div className="items-center justify-center flex">
      <button className={coinClass} onClick={handleClick}>
        {text}
      </button>
    </div>
  )
} 
