interface Props {
  labelStr: string;
}

export default function AttrSelectButton({labelStr}:Props){
  return(
    <div className="flex justify-center">
      <button className="hexagon-button bg-yellow-500 relative transform">
        <span className="absolute inset-0 flex items-center justify-center text-white">
          {labelStr}
        </span>
      </button>
    </div>)
}