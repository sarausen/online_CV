import { NavLink } from "react-router-dom"
import './style.css'
import Image from '../../assets/image.jpg'

export const Nav = () => {
  return (
    
  <div className="menu_block">
    <div className="contents">
        <img className='about_photo' src={Image} alt=""/>
        <h3 className="menu_name">Suusara Mataeva</h3>
        <p className="speciality">Frontend developer</p>
      <ul className="nav">
      <li> 
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Resume</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
     </ul>
    </div>
  </div>

  
  )
}