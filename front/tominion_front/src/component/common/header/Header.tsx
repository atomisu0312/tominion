import MyLink from '../link/MyLink'
export default function Header(){
  return(
    <>
      <div className= "flex flex-nowrap justify-center items-center">
        <MyLink to="/card" name="card"></MyLink>
        <MyLink to="/deck" name="deck"></MyLink>
        <MyLink to="/simulator" name="simulator"></MyLink>
        <MyLink to="/" name="top"></MyLink>
        <MyLink to="/account" name="account"></MyLink>
        <MyLink to="/team" name="team"></MyLink>
        <MyLink to="/history" name="history"></MyLink>
      </div>
    </>
  )
}