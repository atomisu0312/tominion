'use client'
import {setCostMin, setCostMax} from '@/lib/features/home/card/search/seachSlice'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';

export default function Cost(){
  const dispatch = useDispatch();
  
  const handleClick1 = () => {
    dispatch(setCostMin(3));
  }

  const handleClick2 = () => {
    dispatch(setCostMin(6));
  }
  return(
  <>
    <div className="bg-yellow-0 h-full">
      <div className="mx-3">
      <button onClick={handleClick1}>コスト３</button>
      <span>コスト</span>
      <button onClick={handleClick2}>コスト6</button>
      </div>
    </div>
  </>)
} 