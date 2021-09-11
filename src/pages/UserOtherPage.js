import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import UserOther from '../components/UserOther/UserOther'

export default class UserOtherPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <UserOther />
            </Fragment>
        )
    }
}
