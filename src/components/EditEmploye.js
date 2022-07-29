import React, { Component } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EditEmploye extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeEmployeNom = this.onChangeEmployeNom.bind(this);
        this.onChangeEmployePrenom = this.onChangeEmployePrenom.bind(this);
        this.onChangeEmployeEmail = this.onChangeEmployeEmail.bind(this);
        this.onChangeEmployeAdresse = this.onChangeEmployeAdresse.bind(this);
        this.onChangeEmployeTelephone = this.onChangeEmployeTelephone.bind(this);
        this.onChangeEmployeGrade = this.onChangeEmployeGrade.bind(this);
        this.onChangeEmployeSpecialite = this.onChangeEmployeSpecialite.bind(this);
        this.onChangeEmployeSalaire = this.onChangeEmployeSalaire.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            adresse: '',
            telephone: '',
            grade: '',
            specialite: '',
            salaire: ''
        }
    }

    componentDidMount(){
        var checkUserlooged =   async () => {
            let token = localStorage.getItem("x-auth-token");
            if(token === null){
              localStorage.setItem("x-auth-token", "");
              token = "";
              alert("User not loged !")
              return;
            }
            let tokenVerify =  await axios.post('http://localhost:8080/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
            if (tokenVerify.data) {
            axios.get(`http://localhost:8080/api/employe/${this.props.match.params.id}`,
                {
                    headers: {
                        "x-auth-token": token
                    }
                })
                .then(res => {
                    this.setState({
                        nom: res.data.nom,
                        prenom: res.data.prenom,
                        email: res.data.email,
                        adresse: res.data.adresse,
                        telephone: res.data.telephone,
                        grade: res.data.grade,
                        specialite: res.data.specialite,
                        salaire: res.data.salaire
                    });
                })
                .catch((error) => {
                console.log(error);
                })
            }
        }
        checkUserlooged()
    }

    onChangeEmployeNom = (e) => {
        this.setState({ nom: e.target.value })
    }

    onChangeEmployePrenom = (e) => {
        this.setState({ prenom: e.target.value })
    }

    onChangeEmployeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    
    onChangeEmployeAdresse = (e) => {
        this.setState({ adresse: e.target.value })
    }

    onChangeEmployeTelephone = (e) => {
        this.setState({ telephone: e.target.value })
    }

    onChangeEmployeGrade = (e) => {
        this.setState({ grade: e.target.value })
    }

    onChangeEmployeSalaire = (e) => {
        this.setState({ salaire: e.target.value })
    }

    onChangeEmployeSpecialite  = (e) => {
        this.setState({ specialite: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()
    
        const EmployeObject = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            adresse: this.state.adresse,
            telephone: this.state.telephone,
            grade: this.state.grade,
            specialite: this.state.specialite,
            salaire: parseFloat(this.state.salaire)
           
        };
        var checkUserlooged =   async () => {
            let token = localStorage.getItem("x-auth-token");
            if(token === null){
              localStorage.setItem("x-auth-token", "");
              token = "";
              alert("User not loged !")
              return;
            }
            let tokenVerify =  await axios.post('http://localhost:8080/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
            if (tokenVerify.data) {
        axios.put(`http://localhost:8080/api/employe/${ this.props.match.params.id}`, EmployeObject,
            {
                headers: {
                    "x-auth-token": token
                }
            }
            )
            .then(res => console.log(res.data));
            }
        }
        checkUserlooged()
        this.setState(
            {
                nom: '',
                prenom: '',
                email: '',
                adresse: '',
                telephone: '',
                grade: '',
                specialite: '',
                salaire: ''
            }
        )
      }
    
      render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Nom</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeNom} value={this.state.nom} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Prenom</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployePrenom} value={this.state.prenom} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Email</Form.Label>
                    <Form.Control type='email' id="TextInput" placeholder="" onChange={this.onChangeEmployeEmail} value={this.state.email} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Adresse</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeAdresse} value={this.state.adresse} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Téléphone</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeTelephone} value={this.state.telephone} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="Select">Grade</Form.Label>
                    <Form.Select id="Select" onChange={this.onChangeEmployeGrade} value={this.state.grade} required>
                        <option></option>
                        <option>ouvrier</option>
                        <option>ingénieur</option>
                        <option>administrateur</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Spécialité</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeSpecialite} value={this.state.specialite} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Salaire</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeSalaire} value={this.state.salaire} required />
                </Form.Group>

                <Button variant="primary" size="lg" block="block" type="submit" className="mt-4">
                    Create Employe
                </Button>
            </Form>
        </div>);
      }
}

export default EditEmploye