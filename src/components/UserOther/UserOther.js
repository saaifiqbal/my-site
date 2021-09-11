
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default class UserOther extends Component {
    render() {
        return (
            <Fragment>
                <Container className="signInBack  p-0">
                <div className="signInBackOverlay">
                    <Row className="  signInSize  p-5 ">

                    <Col className="marginLeft10 signInTop text-center mt-5" lg={12} md={12} sm={12}>
                        <h2 className="m-2 fontRal topSubTitle">User Profile </h2>
                        <hr/>
                        <h4 className="fontRal topSubTitle">Deactivale User</h4>
                    </Col>
                    <Col className="marginLeft10 signInMid" lg={12} md={12} sm={12}>
                        <div className="paddingLeft50">
                            <Row className="m-2">
                                <Col lg={4} md={12} sm={12}>
                                <img src="https://www.kidinc.org/wp-content/uploads/2020/11/KID_Homepage_Squares_Family.jpg" className="userImage m-2" alt=" " /><br/>
                                
                                </Col>
                                <Col lg={8} md={12} sm={12}>
                                    <div>
                                        <h1 className="m-2 topTitle fontMon weight600">User Name </h1>
                                        <h4 className="m-2 topSubTitle fontRal weight600">Current Rating : 2</h4>
                                        <h4 className="m-2 topSubTitle fontRal weight600">Email : Users@gmail.com </h4>
                                        <h4 className="m-2 topSubTitle fontRal weight600">Member Since : mm/dd/yyyy hh:mm:ss AM/PM</h4>
                                        <h4 className="m-2 topSubTitle fontRal weight600">Status : Active</h4>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                    </Row>
                </div>
                    
                </Container>
            </Fragment>
        )
    }
}
