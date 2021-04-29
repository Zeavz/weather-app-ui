import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

export default function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <Switch location={background || location}>
            <Route path="/" exact component={Home} />
            <Route path="/details" exact component={Details} />
        </Switch>
    );
}
