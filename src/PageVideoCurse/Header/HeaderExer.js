import React from 'react'
import  Title  from '../../components/Text/Title';
import './header-exer.scss'

function HeaderExer() {
    return (
    <div className='header-exer'>
        <img className='header-exer__img'/>
        <h1 className='header-exer__text'>
            <Title  exercis='Реабілітація вдома'/>
        </h1>
    </div>
    )
}

export default HeaderExer
