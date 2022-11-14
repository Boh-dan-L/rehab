import React,{forwardRef} from 'react'
import './title.scss'
import {motion} from 'framer-motion'

export const Title = forwardRef ((props, ref) => {
    return (
        <div
        ref={ref}
        className='title'>
            {props.anketa}{props.about}{props.footer}
        </div>
    )
})

export default Title
export const MTitle = motion (Title);
