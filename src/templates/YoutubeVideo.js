import React from "react"
// import "./BlogPost.css";

const YoutubeVideo = ({src, title}) => {
	return (
		<iframe // Youtube video 
      id="FrameHolder"
      className="video-box" 
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  )
}

export default YoutubeVideo
