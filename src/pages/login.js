import { Component } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class Login extends Component {


    constructor(props){
        super(props);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    onChangeUserEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangeUserPassword = (e) => {
        this.setState({password: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`http://localhost:8080/users/login`, user)
        .then( res => {
            console.log(res);
            localStorage.setItem("x-auth-token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            console.log("User is loged");
            window.location.reload()
        })
        .catch( err => console.log(err))
    }


    render(){
        return(
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    
                    <Form.Group >
                        <Form.Label htmlFor="TextInput">Email</Form.Label>
                        <Form.Control type='email' id="TextInput" placeholder="" onChange={this.onChangeUserEmail}  required />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label htmlFor="TextInput">Password</Form.Label>
                        <Form.Control id="TextInput" type="password" placeholder="" onChange={this.onChangeUserPassword} required />
                    </Form.Group>
                    
                    <Button variant="primary" size="lg" block="block" type="submit"  className="mt-4">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }

}
export default Login