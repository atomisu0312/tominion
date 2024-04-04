'use client'

import Namebox from '@/app/ui/card/search/namebox';
import CardKind from '@/app/ui/card/search/cardKind';
import Cost from '@/app/ui/card/search/cost';
import Owner from '@/app/ui/card/search/owner';
import StoreProvider from '@/app/home/card/StoreProvider'
import SearchResult from '@/app/ui/card/search/searchResult';

export default function Page() {
  
  return (
  <StoreProvider> {/* カードに関するレンダリングはクライアント側で行う */}
    <div className="flex flex-row justify-center h-[10vh] my-3">
      <div className="w-full mx-3 min-h-[10vh]">
          <Namebox/>
      </div>
    </div>
    <div className="flex flex-row justify-center h-[20vh]">
      <div className="flex flex-col justify-start w-2/3 mx-3 h-full">
        <Cost/>
        <Owner/>
      </div>
      <div className="flex flex-col justify-start w-1/3 mx-3 h-full">
          <CardKind/>
      </div>
    </div>
    <SearchResult/>
  </StoreProvider>
  );
}