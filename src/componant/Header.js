import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import { useState } from "react";
function Header() {
    const [isOpen, setIsOpen] = useState(false)
   

    const handBtn = () => {
        setIsOpen(!isOpen)
    }

   
    return (
        <>
            <div className="header">
                <h1>Logo</h1>
                <AiOutlineMenu size='50px' color="black" className="btn" style={{display:isOpen ?'flex' :"none"}}  onClick={handBtn}  />
                <AiOutlineClose className="btn" size=' 50px' style={{display:isOpen ?'none' :"flex"}}  onClick={handBtn}  />
                <ul style={{display:isOpen ?'none' :"flex"}}>
                    <li><NavLink to='/'> Home</NavLink>  </li>
                    <li><NavLink to="/service"> Service</NavLink>  </li>
                    <li><NavLink to='/feature'> Features</NavLink>  </li>
                    <li><NavLink to='/blog'>Blog</NavLink> </li>
                    <li><NavLink to='/about'>About</NavLink> </li>
                </ul>
            </div>
        </>
    );
}

export default Header;





