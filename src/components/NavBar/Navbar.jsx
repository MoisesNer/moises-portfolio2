import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { menuData } from '../../data/MenuData'
import logo from '../../images/navbarlogo.png'

function Navbar() {
    const [scrollNavBar, setScrollNavbar] = useState(false)

    const changeColor = () => {
        if(window.scrollY >=  1000){
            setScrollNavbar(true)
        } else{
            setScrollNavbar(false)
        }
    } 
    window.addEventListener('scroll', changeColor)

    return (
        <div className={scrollNavBar ? 'navbar active' : 'navbar'}>
            <Link to='/'>
                <img className='navbar-logo' src={logo} alt="moises nervus logo" />
            </Link>
            <div className="nav-menu">
                {menuData.map((item, index) => (
                    <Link className='navbar-link' to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="navbar-wrap">
                <a className='navbar-button' href="https://www.moisesnervis.com/" rel="noreferrer"
                    target='_blank'>GD Portfolio</a>
            </div>
        </div>
    )
}

export default Navbar