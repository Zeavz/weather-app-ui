import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

export default function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <div className="w-full bg-gray-200 px-4 relative">
            <Switch location={background || location}>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Details} />
            </Switch>
        </div>
    );
}
