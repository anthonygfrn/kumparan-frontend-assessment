import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Posts from './components/Posts'
import Albums from './components/Albums'
import Photos from './components/Photos'
import Comments from './components/Comments'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/posts/:id" component={Posts} />
            <Route path="/albums/:id" component={Albums} />
            <Route path="/photos/:id" component={Photos} />
            <Route path="/comments/:id" component={Comments} />
        </Switch>
    </BrowserRouter>
)

export default Router;