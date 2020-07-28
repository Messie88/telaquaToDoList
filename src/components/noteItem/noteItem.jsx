import React from 'react';

import IosTrash from 'react-ionicons/lib/IosTrash';

import './noteItem.scss'

const NoteItem = (props) => {
    return <div className="note-item">
        <div className='note-item-content'>
            <h3>{props.note.title}</h3>
            <p className='desc'>{props.note.description}</p>
            <p>{props.note.status}</p>
        </div>
        <button onClick={props.delete}>
            <IosTrash
            color='#4D4F5C'
             className='btn'
            />
        </button>
    </div>
}

export default NoteItem;