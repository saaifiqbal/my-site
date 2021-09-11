import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import UserProfile from '../components/UserProfile/UserProfile'

export default class UserProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <UserProfile/>
            </Fragment>
        )
    }
}
