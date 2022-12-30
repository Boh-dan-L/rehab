import React from "react";
import "./videoPrev.scss";
import YouTube from "react-youtube";
import Button from "../../components/Button-prime/Button";

const VideoPrev = () => {

    const prev = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            disablekb: 1,
            controls: 1,
            cc_load_policy: 1,
            hl: 'uk',
        },
    };

return (
    <div>
        <div className='video-prev'>
            <YouTube
            videoId="BC6-ac85EBg"
            className={'video-prev__style'}
            opts={prev}
            />
        </div>
        <div className="video-prev__btn">
            <Button anketa='Заповнити анкету'/>
        </div>
    </div>
);
}

export default VideoPrev;