import NavImageLink from "@/components/header/navImageLink";

export default function Header(){
  return(
    <>
      <div className= "flex flex-nowrap justify-center items-center">
        <NavImageLink to="/home/card" name="card"></NavImageLink>
        <NavImageLink to="/home/deck" name="deck"></NavImageLink>
        <NavImageLink to="/home/simulator" name="simulator"></NavImageLink>
        <NavImageLink to="/home" name="top"></NavImageLink>
        <NavImageLink to="/home/account" name="account"></NavImageLink>
        <NavImageLink to="/home/team" name="team"></NavImageLink>
        <NavImageLink to="/home/history" name="history"></NavImageLink>
      </div>
    </> 
  )
}