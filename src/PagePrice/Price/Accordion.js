import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from '../../preloader/Loader';
import "./accordion.scss"

const Accordion = (props) => {
    const [active, setActive] = useState(false)

    return (
        <div className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__title" onClick={() => setActive(!active)}>
                <span>{props.btn}</span>
                <div className="accordion__icon">
                    <i className='bx bxs-chevron-down'></i>
                </div>
            </div>
            <div className="accordion__content">
                {props.title}
            </div>
        </div>
    )
}

export default Accordion