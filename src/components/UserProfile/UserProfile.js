
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import Admin1 from '../../asset/image/Admin1.jpg'

export default class UserProfile extends Component {
    constructor(){
        super();
        this.state={
            show:true,
            selectedFile:Admin1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange=(event)=>{
        this.setState({
            selectedFile:URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/SignIn" />
        }
        else{

        
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
                                    <img src={this.state.selectedFile} className="userImage m-2" alt=" " /><br/>
                                    <input type="file" className="fontRal p-2 signInFont m-2 signInInputBar" onChange={this.handleChange} />
                                    </Col>
                                    <Col lg={8} md={12} sm={12}>
                                        <div>
                                            <h1 className="m-2 topTitle fontMon weight600">User Name </h1>
                                            <h4 className="m-2 topSubTitle fontRal weight600">Current Rating : 22</h4>
                                            <h4 className="m-2 topSubTitle fontRal weight600">Email : Users@gmail.com </h4>
                                            <h4 className="m-2 topSubTitle fontRal weight600">Member Since : mm/dd/yyyy hh:mm:ss AM/PM</h4>
                                            <h4 className="m-2 topSubTitle fontRal weight600">Status : Active</h4>
                                        </div>
                                    </Col>
                                </Row>
                                <input type="submit" className="fontRal signInFont m-4 signInBtn" />
                            </div>

                        </Col>
                        </Row>
                    </div>

                    </Container>
                </Fragment>
            )
        }
    }
}
