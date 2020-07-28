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
            description: 'liquip ex ea commodo. Lorem ipsum elit ',
            status: 'Done'
        },
        {
            title: 'bbbbbbb',
            description: 'Lorem ipsum elit, sed do eiusmod',
            status: 'In Progress'
        },
        {
            title: 'cccccc',
            description: 'tempor. Ut enim ad minim veniam',
            status: 'To Do'
        },
        {
            title: 'ddddaaa',
            description: 'quis nostrud exercitation ullamco ',
            status: 'Done'
        }
    ]);
    const [search, setSearch] = useState({
        search: ''
    });
    const [todoCategory, setTodoCategory]  = useState('');

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

    const filteredByCat = e => {
        const {name, value} = e.target;
        setTodoCategory(prevNote => {
            setTodoCategory({
                ...prevNote,
                [name]: value
            })
        })
        const categoryNotes = notes.filter(note => 
            note.status === value
        );
        console.log(categoryNotes);
    }
    

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
                        <li><button name="category" value='All' onClick={filteredByCat}>All</button></li>
                        <li><button name="category" value='To Do' onClick={filteredByCat}>To Do</button></li>
                        <li><button name="category" value='In Progress' onClick={filteredByCat}>In Progress</button></li>
                        <li><button name="category" value='Done' onClick={filteredByCat}>Done</button></li>
                    </ul>
                    
                </div>
            </div>

            <div className="legend">
                <h4>Title</h4>
                <h4>description</h4>
                <h4>status</h4>
            </div>

            <div className="note-list">
                {!filtered.length?
                    <div style={
                        {
                            height: '300px', 
                            width: '180px',
                            lineHeight: '300px', 
                            left: '45%', 
                            position: 'relative',
                            fontWeight: '100'
                        }}
                    >
                        <p>There is no matched notes</p>
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