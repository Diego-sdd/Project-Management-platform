import React from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import Logon from './pages/Login/index';
import Home from './pages/Home/index';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch >
                <Route path="/" exact component={Logon} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;