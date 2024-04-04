import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

export default function SearchResult(){
  const costMin = useSelector((state: RootState) => state.cardSearch.costMin);
  const costMax = useSelector((state: RootState) => state.cardSearch.costMax);
  const searchWord = useSelector((state: RootState) => state.cardSearch.searchWord);

  return(
  <>
    <div className="w-full">
      <span>{`最小コスト：${costMin}`}</span>
      <span>◽️</span>
      <span>{`最大コスト：${costMax}`}</span>
    </div>
    <div className="w-full">
      <span>{`検索ワード：${searchWord}`}</span>
    </div>
  </>)
} 