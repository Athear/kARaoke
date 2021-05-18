import React from "react";
import SongVideo from "../SongVideo";
import "./style.css";




function SongSelection() {
  return (

  //if Miley: play Miley
  <SongVideo
  mp4="https://chriscastle.com/temp/chrisg/videos/Miley_Cyrus_Wrecking_Ball_Karaoke.mp4"
  song = "Wrecking Ball"
  artist = "Miley Cyrus"
  />
  )
}

//if else play Fred

    // <SongSelection
    // mp4="https://chriscastle.com/temp/chrisg/videos/ImTooSexy.mp4"
    // song = "I'm Too Sexy"
    // artist = "Right Said Fred"
    // />

    //else MAKE A SELECTION! 


export default SongSelection;