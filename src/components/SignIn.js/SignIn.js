import React, { Component,Fragment } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { NavLink, Redirect } from 'react-router-dom'

export default class SignIn extends Component {
    onLogin=()=>{
        let name=document.getElementById("name").value;
        let password=document.getElementById("password").value;

        if(password==="pass_me"){
            sessionStorage.setItem("userName",name);
            window.location.reload();
        }else{
            document.getElementById("submit").innerHTML="Wrong Password!";
            setTimeout(function(){
                document.getElementById("submit").innerHTML="Submit";
            },2000)
        }
    }
    render() {
        if(sessionStorage.getItem("userName")==null){
            return (
                <Fragment>
                    <Container className="signInBack  p-0">
                    <div className="signInBackOverlay">
                        <Row className="  signInSize  p-5 ">

                        <Col className="marginLeft10 signInTop text-center mt-5" lg={12} md={12} sm={12}>
                            <h2 className="m-2 fontRal topSubTitle">Sign In</h2>
                            <hr/>
                            <h4 className="fontRal topSubTitle">Sign in to your account to paid in like Forums</h4>
                        </Col>
                        <Col className="marginLeft10 signInMid" lg={12} md={12} sm={12}>
                            <div className="paddingLeft50">

                                <input className="fontRal p-2 signInFont m-2 signInInputBar" id="name" type="text" placeholder="Enter Your Username "/><br/>

                                <input className="fontRal p-2 signInFont m-2 signInInputBar" id="password" type="password" placeholder="Enter Your Password "/><br/>


                                <input type="submit" onClick={this.onLogin} id="submit" className="fontRal signInFont m-2 signInBtn" />
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className="topNav" to="/Register">Register as a New User</NavLink></Nav.Link>
                            </div>

                        </Col>
                        </Row>
                    </div>

                    </Container>
                </Fragment>
            )
        }
        else{
            return <Redirect to="/" />
        }   
    }

}   
