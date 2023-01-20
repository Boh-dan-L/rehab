import React from 'react'
import {motion} from 'framer-motion'
import './loader.scss'

const Loader = () => {
    return (
        <motion.div
            className="loading"
            animate={{
                scale: [2, 1, 2, 1, 2],
                // rotate: [0, 0, 180, 180, 0],
                // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
    )
}

export default Loader
