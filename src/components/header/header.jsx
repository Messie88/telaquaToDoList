import React from 'react';

import Input from "../input/input";

import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline'

import './header.scss'


const Header = () => {
    return (
        <div className="header">
            <div className="title">
                <h2>Todos</h2>
            </div>
            <div className="navbar">
                <div className="search">
                <span><IosSearchOutline /></span>
                <Input />
            </div>
            <div className="all-todos">
                <ul>
                    <li>All</li>
                    <li>To Do</li>
                    <li>In Progress</li>
                    <li>Done</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Header;