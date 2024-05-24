interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
  * HugeInputBox component
  * @param {string} placeholder - プレースホルダー
  * @param {React.ChangeEventHandler<HTMLInputElement>} onChange - 入力時のイベントハンドラ
  */
export default function HugeInputBox({placeholder, onChange, ...rest}: Props) {
  return (
    <>
      <input 
          type="text" 
          className="text-4xl h-full
        text-blue-600 col-span-11" 
          placeholder = {placeholder} 
          onChange={onChange} {...rest}/>
    </>
  )
}