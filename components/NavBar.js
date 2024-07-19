import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>ChoreMaster Plus</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chores">Chores</Link></li>
                <li><Link to="/rewards">Rewards</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/quests">Quests</Link></li>
                <li><Link to="/challenge">Challenge</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
