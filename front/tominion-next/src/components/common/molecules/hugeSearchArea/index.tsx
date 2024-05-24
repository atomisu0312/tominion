import HugeInputBox from '@/components/common/atoms/hugeInputBox';
import HugeMagnification from '@/components/common/atoms/hugeMagnification';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
  * HugeSearchArea component
  * @param {string} placeholder - プレースホルダー
  * @param {React.ChangeEventHandler<HTMLInputElement>} onChange - 入力時のイベントハンドラ
  */
export default function HugeSearchArea({placeholder, onChange, ...rest}: Props) {
  return(
  <>
    <div className="h-full items-center grid grid-cols-12">
      <HugeInputBox placeholder={placeholder} onChange={onChange} {...rest}/>
      <HugeMagnification />
    </div>
  </>
  )
}