import React from 'react'
import Title from '../Text/Title'
import { FaTelegram } from "react-icons/fa"
import { BsFacebook } from "react-icons/bs"
import { BsTelephoneForwardFill } from "react-icons/bs"
import { FaViber} from "react-icons/fa"
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__title'>
                <Title className='footer__title' footer='Контакти'/>
            </div>
            <div className='footer__tell'>
                <a className='footer__tell--namb' href='tel: +380500869337'><BsTelephoneForwardFill className='phone__icon'/>+38(050)-086-93-37</a>
            </div>
            <div className='footer__icons'>
                <a href='#' className='footer__icons--telega'><FaTelegram/></a>
                <a href='#' className='footer__icons--facebook'><BsFacebook/></a>
                <a href='#' className='footer__icons--viber'><FaViber/></a>
            </div>
        </div>
    )
}

export default Footer
