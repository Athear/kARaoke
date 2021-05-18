import React from "react";

function SongButton({id, title, costume, src, filter, handleClick}) {
    // console.log("songbutton props: ", id, title, costume, src, filter)
  return (
      <>
      <button id={id} src={src} data-title={title} data-costume={costume} data-filter={filter} onClick={(e)=> handleClick(e)}>{title} </button>
      </>
   
  );
}

export default SongButton;
