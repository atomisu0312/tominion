interface Props {
  name: string;
}

export default function BlockText({name}: Props){
  return (<span className="block text-center">{name}</span>) 
}