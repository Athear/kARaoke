import React from "react";
import monitor from "../../images/monitor.jpg";
import classes from "./BackgroundVideo.module.css";

//  function SongVideo({mp4, song}) { 
//   //  console.log(props)
//     return <video
//     width="85%"
//     height="fit-content"
//     src={mp4}
//     controls
//     frameBorder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//     title={song}
//     autoPlay={true}
//     muted = {false}
//     playsInline={true}
//     /> 
//   }
  
  const SongVideo = ({mp4, song}) => {
    return (
        <div className = {classes.Container} >
            <img
    src={monitor}
    alt="monitor"
    />
    <div className={classes.Content}>
<div className ={classes.SubContent} >
<video className = {classes.Video} 
    // width="55%"
    // height="fit-content"
    controls
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={song}
    autoPlay= {false}
    muted = {true}
    playsInLine
    src = {mp4}
    /> 
</div>

    </div>
        </div>
    )
}



  export default SongVideo;