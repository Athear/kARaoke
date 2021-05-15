import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const YoutubeEmbed = ({ embedId  }) => (
  <div className="video-responsive">
    <video
      width="853"
      height="480"
      src="https://chriscastle.com/temp/chrisg/videos/Miley_Cyrus_Wrecking_Ball_Karaoke.mp4"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      autoplay= "true"
      muted="true"
      playsinline="true"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string
};

export default YoutubeEmbed;