import React, { useState } from 'react';

import AddToDoItem from '../addtodo/addtodoitem';
import NoteList from "../note/note";
import Input from "../input/input";
import ErrorBoundary from '../errorBoundary'


import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';


import './hero.scss';

const HeroSection = () => {
    
    const [clicked, setClick] = useState(false);
    const [notes, setNotes] = useState([
        {
            title: 'aaaaaaa',
            description: 'bbbbbb',
            status: 'Done'
        },
        {
            title: 'bbbbbbb',
            description: 'ccccccc',
            status: 'In Progress'
        },
        {
            title: 'cccccc',
            description: 'dddddd',
            status: 'To Do'
        },
        {
            title: 'ddddaaa',
            description: 'zzzzzzz',
            status: 'Done'
        }
    ]);
    const [search, setSearch] = useState({
        search: ''
    });
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
    }

    function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

    const filtered = notes.filter(note => {
        return note.title.toString().toLowerCase().includes(search.search.toString().toLowerCase())
    });

    return (
        <div className="hero">
            <div className="note-input">
                {clicked && <AddToDoItem onAdd={addNote} onSubmit={handleSubmit} /> }
            </div>

            <div className="navbar">
                <div className="search">
                    <span><IosSearchOutline /></span>
                    <Input 
                    handleChange={e => {
                        setSearch({search: e.target.value})
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
                {notes.length === 0 ?
                    <div style={
                        {
                            height: '300px', 
                            width: '150px',
                            lineHeight: '300px', 
                            left: '46%', 
                            position: 'relative',
                            fontWeight: '100'
                        }}
                    >
                        <p>There is no notes</p>
                    </div>
                    :
                    <ErrorBoundary>
                        <NoteList 
                        notes={filtered} 
                        onDelete={deleteNote}
                        />
                    </ErrorBoundary>
                    
                }
            </div>
            <button className='add' onClick={handleClick}>Add</button>
        </div>
    )
}

export default HeroSection;