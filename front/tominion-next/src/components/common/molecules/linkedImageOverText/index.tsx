import Link from 'next/link';
import ImageOverText from '@/components/common/molecules/imageOverText';

interface Props {
  toLink: string;
  imgSrc: string;
  imageText: string;
};

export default function LinkedImageOverText({toLink, imgSrc, imageText}: Props) {
  return(
    <Link href={toLink}>
      <ImageOverText imgSrc = {imgSrc} text={imageText}/>
    </Link>
  )
}