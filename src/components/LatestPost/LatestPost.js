import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import AppUrl from '../../RestApi/AppUrl';
// import RestClient from '../../RestApi/RestClient';

export default class LatestPost extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         myData:[]
    //     }
    // }
    // componentDidMount(){
    //     RestClient.GetRequest(AppUrl.postListSelectAll).then(result=>{
    //         this.setState({myData:result})
    //     })
    // }
    
    render() {
        // const myList=this.state.myData;
        // const myView=myList.map(myList=>{
        //     return <div className="marginLeft10 p-3">
        //             <Row >
        //                 <Col lg={3} md={3} sm={12}>
        //                     <Link to="/AllPost" ><img className="topIcon ml-5" src={myList.PostImageUrl} alt=" "/></Link>
                            
        //                 </Col>
        //                 <Col lg={9} md={9} sm={12}>
                            
        //                 <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> {myList.PostListTitle} </h4></Link>
        //                     <h7 className="fontRal "> {myList.PostSubTitle}</h7>
                            
        //                 </Col>
                        
                        
        //             </Row>
        //             <hr/>
        //             </div>
        // })
        return(
            <Fragment>
                
                <div className="middleSection">
                    <Container  className="letestPost m-0">
                        <Row>
                            <div className="p-4">
                                <h1>Latest Posts</h1>
                                <hr/>
                            </div>
                            {/* {myView} */}
                        <div className="marginLeft10 p-3">
                            <Row >
                                <Col lg={3} md={3} sm={12}>
                                    <Link to="/AllPost" ><img className="topIcon ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt=" "/></Link>
                                    
                                </Col>
                                <Col lg={9} md={9} sm={12}>
                                    
                                <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> Post Title </h4></Link>
                                    <h7 className="fontRal "> post subdiscription</h7>
                                    
                                </Col>
                                
                                
                            </Row>
                            <hr/>
                        </div>
                        <div className="marginLeft10 p-3">
                            <Row >
                                <Col lg={3} md={3} sm={12}>
                                    <Link to="/AllPost" ><img className="topIcon ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt=" "/></Link>
                                    
                                </Col>
                                <Col lg={9} md={9} sm={12}>
                                    
                                <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> Post Title </h4></Link>
                                    <h7 className="fontRal "> post subdiscription</h7>
                                    
                                </Col>
                                
                                
                            </Row>
                            <hr/>
                        </div>
                        <div className="marginLeft10 p-3">
                            <Row >
                                <Col lg={3} md={3} sm={12}>
                                    <Link to="/AllPost" ><img className="topIcon ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt=" "/></Link>
                                    
                                </Col>
                                <Col lg={9} md={9} sm={12}>
                                    
                                <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> Post Title </h4></Link>
                                    <h7 className="fontRal "> post subdiscription</h7>
                                    
                                </Col>
                                
                                
                            </Row>
                            <hr/>
                        </div>
                        <div className="marginLeft10 p-3">
                            <Row >
                                <Col lg={3} md={3} sm={12}>
                                    <Link to="/AllPost" ><img className="topIcon ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt=" "/></Link>
                                    
                                </Col>
                                <Col lg={9} md={9} sm={12}>
                                    
                                <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> Post Title </h4></Link>
                                    <h7 className="fontRal "> post subdiscription</h7>
                                    
                                </Col>
                                
                                
                            </Row>
                            <hr/>
                        </div>
                        <div className="marginLeft10 p-3">
                            <Row >
                                <Col lg={3} md={3} sm={12}>
                                    <Link to="/AllPost" ><img className="topIcon ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt=" "/></Link>
                                    
                                </Col>
                                <Col lg={9} md={9} sm={12}>
                                    
                                <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> Post Title </h4></Link>
                                    <h7 className="fontRal "> post subdiscription</h7>
                                    
                                </Col>
                                
                                
                            </Row>
                            <hr/>
                        </div>
                        <div className="marginLeft10 p-3">
                            <Row >
                                <Col lg={3} md={3} sm={12}>
                                    <Link to="/AllPost" ><img className="topIcon ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt=" "/></Link>
                                    
                                </Col>
                                <Col lg={9} md={9} sm={12}>
                                    
                                <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> Post Title </h4></Link>
                                    <h7 className="fontRal "> post subdiscription</h7>
                                    
                                </Col>
                                
                                
                            </Row>
                            <hr/>
                        </div>
                        <div className="marginLeft10 p-3">
                            <Row >
                                <Col lg={3} md={3} sm={12}>
                                    <Link to="/AllPost" ><img className="topIcon ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt=" "/></Link>
                                    
                                </Col>
                                <Col lg={9} md={9} sm={12}>
                                    
                                <Link to="/AllPost" ><h4 className="fontRal topSubTitle"> Post Title </h4></Link>
                                    <h7 className="fontRal "> post subdiscription</h7>
                                    
                                </Col>
                                
                                
                            </Row>
                            <hr/>
                        </div>
                    
                            
                        </Row>
                    </Container>    
                </div>
                
            </Fragment>
        )
    }
}
