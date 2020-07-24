import React from "react";

import './note.scss'

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.status}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
