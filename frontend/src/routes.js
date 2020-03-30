import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'


import Logon from './pages/logon'
import Register from './pages/registrer'
import Profile from './pages/profile'
import NewInsident from './pages/newIncident'


export default function Routes(){
return(
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/incidents/new" component={NewInsident}/>
        </Switch>
    </BrowserRouter>
);
}