interface Props {
  name: string;
}

export default function BlockText({name}: Props){
  return (    
  <div className="flex items-center justify-center h-full">
    <span className="text-center">{name}</span>
  </div>) 
}