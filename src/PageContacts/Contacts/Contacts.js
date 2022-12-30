import React from 'react'
import  Title  from '../../components/Text/Title';
import Button from '../../components/Button-prime/Button';
import './contacts.scss'

const Contacts = () => {
    return (
    <div className='contacts'>
        <img className='contacts__img' />
        <div className='contacts__title'>
            <Title className='contacts__title' footer='Контакти'/>
        </div>
        <div className='contacts__tell'>
            <a className='contacts__tell--namb' href='tel: +380500869337'>+38(050)-086-93-37</a>
        </div>
        <div className='contacts__icons'>
            <a href='#' className='contacts__icons--telega'></a>
            <a href='#' className='contacts__icons--facebook'></a>
            <a href='viber: // add?%20number%20=380500869337' className='contacts__icons--viber'></a>
            <a href='#' className='contacts__icons--youtube'></a>
            <a href='#' className='contacts__icons--instagram'></a>
        </div>
        <Button anketa='Заповнити анкету'/>
    </div>
    )
}

export default Contacts
