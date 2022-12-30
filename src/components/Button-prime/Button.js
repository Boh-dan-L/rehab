import React from 'react'
import './button-prime.scss'

const Button = (props) => {
    // const Tag = Attr.href ? 'a' : 'button';
    return (
        <button  className='button-prime'>
            {props.anketa}{props.price}
        </button>
    )
}

export default Button
