import React from 'react'
import  Title  from '../../components/Text/Title';
import Button from '../../components/Button-prime/Button';
import {motion} from 'framer-motion'
import './contacts.scss'

const Contacts = () => {


    const animate = {
        hidden:{
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1 }
        }),
    };

    return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{amout: 0.1, once: true,}}
    className='contacts'>
        <motion.img custom={1} variants={animate} className='contacts__img' />
        <motion.div custom={2} variants={animate} className='contacts__title'>
            <Title className='contacts__title' footer='Контакти'/>
        </motion.div>
        <motion.div custom={2} variants={animate} className='contacts__tell'>
            <a className='contacts__tell--namb' href='tel: +380500869337'>+38(050)-086-93-37</a>
        </motion.div>
        <motion.div custom={3} variants={animate} className='contacts__icons'>
            <a href='https://t.me/Bogdanrehab' target="_blank" className='contacts__icons--telega'></a>
            <a href='https://www.facebook.com/Bogdan.rehab' target='_blank'  className='contacts__icons--facebook'></a>
            <a href='viber://add?number=380500869337' target='_blank' className='contacts__icons--viber'></a>
            <a href='https://www.youtube.com/channel/UCwmnffKo-6yY4u5SaXMB5eA' target='_blank' className='contacts__icons--youtube'></a>
            <a href='https://www.instagram.com/bogdan.rehab/' target='_blank'  className='contacts__icons--instagram'></a>
        </motion.div>
        <motion.a custom={4} variants={animate} href='https://docs.google.com/forms/d/1PaT6OiPLtKgrAvfYbDyfBEXfSbQ0tJM76UZ8D6usu60/' target="_blank" ><Button anketa='Заповнити анкету'/></motion.a>
    </motion.div>
    )
}

export default Contacts
