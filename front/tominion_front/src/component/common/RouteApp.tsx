import { Link, Outlet } from 'react-router-dom';
import Header from './header/Header'
import Footer from './footer/Footer'

export default function RouteApp(){
  return (
    <div className = "bg-blue-100 custom-border-div">
      <Header/>
      <hr/>
      <Outlet />
      <hr/>
      <Footer/>
    </div>
  )
}