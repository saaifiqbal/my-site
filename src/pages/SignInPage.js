import React, { Component } from 'react'
import { Fragment } from 'react'
import SignIn from '../components/SignIn.js/SignIn'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class SignInPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <SignIn/>
            </Fragment>
        )
    }
}
