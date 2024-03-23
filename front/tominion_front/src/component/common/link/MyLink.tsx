import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg'

interface Props {
  to: string,
  name: string
};

export default function MyLink({to, name}: Props){
  return (
    <>
      <Link to={to}>
        <div className="border rounded p-4 justify-center">
          <img src={viteLogo}/>
          <span className="block text-center">{name}</span>
        </div>
      </Link>
    </>
  )
}