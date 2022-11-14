import React, { useState }  from "react";
import './navbar.scss'
import Menu from "./Menu";
import { NavLink } from "react-router-dom";



const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:'головна', to:'/'},{value:'послуги', href:'/'},{value:'онлайн реабілітація', to:'/online'},{value:'контакти', href:'/'}]
    return (
        <header>
            <div className='nav'>
                <NavLink to="/" className="nav__link">
                    <div className='nav__link--logo'/>
                </NavLink>
                <div className='nav__burger' onClick={() => setMenuActive (!menuActive)}>
                    <span className={menuActive?'nav__burger--btn active':'nav__burger--btn'} />
                </div>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
        </header>
    )
}

export default Navbar
