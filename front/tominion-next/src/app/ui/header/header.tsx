import MyLink from "@/app/ui/common/myLink";

export default function Header(){
  return(
    <>
    <>
      <div className= "flex flex-nowrap justify-center items-center">
        <MyLink to="/home/card" name="card"></MyLink>
        <MyLink to="/home/deck" name="deck"></MyLink>
        <MyLink to="/home/simulator" name="simulator"></MyLink>
        <MyLink to="/home" name="top"></MyLink>
        <MyLink to="/home/account" name="account"></MyLink>
        <MyLink to="/home/team" name="team"></MyLink>
        <MyLink to="/home/history" name="history"></MyLink>
      </div>
    </> 
    
    </>
  )
}