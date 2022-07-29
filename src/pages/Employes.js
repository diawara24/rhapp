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
        var checkUserlooged =   async () => {
            let token = localStorage.getItem("x-auth-token");
            if(token === null){
              localStorage.setItem("x-auth-token", "");
              token = "";
            }
            let tokenVerify =  await axios.post('http://localhost:8080/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
            if (tokenVerify.data) {
                var employes = await axios.get('http://localhost:8080/api/employe/',
                {
                    headers: {
                        "x-auth-token": token
                    }
                })
                .catch((error) => {
                console.log(error);
                })

                this.setState({
                    employes: employes.data
                });
            }
        }
        checkUserlooged();
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