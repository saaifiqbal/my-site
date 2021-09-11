import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar, NavDropdown,Button} from 'react-bootstrap'
import Ficon from '../../asset/image/travel.png'
import Ficons from '../../asset/image/TopIcon.png'
import { NavLink } from 'react-router-dom';


export default class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"topNav",
            icon:[Ficon],
            navBarBG:"navBG",
            Show:"m-2",
            navBar1:"d-block",
            navBar2:"d-none",
            dropDown:"d-none dropdown-show",
            userName:sessionStorage.getItem("userName")
        }
    }
    logout(){
        sessionStorage.clear();
        window.location.reload();
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'topNavScroll',icon:[Ficons],navBarBG:"navBgScroll"})
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:'topNav',icon:[Ficon],navBarBG:"navBG"})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
        if(sessionStorage.getItem("userName")==null){
            this.setState({navBar1:"d-block",navBar2:"d-none"})
        }else{
            this.setState({navBar1:"d-none linkClass",navBar2:"d-block linkClass",dropDown:"d-block dropdown-show"})
        }
    }
    render() {
        return (
            <Fragment>
                <Container >
                <Navbar className={this.state.navBarBG} fixed="top" collapseOnSelect expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand className={this.state.navBarTitle}>
                        <img  className="topNavIcon" src={this.state.icon} alt=" "/>
                        <spam className="p-2 weight600">Forums</spam></Navbar.Brand>

                        

                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"> 
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarTitle} to="/">Forums</NavLink></Nav.Link>
                        <div className={this.state.Show}>
                    

                          <NavDropdown title="Setting" className={this.state.dropDown} id="collasible-nav-dropdown">
                                        <NavDropdown.Divider />
                                        <p className="navPtag weight600 fontRal">Profile</p>
                                        <NavDropdown.Item><NavLink exact activeStyle={{color:'red'}} className="fontRal MidBack" to="/UserProfilePage">My Profile</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <p className="navPtag weight600 fontRal">Admin</p>
                                        <NavDropdown.Item><NavLink exact activeStyle={{color:'red'}} className="fontRal MidBack" to="/CreateId">Add New</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink exact activeStyle={{color:'red'}} className="fontRal MidBack" to="/AllUserPost">All Post</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                        </div>
                        </Nav>
                        <Nav>
                        <div className={this.state.navBar1}>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarTitle} to="SignIn">Sign in</NavLink></Nav.Link>
                            </div>
                            <div className={this.state.navBar1}>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarTitle} to="Register">Register</NavLink></Nav.Link>
                        </div>
                        <Nav.Link eventKey="disabled" className={this.state.navBar2} disabled>
                            Welcome {this.state.userName}!
                        </Nav.Link>
                        <Button className={this.state.navBar2} variant="outline-warning" onClick={this.logout}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Container>
            </Fragment>
        )
    }
}
