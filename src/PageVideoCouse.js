import React from 'react'
import PlayVideo from './components/VideoSlider/PlayVideo';


const PageVideoCouse = () => {
    const pageCourse = {
        padding: '65px 15px',
        with: '100vw',
        height: '100vh'
    };
    return (
        <div style={pageCourse}>
            <PlayVideo/>
        </div>
    )
}

export default PageVideoCouse
