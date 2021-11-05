import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import { Posts, Albums, Photos, Comments, UserList } from '../pages/dashboard';
import Login from '../components/Login';
import { AuthProvider } from '../context/AuthContext';
import SignUp from '../components/SignUp';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../components/ForgotPassword';
import UpdateProfile from '../components/UpdateProfile';

const Routes = () => (
    <AuthProvider>
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={Dashboard} />
                <PrivateRoute
                    path="/update-profile"
                    exact
                    component={UpdateProfile}
                />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute path="/users/" component={UserList} />
                <PrivateRoute path="/posts/:id" component={Posts} />
                <PrivateRoute path="/albums/:id" component={Albums} />
                <PrivateRoute path="/photos/:id" component={Photos} />
                <PrivateRoute path="/comments/:id" component={Comments} />
            </Switch>
        </BrowserRouter>
    </AuthProvider>
);

export default Routes;
