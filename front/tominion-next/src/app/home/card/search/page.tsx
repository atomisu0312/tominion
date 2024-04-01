import { redirect } from 'next/navigation'
import Namebox from '@/app/ui/card/search/namebox';
import CardKind from '@/app/ui/card/search/cardKind';
import Cost from '@/app/ui/card/search/cost';
import Owner from '@/app/ui/card/search/owner';

export default function Page() {
  return (<>
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
  <p>Search Result</p>
  </>
  );
}