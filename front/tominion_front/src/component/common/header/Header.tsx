import MyLink from '../link/MyLink'
export default function Header(){
  return(
    <>
      <div className= "flex flex-nowrap justify-center items-center">
        <MyLink to="/card" name="card"><span>カード</span></MyLink>
        <MyLink to="/" name="top"><span>トップ</span></MyLink>
        <MyLink to="/deck" name="deck"><span>デッキ</span></MyLink>
      </div>
    </>
  )
}