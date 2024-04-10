import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDebouncedCallback } from 'use-debounce';
import { setSearchWord } from '@/lib/features/home/card/search/seachSlice'
import {useAppDispatch, useAppSelector, useAppStore} from '@/lib/hooks'

export default function Namebox(){
  const dispatch = useAppDispatch();
  const searchWord = useSelector((state: RootState) => state.cardSearch.searchWord);
  
  const handleChange = useDebouncedCallback((term: string) => {
    dispatch(setSearchWord(term));
  }, 300);

  return(
  <>
    <div className=" h-full items-center grid grid-cols-12">
      <input type="text" placeholder='検索ワード' onChange={ (e) => handleChange(e.target.value) } className="text-4xl h-full  text-blue-600 col-span-11"/>
      <MagnifyingGlassIcon className="left-3 top-1/2 h-[100px] w-[100px] text-gray-200 peer-focus:text-gray-300" />
    </div>
  </>)
} 