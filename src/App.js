import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';



const App = () =>{
    const clientId = '268548838482-1jsla1kct3eakj1utbmrh3ve8ign8bkl.apps.googleusercontent.com'
    const user = JSON.parse(localStorage.getItem('profile'));
    return(
        <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
        <Container maxWidth='xl'>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={()=> <Redirect to='/posts'/>}/>
                <Route path='/posts' exact component={Home}/>
                <Route path='/posts/search' exact component={Home}/>
                <Route path='/posts/:id' exact component={PostDetails}/>
                <Route path='/auth' exact component={()=>(!user?<Auth/>:<Redirect to='/posts'/>)}/>
            </Switch>
        </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App;