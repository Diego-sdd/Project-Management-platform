import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Login/index';
import Home from './pages/Home/index';
import Controls from './pages/Control/index';
import ProfileADM from './pages/profileADM/index';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch >
                <Route path="/" exact component={Logon} />
                <Route path="/home" component={Home} />
                <Route path="/controls" component={Controls} />
                <Route path="/profileADM" component={ProfileADM} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;