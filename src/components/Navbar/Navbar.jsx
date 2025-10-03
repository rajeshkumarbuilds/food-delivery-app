import React, { useContext, useState } from 'react'
import { auth } from "../../firebase";
import {  signOut } from  "firebase/auth";
import './Navbar.css'
import { assets } from '../../assets/assets'
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowlogin,user,setUser }) => {
    const { theme, toggleTheme } = useContext(StoreContext)
    const [menu, setMenu] = useState("home")

      const logout = () => {
        signOut(auth);
        setUser(null);
      };

    return (
        <div id='nav' className='navbar'>
            <Link to={'/'}><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <span className='theme' onClick={toggleTheme}> {theme === "light" ? <IoMdMoon /> : <IoMdSunny />}</span>
                <div className="navbar-search-icon">
                    <Link to={'/cart'} onClick={() => setMenu("cart")} className={menu === "cart" ? "active" : ""}><FaCartPlus className='basket' /></Link>
                    <div className="dot"></div>
                </div>
                {user?<button className='sign-in' onClick={logout}>sign out</button>:<button className='sign-in' onClick={() => setShowlogin(true)}>sign in</button>}
                
                {user?setShowlogin(false):""}
                
            </div>

        </div>
    )
}

export default Navbar