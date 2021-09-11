import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CreateForm from '../components/CreateForm/CreateForm'

export default class CreateFormPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <CreateForm />
            </Fragment>
        )
    }
}
