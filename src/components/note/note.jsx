import React from "react";


import NoteItem from '../noteItem/noteItem'

import './note.scss';

const NoteList = (props) => {

  return (
      <div className='note'>
         { props.notes.map((noteItem, index) => {
          
            return <NoteItem key={index} id={index} note={noteItem} delete={() => {
              return props.onDelete(index)
              }} />
         })}
      </div>
    
  );
}

export default NoteList;
