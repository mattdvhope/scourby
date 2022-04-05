import React from "react"
import "~/styles/global.css"

const YoutubeVideo = ({src, title}) => {
	return (
    <div>
  		<iframe
        id="FrameHolder"
        src={src}
        title={title}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

export default YoutubeVideo
