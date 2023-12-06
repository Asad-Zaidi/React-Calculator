import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Head = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><Link to='/'>Home</Link></li>
                    <li className="nav-item"><Link to='/Calculator'>Calculator</Link></li>
                    <li className="nav-item"><Link to='/Qoute'>Qoute</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Head