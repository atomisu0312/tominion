import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

export default function SearchResult(){
  const costMin = useSelector((state: RootState) => state.cardSearch.costMin);
  const costMax = useSelector((state: RootState) => state.cardSearch.costMax);
  return(
  <>
    <div className="h-full">
      <span>{costMin}</span>
      <span>◽️</span>
      <span>{costMax}</span>
    </div>
  </>)
} 