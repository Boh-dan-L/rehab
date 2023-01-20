import React from 'react'
import './anketa.scss'
import Title from '../../components/Text/Title'
import Button from '../../components/Button-prime/Button'
import {motion} from 'framer-motion'

const Anketa = () => {

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
        className='anketa'>
            <motion.img custom={1} variants={animate} className='anketa__img'/>
            <motion.div custom={3} variants={animate} className='anketa__title'>
                <Title  anketa='Заповніть анкету для того, щоб отримати онлайн консультацію'/>
            </motion.div>
            <motion.a custom={4} variants={animate} href= "https://docs.google.com/forms/d/1PaT6OiPLtKgrAvfYbDyfBEXfSbQ0tJM76UZ8D6usu60/" target="_blank"  className='anketa__button'>
                <Button  anketa='Заповнити анкету'/>
            </motion.a>
        </motion.div>
    )
}

export default Anketa
