import React from "react";
import classes from "./BackgroundVideo.module.css";

const SongVideo = ({ mp4, song, videoref }) => {
  return (
    <div className={classes.Container} >
      <div className={classes.Image} >
      </div>
      <div className={classes.Content}>
        <div className={classes.SubContent + " " + classes.Video} >
          <video className="test"
            controls
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={song}
            autoPlay={false}
            muted={false}
            playsInline
            src={mp4}
            ref={videoref}
          />
        </div>

      </div>
    </div>
  )
}



export default SongVideo;