import { RootState } from '@/lib/features/home/card/store';
import { useSelector } from 'react-redux';

export default function SearchResultTable(){
  const costMin = useSelector((state: RootState) => state.cardSearch.costMin);
  const costMax = useSelector((state: RootState) => state.cardSearch.costMax);
  const searchWord = useSelector((state: RootState) => state.cardSearch.searchWord);
  const cardKindList = useSelector((state: RootState) => state.cardSearch.cardKindList);
  const cardAttributeList = useSelector((state: RootState) => state.cardSearch.cardAttributeList);
  const cardOwner = useSelector((state: RootState) => state.cardSearch.cardOwner);

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
    <div className = "w-full">
      <span>{`種別：${cardKindList}`}</span>
    </div>
    <div className = "w-full">
      <span>{`属性：${cardAttributeList}`}</span>
    </div>
    <div className = "w-full">
      <span>{`オーナー：${cardOwner}`}</span>
    </div>
  </>)
} 