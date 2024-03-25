import Link from 'next/link';
import Image from "next/image";
import nextLogo from '/next.svg'

interface Props {
  to: string,
  name: string
};

export default function MyLink({to, name}: Props){
  return (
    <>
      <Link href={to}>
        <div className="border rounded p-4 justify-center">
          <Image            
            src='/next.svg'
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority/>
          <span className="block text-center">{name}</span>
        </div>
      </Link>
    </>
  )
}