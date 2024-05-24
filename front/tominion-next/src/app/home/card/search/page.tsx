'use client'
import StoreProvider from '@/app/home/card/StoreProvider'
import SearchResult from '@/app/ui/card/search/searchResult';
import SearchArea from '@/components/home/card/search/template';

export default function Page() {
  return (
  <StoreProvider> {/* カードに関するレンダリングはクライアント側で行う */}
    <div className="grid grid-rows-3">
      <div className="row-span-1">
        <SearchArea />
      </div>
      <div className="row-span-2">
        <SearchResult/>
      </div>
    </div>
  </StoreProvider>
  );
}