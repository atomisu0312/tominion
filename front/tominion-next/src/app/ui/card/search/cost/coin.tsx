import {useAppDispatch, useAppSelector, useAppStore} from '@/lib/hooks'
import {setCostMin, setCostMax} from '@/lib/features/home/card/search/seachSlice'
import { MouseEventHandler } from 'react';

interface Props {
  valueNum: number;
}

export default function Coin({valueNum}:Props){
  const dispatch = useAppDispatch();
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(setCostMin(valueNum));
  };

  return(
    <div className="items-center justify-center flex">
        <button className="rounded-full h-16 w-16 bg-yellow-500" onClick={handleClick}>
          {valueNum.toString()}
        </button>
    </div>)
} 