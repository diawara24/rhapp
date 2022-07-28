import React, { Component } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AddEmploye extends Component {
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
        axios.post('https://62e1af1be8ad6b66d84e1de0.mockapi.io/api/Employe', EmployeObject)
          .then(res => console.log(res.data));
    
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
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeNom} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Prenom</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployePrenom} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Email</Form.Label>
                    <Form.Control type='email' id="TextInput" placeholder="" onChange={this.onChangeEmployeEmail} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Adresse</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeAdresse} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Téléphone</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeTelephone} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="Select">Grade</Form.Label>
                    <Form.Select id="Select" onChange={this.onChangeEmployeGrade} required>
                        <option></option>
                        <option>ouvrier</option>
                        <option>ingénieur</option>
                        <option>administrateur</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Spécialité</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeSpecialite} required />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="TextInput">Salaire</Form.Label>
                    <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeSalaire} required />
                </Form.Group>

                <Button variant="primary" size="lg" block="block" type="submit" className="mt-4">
                    Create Employe
                </Button>
            </Form>
        </div>);
      }
}

export default AddEmploye