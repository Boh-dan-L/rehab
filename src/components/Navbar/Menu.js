import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.scss'

const Menu = ({items, active, setActive}) => {

    return (
        <div className={active?'menu menu__view':'menu'} onClick ={()=> setActive(false)}>
            <div className={active?'blur':''}/>
            <div className='menu__content' onClick={e=>e.stopPropagation()}>
                <ul>
                    {items.map(item =>
                        <li key={item.id} className='menu__content--li' onClick ={()=> setActive(false)}>
                            <NavLink className='menu__content--a' to={item.to}>{item.value}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu
