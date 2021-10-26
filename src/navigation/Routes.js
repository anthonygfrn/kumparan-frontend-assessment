import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Posts, Albums, Photos, Comments, UserList } from "../pages/dashboard";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/"exact>
                <UserList />
            </Route>
            <Route path="/posts/:id" component={Posts} />
            <Route path="/albums/:id" component={Albums} />
            <Route path="/photos/:id" component={Photos} />
            <Route path="/comments/:id" component={Comments} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
