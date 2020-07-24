import React, { useState } from 'react';

import AddToDoItem from '../addtodo/addtodoitem';
import Note from "../note/note";


import './hero.scss';

const HeroSection = () => {
    
    const [clicked, setClick] = useState(false);
    const [notes, setNotes] = useState([]);

    const handleClick = () => {
        setClick(true);
        console.log(clicked);
    }
    
    const handleSubmit = () => {
        setClick(false)
    }

    const addNote = newNote => {
        setNotes(prevNote => {
            return [...prevNote, newNote];
        })
    }

    function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

    return (
        <div className="hero">
            <div className="note-input">
                {clicked && <AddToDoItem onAdd={addNote} onSubmit={handleSubmit} /> }
            </div>
            <div className="legend">
                <h4>Title</h4>
                <h4>description</h4>
                <h4>status</h4>
            </div>
            <div className="note-list">

            {notes.map((noteItem, index) => {
             return (
             <Note
               key={index}
               id={index}
               title={noteItem.title}
               description={noteItem.description}
               status={noteItem.status}
               onDelete={deleteNote}
             />)
             })}
            </div>
            <button className='add' onClick={handleClick}>Add</button>
        </div>
    )
}

export default HeroSection;