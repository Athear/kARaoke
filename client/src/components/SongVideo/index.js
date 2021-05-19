import React from "react";

 function SongVideo(props) { 
  //  console.log(props)
    return <video
    width="85%"
    height="fit-content"
    src={props.mp4}
    controls
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={props.song + " by " + props.artist}
    autoPlay= "false"
    muted = "true"
    playsInLine="true"
    /> 
  }
  
  export default SongVideo;