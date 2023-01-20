import React from 'react'
import Title from '../Text/Title'
import { TbBrandTelegram} from "react-icons/tb"
import { FiFacebook } from "react-icons/fi"
import { BsTelephoneForwardFill } from "react-icons/bs"
import { FaViber} from "react-icons/fa"
import { FiYoutube} from "react-icons/fi"
import { FiInstagram} from "react-icons/fi"
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
                <a href='https://t.me/Bogdanrehab' target='_blank' className='footer__icons--telega'><TbBrandTelegram className='react-icons' /></a>
                <a href='https://www.facebook.com/Bogdan.rehab' target='_blank' className='footer__icons--facebook'><FiFacebook className='react-icons'/></a>
                <a href='viber://add?number=380500869337' target='_blank' className='footer__icons--viber'><FaViber className='react-icons'/></a>
                <a href='https://www.youtube.com/channel/UCwmnffKo-6yY4u5SaXMB5eA' target='_blank' className='footer__icons--facebook'><FiYoutube className='react-icons'/></a>
                <a href='https://www.instagram.com/bogdan.rehab/' target='_blank' className='footer__icons--facebook'><FiInstagram className='react-icons'/></a>
            </div>
        </div>
    )
}

export default Footer
