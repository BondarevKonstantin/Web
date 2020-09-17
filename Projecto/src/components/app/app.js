import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Header from '../header';
import {
    ModelPage,
    DatasetPage,
    HomePage,
    LoginPage,
    AddItemPage,
    UserPage,
} from '../pages';

import './app.sass'

const App = () => {
    return (
        <main role="main">
            <Header />
            <Switch>

                <Route path="/"
                       component={HomePage}
                       exact
                />

                <Route path="/models/:id?"
                       component={ModelPage}
                       exact
                />

                <Route path="/datasets/:id?"
                       component={DatasetPage}
                       exact
                />

                <Route path="/login"
                component={LoginPage}
                exact
                />

                <Route path="/add"
                component={AddItemPage}
                exact
                />

                <Route path="/user"
                component={UserPage}
                />

                <Redirect to={"/"} />
            </Switch>
        </main>
    );
};

export default App;
