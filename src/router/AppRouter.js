import React, { Component } from 'react'
import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import SignInPage from '../pages/SignInPage'
import CreateFormPage from '../pages/CreateFormPage'
import UserProfilePage from '../pages/UserProfilePage'
import UserOtherPage from '../pages/UserOtherPage'
import AllPost from '../pages/AllPost'
import RegistrationPage from '../pages/RegistrationPage'
import AllUserPostPage from '../pages/AllUserPost'

export default class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/SignIn" component={SignInPage} />
                    <Route  path="/CreateId" component={CreateFormPage} />
                    <Route  path="/UserProfilePage" component={UserProfilePage} />
                    <Route  path="/UserOtherPage" component={UserOtherPage} />
                    <Route  path="/Register" component={RegistrationPage} />
                    <Route  path="/AllPost" component={AllPost} />
                    <Route  path="/AllUserPost" component={AllUserPostPage} />
                </Switch>
            </Fragment>
        )
    }
}
