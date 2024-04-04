import {setCostMin, setCostMax} from '@/lib/features/home/card/search/seachSlice'
import type { RootState } from '@/lib/store';
import {useAppDispatch, useAppSelector, useAppStore} from '@/lib/hooks'
import Coin from './cost/coin';
export default function Cost(){
  const dispatch = useAppDispatch();
  
  const handleClick1 = () => {
    dispatch(setCostMin(3));
  }

  const handleClick2 = () => {
    dispatch(setCostMin(6));
  }

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
    <div className="bg-yellow-0 h-full mx-3" style={ulStyle}>
        {[...Array(10)].map((_, i) => i).map(e => {
          return(<Coin valueNum ={e}/>);
        }) }
    </div>
  </>)
} 