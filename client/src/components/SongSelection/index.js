import React from "react";
import SongVideo from "../SongVideo";
import "./style.css";




function SongSelection({currentSong, videoref, imgref}) {
  console.log("songSelection: ", currentSong.song);
  return (
  <SongVideo
  mp4={currentSong.song}
  song = {currentSong.name}
  videoref={videoref}
  imgref={imgref}
  />
  )
}

export default SongSelection;