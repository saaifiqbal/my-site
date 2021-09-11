import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export default class SignIn extends Component {
    render() {
        return (
            <Fragment>
                <Container className="signInBack  p-0">
                <div className="signInBackOverlay">
                    <Row className="  signInSize  p-5 ">

                    <Col className="marginLeft10 signInTop text-center mt-5" lg={12} md={12} sm={12}>
                        <h2 className="m-2 fontRal topSubTitle">Create New Forum</h2>
                    </Col>
                    <Col className="marginLeft10 signInMid" lg={12} md={12} sm={12}>
                        <div className="paddingLeft50">
                            
                            <Form.Group  className=" paddingLeft50 mb-3">
                                <label className="fontRal p-2 signInFont m-2" >Forum Title </label><br/>
                                <input className="fontRal p-2 signInFont m-2 signInInputBar"  type="text" placeholder="Choose a Forum Title "/><br/>
                                <label className="fontRal p-2 signInFont m-2 "  >Description</label><br/>
                                <input className="fontRal p-2 signInFont m-2 signInInputBar"  type="text" placeholder="Write a brief description here "/><br/>
                                <label className="fontRal p-2 signInFont m-2 "  >Upload Forum Image</label><br/>
                                <input className="fontRal p-2 signInFont m-2 signInInputBar"  type="file" /><br/>
                            </Form.Group>
                            <input type="submit" className="fontRal signInFont m-2 signInBtn" />
                        </div>
                        
                    </Col>
                    </Row>
                </div>
                    
                </Container>
            </Fragment>
        )
    }
}
