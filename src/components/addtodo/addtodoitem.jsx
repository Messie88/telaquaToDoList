import React, { useState } from "react";

//import Input from "../input/input";

import './addtodoitem.scss';

const AddToDoItem = (props) => {

    const [note, setNote] = useState({
        title: "",
        description: "",
        status: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;

        if (name === 'Done') {
            setNote(note.status= 'Done');
            console.log(note.status);
        }

        setNote( prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const handleClick = e => {
        props.onAdd(note);
        e.preventDefault();
        setNote({
          title: "",
          description: ""
        });
        props.onSubmit();
    }

    return ( 
    <div className="add-todo">
        <form >
            <input 
            type="text" 
            name="title"
            placeholder='Title'
            value={note.title}
            onChange={handleChange}
            />
            <textarea 
            value={note.description}
            rows='3'
            name="content" 
            placeholder="description"
            onChange={handleChange}
            />
            <div className="footer">
                <div className="input">
                    <input 
                    type="radio" id="male" name="To Do" 
                    value={note.status}
                    onChange={handleChange}
                     />
                    <label>To Do</label>
                    <input type="radio" id="female" name="In Progress" 
                    value={note.status}
                    onChange={handleChange}
                    />
                    <label>In Progress</label>
                    <input type="radio" id="other" name="Done" 
                    value={note.status} 
                    onChange={handleChange}
                    />
                    <label>Done</label>
                </div>
            

            <button type='submit' onClick={handleClick}>Add</button>
            </div>
        </form>
    </div>)
}

export default AddToDoItem;