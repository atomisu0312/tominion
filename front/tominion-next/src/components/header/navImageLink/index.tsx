import LinkedImageOverText from '@/components/common/molecules/linkedImageOverText';

interface Props {
  to: string;
  name: string;
};

export default function NavImageLink({to, name}: Props){
  return (<>
    <LinkedImageOverText toLink={to} imgSrc={`/header/${name}.png`} imageText={name}/>
  </>)
}