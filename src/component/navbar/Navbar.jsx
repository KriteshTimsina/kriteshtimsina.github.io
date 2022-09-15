import React,{useState} from 'react';
import './navbar.scss';
import navLinks from '../../data/navbar_data/Navlinks';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import {MdDarkMode} from 'react-icons/md';
import {MdOutlineDarkMode} from 'react-icons/md';
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
    const[isClicked,setIsClicked]=useState(false);
  return (
    <nav id='navbar' className={`${isClicked ? "active" : "" }`}>
        
        <div className='nav'>
        <div className="nav-left">
            <Link to="home"  spy={true} smooth={true} >
                <h1>Kritesh.</h1>
            </Link>
        </div>
        <div className='nav-right'>
            {
                navLinks.map(({id,title,link})=>{
                    return(
                        
                        <div key={id} className="link-hovered" style={{cursor:"pointer"}} >
                            <Link onClick={()=>setIsClicked(!isClicked)}  to={link}  spy={true} smooth={true} >{title}</Link>
                        </div>
                        
                    )
                })
            }
            {/* <div style={{cursor:"pointer",fontSize:"1.5rem"}} onClick={()=>setTheme(!theme)}>{theme ?<MdOutlineDarkMode /> :<MdDarkMode /> }</div> */}
        </div>
        </div>
        <div className="hamburger" onClick={()=>setIsClicked(!isClicked)}>
            {isClicked? <ImCross  /> : <GiHamburgerMenu />}
        </div>
    </nav>
  )
}

export default Navbar