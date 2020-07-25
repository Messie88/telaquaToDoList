import React from "react";

import IosTrash from 'react-ionicons/lib/IosTrash';

import './note.scss';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className='note-section'>
      <div className="note">
        <h3>{props.title}</h3>
        <p className='desc'>{props.description}</p>
        <p>{props.status}</p>
      </div>
      <button onClick={handleClick}><IosTrash /></button>
    </div>
    
  );
}

export default Note;
