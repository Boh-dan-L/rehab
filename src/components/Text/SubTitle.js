import React from 'react'
import './subtitle.scss'

const SubTitle = (props) => {
    return (
        <div className='subtitle'>
        {props.about}
        </div>
    )
}

export default SubTitle
