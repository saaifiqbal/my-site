import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
// import RestClient from '../../RestApi/RestClient'
// import AppUrl from '../../RestApi/AppUrl'
import '../../asset/css/response.css'

export default class TopBanner extends Component {
    
    // constructor(){
    //     super();
    //     this.state={
    //         title:"",
    //         subTitle:""
    //     }
    // }
    // componentDidMount(){
        
    //     RestClient.GetRequest(AppUrl.TopBannerDataBaseController).then(result=>{
    //         //console.log(result)
    //         this.setState({title:result[0]['TopTitle'],subTitle:result[0]['SubTitle']})
            
    //     }).catch(errror=>{
    //         alert("Error")
    //     })
    // }
    render() {
        
        return (
            <Fragment>
                <div className="middleSection">
                <Container className="TopFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContain">
                            <Row>
                                <Col className="marginLeft10">
                                    <h2 className="fontMon topTitle">Learn, Collaborate, Share Knowledge</h2>
                                    <h4 className="fontRal topSubTitle">Lambda Forums is the world's fastest growing coding forum</h4>
                                    <div >
                                    <input className="fontRal p-2 signInFont m-2 SearchBarEdit " type="text" placeholder="Search..." />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                </div>
            </Fragment>               
            
        )
    }
}
