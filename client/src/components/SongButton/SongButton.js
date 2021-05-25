import React from "react";
import "./style.css";

function SongButton({id, title, costume, cover, src, filter, handleClick}) {
    // console.log("songbutton props: ", id, title, costume, src, filter)
  return (
    <>
      <div className={"class"+ id} id={id} src={src} data-title={title} data-cover={cover} data-costume={costume} data-filter={filter} onClick={(e)=> handleClick(e)}>{title} </div>
     </>
  );
}

export default SongButton;
