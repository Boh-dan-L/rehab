import React from 'react'
import Button from '../../components/Button-prime/Button'
import Title from '../../components/Text/Title'
import './price.scss'

const Price = () => {

let price = [
    {id: 1, title:'Реабілітація з виїздом на дом', price:'від 800 грн', btn:'Записатись'},
    {id: 2, title:'Онлайн консультація', price:'300 грн',btn:'Записатись'},
    {id: 3, title:'Онлайн реабілітація', price:'300 грн',btn:'Записатись'}];

    return (
    <div className='price'>
        <ul>
            {price.map(pr=>
                <li key={pr.id} className='price__li'>
                    <div className='price__title'>
                        <Title  price={pr.title}></Title>
                    </div>
                    <div className='price__subtitle'>
                        <Title  price={pr.price}></Title>
                    </div>
                    <div className='price__btn'>
                        <Button price={pr.btn}></Button>
                    </div>
                </li>)}
        </ul>
    </div>
    )
}

export default Price
