'use client'

import {useAppDispatch, useAppSelector} from '@/lib/hooks'
import {setCostMinMax} from '@/lib/features/home/card/search/seachSlice'
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/features/home/card/store'; // Replace '@/lib/store' with the correct file path
import Coin from '@/components/common/molecules/coin';
export default function Cost(){

  const ulStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const dispatch = useAppDispatch();
  const costMin = useSelector((state: RootState) => state.cardSearch.costMin);
  const costMax = useSelector((state: RootState) => state.cardSearch.costMax);
  
  return(
  <>
    <div className="h-full mx-3" style={ulStyle}>
      {[...Array(10)].map((_, i) => i).map((e) => {
        const checked = (costMin == undefined || costMax == undefined) ? false : e >= costMin && e <= costMax;
        return <Coin key={e} text= {e.toString()} handleClick={() => dispatch(setCostMinMax(e))} checked={checked}/>
        })}
    </div>
  </>)
} 