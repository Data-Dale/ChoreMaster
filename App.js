import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ChoreList from './components/ChoreList';
import Profile from './components/Profile';
import RewardStore from './components/RewardStore';
import Leaderboard from './components/Leaderboard';
import QuestBoard from './components/QuestBoard';
import TimedChallenge from './components/TimedChallenge';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chores" component={ChoreList} />
                <Route path="/profile" component={Profile} />
                <Route path="/rewards" component={RewardStore} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/quests" component={QuestBoard} />
                <Route path="/challenge" component={TimedChallenge} />
            </Switch>
        </Router>
    );
};

export default App;
