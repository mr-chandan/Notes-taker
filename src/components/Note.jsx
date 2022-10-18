import React from "react";

function Note(props) {

function handelclick(){
  props.ondelete();
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button on onClick={handelclick}>DELETE</button>
    </div>
  );
}

export default Note;
