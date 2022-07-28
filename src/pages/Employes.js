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
        axios.get('https://62e1af1be8ad6b66d84e1de0.mockapi.io/api/Employe')
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