import ImageWithFallback from "@/components/common/atoms/imageWithFallBack";
import BlockText from "@/components/common/atoms/blockText";

interface Props {
  imgSrc : string;
  text: string;
  fallbackImgSrc?: string;
}

export default function ImageOverText({ imgSrc, text, fallbackImgSrc='/next.svg', ...rest }: Props) {
  return (
    <div className="border rounded p-4 justify-center">
    <ImageWithFallback            
    //src={`/header/${name}.png`}
      src={imgSrc}
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority 
      fallback={fallbackImgSrc}/>
    <BlockText name={text}/>
  </div>
  )
}