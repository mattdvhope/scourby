import React from "react"
import "~/styles/global.css"

const YoutubeVideo = ({src, title}) => {
	return (
    <div className="youtube-video-container">
  		<iframe
        id="FrameHolder"
        className="youtube-video-container" 
        src={src}
        title={title}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

export default YoutubeVideo
