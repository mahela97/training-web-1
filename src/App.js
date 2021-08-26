import {Route, Switch} from "react-router-dom";
import React from 'react';
import AllDiary from "./components/pages/AllDiary";
import Layout from "./components/layout/Layout";
import DiaryHome from "./components/pages/DiaryHome";
import LoginPage from "./views/login/pages/LoginPage";

function App() {


    return (
        <Layout>
            <Switch>
                <Route path='/' exact={true}>
                    <LoginPage/>
                </Route>
                <Route path='/all-diary'>
                    <AllDiary/>
                </Route>
                <Route path='/add-diary'>
                    <DiaryHome/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
