'use client'
import {setCostMin, setCostMax} from '@/lib/features/home/card/search/seachSlice'
import type { RootState } from '@/lib/features/home/card/store';
import {useAppDispatch, useAppSelector} from '@/lib/hooks'
import Coin from './cost/coin';
export default function Cost(){
  const dispatch = useAppDispatch();

  const ulStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  return(
  <>
    <div className="h-full mx-3" style={ulStyle}>
        {[...Array(10)].map((_, i) => i).map(e => {
          return(<Coin valueNum ={e} key={e}/>);
        }) }
    </div>
  </>)
} 