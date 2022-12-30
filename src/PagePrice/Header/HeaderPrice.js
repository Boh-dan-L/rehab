import React from 'react'
import  Title  from '../../components/Text/Title';
import './header-price.scss'

const HeaderPrice = () => {



    return (
    <div className='header-price'>
        <img className='header-price__img'/>
        <h1 className='header-price__text'>
            <Title price='послуги'/>
        </h1>
    </div>
    )
}

export default HeaderPrice
