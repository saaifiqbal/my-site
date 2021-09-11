import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container,  Row } from 'react-bootstrap'

export default class Registration extends Component {
   constructor(){
       super();
       this.state={
           file:null
       }
       this.handleChange=this.handleChange.bind(this)
   }
    handleChange=(event)=>{
        const file=event.target.files[0];
        this.setState({
        file:file
        })
    }
    onRegister=()=>{
        let firstName=document.getElementById("firstName").value;
        let lastName=document.getElementById("lastName").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let confirmPassword=document.getElementById("confirmPassword").value;
        let myFileName=this.state.file.name;
        alert("First Name: "+firstName+"\nLast Name: "+lastName+"\nPassword: "+password+"\nConfirm Password: "+confirmPassword+"\nEmail: "+
        email+"\nImage Name: "+myFileName)
    }
    render() {
        
        return (
            <Fragment>
                <Container className="signInBack p-0">
                <div className="signInBackOverlay ">
                    <Row className="  signInSize  p-5 ">

                    <Col className="marginLeft10 signInTop text-center mt-5" lg={12} md={12} sm={12}>
                        <h2 className="m-2 fontRal topSubTitle">Registration</h2>
                        <hr/>
                        <h4 className="fontRal topSubTitle">Create Your Account in Forums</h4>
                    </Col>
                    <Col className="marginLeft10 signInMid " lg={12} md={12} sm={12}>
                        <div className="paddingLeft50">
                            <label className="fontRal p-2 signInFont m-2">First Name </label><br/>
                            <input className="fontRal p-2 signInFont m-2 signInInputBar " id="firstName" type="text" placeholder="Enter Your First Name" /><br/>
                            <label className="fontRal p-2 signInFont m-2">Last Name </label><br/>
                            <input className="fontRal p-2 signInFont m-2 signInInputBar " id="lastName" type="text" placeholder="Enter Your Last Name" /><br/>
                            <label className="fontRal p-2 signInFont m-2 "  >Email</label><br/>
                            <input className="fontRal p-2 signInFont m-2 signInInputBar" id="email"  type="email"  placeholder="Enter Your Email "/><br/>
                            <label className="fontRal p-2 signInFont m-2 "  >Entar Your PassWord</label><br/>
                            <input className="fontRal p-2 signInFont m-2 signInInputBar" id="password"  type="password"  placeholder="Enter Your Password "/><br/>
                            <label className="fontRal p-2 signInFont m-2 "  >Conform Your PassWord</label><br/>
                            <input className="fontRal p-2 signInFont m-2 signInInputBar" id="confirmPassword"  type="password"  placeholder="Enter Your Password "/><br/>
                            <label className="fontRal p-2 signInFont m-2 "  >Upload your Image</label><br/>
                            <input type="file" className="ontRal p-2 signInFont m-2 signInInputBa" onChange={this.handleChange}/><br/>
                            <input type="submit" onClick={this.onRegister} className="fontRal signInFont m-2 signInBtn" />
                        </div>
                        
                    </Col>
                    </Row>
                </div>
                    
                </Container>
            </Fragment>
        )
    }
}
