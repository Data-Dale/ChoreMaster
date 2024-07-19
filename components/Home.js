import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to ChoreMaster Plus!</h2>
            <div className="quick-access">
                <button className="arcade-button">Chore List</button>
                <button className="arcade-button">Rewards</button>
                <button className="arcade-button">Leaderboard</button>
            </div>
            <div className="daily-quest">
                <h3>Daily Quest</h3>
                <p>Complete 5 chores to earn bonus points!</p>
            </div>
        </div>
    );
};

export default Home;
