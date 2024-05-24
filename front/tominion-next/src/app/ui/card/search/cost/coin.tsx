import {useAppDispatch, useAppSelector} from '@/lib/hooks'
import {setCostMinMax} from '@/lib/features/home/card/search/seachSlice'
import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/features/home/card/store'; // Replace '@/lib/store' with the correct file path

interface Props {
  valueNum: number;
}

export default function Coin({valueNum}:Props){
  const dispatch = useAppDispatch();
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(setCostMinMax(valueNum));
  };
  const classNameBase = "rounded-full h-8 w-8"
  const checkedColor = "bg-red-500";
  const unCheckedColor = "bg-yellow-500";
  
  const costMin = useSelector((state: RootState) => state.cardSearch.costMin);
  const costMax = useSelector((state: RootState) => state.cardSearch.costMax);
  
  // valueNumがcostの範囲内に収まっているかどうかを判定
  const isChecked = !(costMin== undefined || costMax== undefined) && (costMin<= valueNum)&& (costMax >= valueNum);  
  
  // 範囲に収まっていたら、コインのクラスを変更する
  const coinClass = `${classNameBase} ${isChecked ? checkedColor : unCheckedColor}`

  return(
    <div className="items-center justify-center flex">
        <button className={coinClass} onClick={handleClick}>
          {valueNum.toString()}
        </button>
    </div>)
} 