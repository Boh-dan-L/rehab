import React from 'react'
import Button from '../../components/Button-prime/Button'
import Title from '../../components/Text/Title'
import {motion} from 'framer-motion'
import './price.scss'
import Accordion from './Accordion'

const Price = () => {

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


let price = [
    {
        id: 1,
        title:'Реабілітація з виїздом на дом',
        price:'від 800 грн',
        btn:'Записатись',
        detal: 'Детальніше',
        trg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.'
    },
    {
        id: 2,
        title:'Онлайн консультація',
        price:'300 грн',
        btn:'Записатись',
        detal: 'Детальніше',
        trg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.'
    },
    {
        id: 3,
        title:'Онлайн реабілітація',
        price:'300 грн',
        btn:'Записатись',
        detal: 'Детальніше',
        trg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.'
    }];

    return (
    <div className='price'>
        <motion.ul initial='hidden' whileInView='visible' viewport={{amout: 0.1, once: true,}}>
            {price.map(pr=>
                <motion.li custom={pr.id} variants={animate} key={pr.id} className='price__li'>
                    <div className='price__title'>
                        <Title  price={pr.title}></Title>
                    </div>
                    <div className='price__subtitle'>
                        <Title  price={pr.price}></Title>
                    </div>
                    <div className='price__btn'>
                        <a href='https://www.bogdan-rehab.com.ua/#/contacts'><Button price={pr.btn}></Button></a>
                    </div>
                    <div>
                        <Accordion btn={pr.detal} title={pr.trg}/>
                    </div>
                </motion.li>)}
        </motion.ul>
    </div>
    )
}

export default Price
