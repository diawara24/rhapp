import React, { Component } from "react";
import axios from 'axios';
import Table  from "react-bootstrap/Table";

import Employe from "../components/Employe";

class Employes extends Component {

    constructor(props) {
        super(props)
        this.state = {
          employes: []
        };
      }

    componentDidMount(){
        axios.get('http://localhost:8080/api/employe/')
            .then(res => {
                this.setState({
                    employes: res.data
                });
            })
            .catch((error) => {
            console.log(error);
            })
    }

    render(){
        return(
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>Adresse</th>
                            <th>Téléphone</th>
                            <th>Grade</th>
                            <th>Spécialité</th>
                            <th>Salaire</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employes.map((e, i)=> (
                                <Employe obj={e} key={i} />
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Employes