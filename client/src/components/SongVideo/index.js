import React from "react";

 function SongVideo({mp4, song}) { 
  //  console.log(props)
    return <video
    width="85%"
    height="fit-content"
    src={mp4}
    controls
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={song}
    autoPlay={true}
    muted = {false}
    playsInline={true}
    /> 
  }
  
  export default SongVideo;