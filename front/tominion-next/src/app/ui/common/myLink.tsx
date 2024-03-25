import Link from 'next/link';
import Image from "next/image";
import nextLogo from '/next.svg'
import ImageWithFallback from '@/app/ui/util/image/imageWithFallBack';

interface Props {
  to: string,
  name: string
};

export default function MyLink({to, name}: Props){
  return (
    <>
      <Link href={to}>
        <div className="border rounded p-4 justify-center">
          <ImageWithFallback            
            src={`/header/${name}.png`}
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority 
            fallback={'/next.svg'}/>
          <span className="block text-center">{name}</span>
        </div>
      </Link>
    </>
  )
}
