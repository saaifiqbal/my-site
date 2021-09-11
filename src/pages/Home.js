import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopBanner from '../components/TopBanner/TopBanner'
import LatestPost from '../components/LatestPost/LatestPost'

export default class Home extends Component {
    render() {
        return (
            <Fragment >
                <div className="signInBack">
                    <div className="signInBackOverlay">
                        <TopNavigation/>
                        <TopBanner/>
                        <LatestPost/>
                    </div>
                    
                </div>
                
            </Fragment>
        )
    }
}
