import React, { Component } from 'react'
import { Fragment } from 'react'
import AllPostCom from '../components/AllPostCom/AllPostCom'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class AllPost extends Component {
    render() {
        return (
            <Fragment>
                <div className="signInBack">
                    <div className="signInBackOverlay">               
                        <TopNavigation />
                        <AllPostCom />
                    </div>
                </div>
            </Fragment>
        )
    }
}
