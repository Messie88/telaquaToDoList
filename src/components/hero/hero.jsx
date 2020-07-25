import React, { useState } from 'react';

import AddToDoItem from '../addtodo/addtodoitem';
import Note from "../note/note";
import Input from "../input/input";

import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';


import './hero.scss';

const HeroSection = () => {
    
    const [clicked, setClick] = useState(false);
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [todoCategory, setTodoCategory]  = useState(null);

    const handleClick = () => {
        setClick(true);
        
    }
    
    const handleSubmit = () => {
        setClick(false)
    }

    const addNote = newNote => {
        setNotes(prevNote => {
            return [...prevNote, newNote];
        })
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setTodoCategory(prev => {
           return { 
               ...prev,
               [name] : value}
            }
        );

        if (name === 'All') {
            notes/*.map((note, index) => {
                return <Note
                key={index}
               id={index}
               title={note.title}
               description={note.description}
               status={note.status}
               onDelete={deleteNote}
                />
            })*/
            .filter( note => 
                note.title.toLowercase().includes(search.toLocaleLowerCase()) )
        }
    }

    function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

    /*const filtered = notes.filter(note => 
        note.name.toLowerCase() )*/

    return (
        <div className="hero">
            <div className="note-input">
                {clicked && <AddToDoItem onAdd={addNote} onSubmit={handleSubmit} /> }
            </div>

            <div className="navbar">
                <div className="search">
                    <span><IosSearchOutline /></span>
                    {/*<Input onChange={} />*/}
                    <input 
                    type="search" 
                    placeholder='Search'
                    onChange={e => {
                        setSearch(e.target.value)
                    }}
                    />
                </div>
                <div className="all-todos">
                    <ul>
                        <li><button name="All" value='All' onClick={handleChange}>All</button></li>
                        <li><button name="To Do" value='To Do' onClick={handleChange}>To Do</button></li>
                        <li><button name="In Progress" value='In Progress' onClick={handleChange}>In Progress</button></li>
                        <li><button name="Done" value='Done' onClick={handleChange}>Done</button></li>
                    </ul>
                </div>
            </div>

            <div className="legend">
                <h4>Title</h4>
                <h4>description</h4>
                <h4>status</h4>
            </div>

            <div className="note-list">

            { notes.map((noteItem, index) => {
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