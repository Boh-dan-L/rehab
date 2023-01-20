import React from "react";
import "./videoplayer.scss";
import YouTube from "react-youtube";
import Title from "../../components/Text/Title";
import {motion} from 'framer-motion'

const PlayList = () => {

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

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            loop: 0,
            controls: 1,
            hl: 'uk',
            ListType: 'playlist',
            list: 'PLXJwr7tq-Wx98D_AyER5hZl9m_FXFx-_b'
        },
    };

return (
    <motion.div initial='hidden' whileInView='visible' viewport={{amout: 0.1, once: true,}} className="video">
        <motion.div custom={1} variants={animate} className="video-title">
            <Title exercis='Вправи на корекцію сколіотичної постави'/>
        </motion.div>
        <motion.div custom={2} variants={animate} className='video-container-styles'>
            <YouTube
            className={'video-styles'}
            opts={opts}
            />
        </motion.div>
        <motion.div custom={3} variants={animate} className="video-title">
            <Title exercis='Для донатів:'/>
        </motion.div>
        <motion.div custom={4} variants={animate} className="video-donate">
            <a href="https://send.monobank.ua/jar/2fDaWaSzTd" target="_blank" className="video-donate__mono"/>
            <a href="https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%225168752080776746%22%2C%22amt%22%3A%220%22%2C%22ccy%22%3A%22UAH%22%7D" target="_blank" className="video-donate__privat"/>
        </motion.div>
    </motion.div>
);
}

export default PlayList;