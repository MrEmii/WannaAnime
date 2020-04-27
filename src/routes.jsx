import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import App from './components/App';
import Home from './components/pages/Home/Home';
import Error from './components/pages/error/Error';
import Register from './components/pages/register/Register';
import Profile from './components/pages/profile/Profile';
import Anime from './components/pages/anime/Anime';
import Wallpapers from './components/pages/wallpapers/Wallpapers';
import Engine from './components/pages/engine/Engine';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/profile/:user" component={Profile} />
            <Route exact path="/anime/:anime" component={Anime} />
            <Route exact path="/ova/:anime" component={Anime} />
            <Route exact path="/movie/:anime" component={Anime} />
            <Route exact path="/wallpapers" component={Wallpapers} />
            <Route exact path="/ver/:anime/:cap" component={Engine} />
            <Route component={Error} />
        </Switch>
    </App>


export default withRouter(AppRoutes)