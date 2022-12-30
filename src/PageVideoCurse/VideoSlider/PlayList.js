import React from "react";
import "./videoplayer.scss";
import YouTube from "react-youtube";
import Title from "../../components/Text/Title";

const PlayList = () => {


    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            loop: 0,
            controls: 1,
            hl: 'uk',
            ListType: 'playlist',
            list: 'PLXJwr7tq-Wx98D_AyER5hZl9m_FXFx-_b'
        },
    };

return (
    <div>
        <div className="video-title">
            <Title exercis='Вправи на корекцію сколіотичкої постави'/>
        </div>
        <div className='video-container-styles'>
            <YouTube
            className={'video-styles'}
            opts={opts}
            />
        </div>
        <div className="video-title">
            <Title exercis='Для донатів:'/>
        </div>
        <div className="video-title">
            <Title exercis='5175-2378-8964-9328'/>
        </div>
    </div>
);
}

export default PlayList;