import React, { Component } from 'react'
import { Fragment } from 'react'
import AllUserPost from '../components/All User Post/AllUserPost'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class AllUserPostPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="signInBack">
                    <div className="signInBackOverlay">               
                        <TopNavigation />
                        <AllUserPost />
                    </div>
                </div>
            </Fragment>
        )
    }
}
