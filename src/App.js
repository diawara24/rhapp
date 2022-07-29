import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Accueil  from './pages/Accueil'; 
import AddEmploye from './components/AddEmploye';
import EditEmploye from './components/EditEmploye';
import Employes from './pages/Employes';
import Login  from './pages/login';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class App extends Component{

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this)

    this.state = {
      isLoggedIn: false
    }
  }

  

  componentDidMount(){
    if (localStorage.getItem("x-auth-token")) {
      this.setState({isLoggedIn: true});
    }
  }

  logout = () => {
    localStorage.removeItem("x-auth-token");
    localStorage.removeItem("user");
    console.log('ok');
    this.setState({isLoggedIn: false})
  }

  render(){
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                  <Link to={'/'} className="nav-link">
                    Employee API
                  </Link>
                </Navbar.Brand>
                
                <Nav className="justify-content-end">
                  {this.state.isLoggedIn && <>
                    <Nav>
                      <Link to={'/add-employe'} className="nav-link">
                        Add Employe
                      </Link>
                    </Nav>
                    <Nav>
                      <Link to={'/employes'} className="nav-link">
                        List Employe
                      </Link>
                    </Nav>
                    </>
                  }
                {!this.state.isLoggedIn ?
                  <Nav>
                    <Link to={'/login'} className="nav-link">
                      Login
                    </Link>
                  </Nav>
                :
                  <Nav>
                    <Link to={'/'} className="nav-link" onClick={this.logout}>
                      Logout
                    </Link>
                  </Nav>
                }
                </Nav>
              </Container>
            </Navbar>
          </header>
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                  <Route
                      exact
                      path="/login"
                      component={(props) => <Login {...props} />}
                    />
                    <Route
                      exact
                      path="/"
                      component={(props) => <Accueil {...props} />}
                    />
                    <Route
                      exact
                      path="/employes"
                      component={(props) => <Employes {...props} />}
                    />
                    <Route
                      exact
                      path="/add-employe"
                      component={(props) => <AddEmploye {...props} />}
                    />
                    <Route
                      exact
                      path="/edit-employe/:id"
                      component={(props) => <EditEmploye {...props} />}
                    />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
