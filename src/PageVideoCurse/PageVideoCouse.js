import React from 'react'
import HeaderExer from './Header/HeaderExer';
import PlayList from './VideoSlider/PlayList';
import VideoPrev from './VideoPrev/VideoPrev';



const PageVideoCouse = () => {

    return (
        <div >
            <HeaderExer/>
            {/* <VideoPrev/> */}
            <PlayList/>
        </div>
    )
}

export default PageVideoCouse
