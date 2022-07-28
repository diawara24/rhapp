import { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import Accueil  from './pages/Accueil'; 
import AddEmploye from './components/AddEmploye'
import EditEmploye from './components/EditEmploye'
import Employes from './pages/Employes'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class App extends Component{

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
