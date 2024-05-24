'use client'
import { useDebouncedCallback } from 'use-debounce';
import { setSearchWord } from '@/lib/features/home/card/search/seachSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import HugeSearchArea from '@/components/common/molecules/hugeSearchArea';

export default function Namebox(){
  const dispatch = useAppDispatch();
  
  const handleChange = useDebouncedCallback((term: string) => {
    dispatch(setSearchWord(term));
  }, 300);

  return(
  <>
    <HugeSearchArea placeholder='検索ワード' onChange={(e) => handleChange(e.target.value) } />
  </>)
} 