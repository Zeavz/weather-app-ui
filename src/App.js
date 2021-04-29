import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

export default function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    console.log(
        '\n' +
            ' _    _        _                                    _____  _               ______                      _____                           _    _                __   __                       \n' +
            '| |  | |      | |                                  |_   _|( )              | ___ \\                    |  ___|                         | |  (_)               \\ \\ / /                       \n' +
            '| |  | |  ___ | |  ___   ___   _ __ ___    ___       | |  |/ __   __  ___  | |_/ /  ___   ___  _ __   | |__  __  __ _ __    ___   ___ | |_  _  _ __    __ _   \\ V /   ___   _   _          \n' +
            "| |/\\| | / _ \\| | / __| / _ \\ | '_ ` _ \\  / _ \\      | |     \\ \\ / / / _ \\ | ___ \\ / _ \\ / _ \\| '_ \\  |  __| \\ \\/ /| '_ \\  / _ \\ / __|| __|| || '_ \\  / _` |   \\ /   / _ \\ | | | |         \n" +
            '\\  /\\  /|  __/| || (__ | (_) || | | | | ||  __/ _   _| |_     \\ V / |  __/ | |_/ /|  __/|  __/| | | | | |___  >  < | |_) ||  __/| (__ | |_ | || | | || (_| |   | |  | (_) || |_| | _  _  _ \n' +
            ' \\/  \\/  \\___||_| \\___| \\___/ |_| |_| |_| \\___|( )  \\___/      \\_/   \\___| \\____/  \\___| \\___||_| |_| \\____/ /_/\\_\\| .__/  \\___| \\___| \\__||_||_| |_| \\__, |   \\_/   \\___/  \\__,_|(_)(_)(_)\n' +
            '                                               |/                                                                  | |                                 __/ |                               \n' +
            '                                                                                                                   |_|                                |___/                                \n',
    );
    return (
        <Switch location={background || location}>
            <Route path="/" exact component={Home} />
            <Route path="/details" exact component={Details} />
        </Switch>
    );
}
