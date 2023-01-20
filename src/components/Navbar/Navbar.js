import React, { useState }  from "react";
import './navbar.scss'
import Menu from "./Menu";
import { Link } from "react-router-dom";



const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false)
    const items = [{id: 1, value:'головна', to:'/'},{id: 2, value:'послуги', to:'/services'},{id: 3, value:'реабілітація вдома', to:'/online'},{id: 4, value:'контакти', to:'/contacts'}]
    return (
        <header>
            <div className='nav'>
                <Link to="/" className="nav__link">
                    <div className='nav__link--logo'/>
                </Link>
                <div className='nav__burger' onClick={() => setMenuActive (!menuActive)}>
                    <span className={menuActive?'nav__burger--btn active':'nav__burger--btn'} />
                </div>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
        </header>
    )
}

export default Navbar
