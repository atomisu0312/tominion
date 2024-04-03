import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

export default function SearchResult(){
  const costMin = useSelector((state: RootState) => state.cardSearch.costMin);

  return(
  <>
    <div className="h-full">
      <span>{costMin}</span>
    </div>
  </>)
} 