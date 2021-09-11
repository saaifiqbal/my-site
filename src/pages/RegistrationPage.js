import React, { Component } from 'react'
import { Fragment } from 'react'
import Registration from '../components/Registration/Registration'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class RegistrationPage extends Component {
    render() {
        return (
            <Fragment>
                    <TopNavigation/>
                    <Registration/>
                
            </Fragment>
        )
    }
}
