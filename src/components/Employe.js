import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
class Employe extends Component {

    constructor(props) {
        super(props)
        this.deleteEmploye = this.deleteEmploye.bind(this)
      }

      async deleteEmploye(){
        // eslint-disable-next-line no-restricted-globals
        if(confirm("are you sure wants to delete?")){
            console.log(this.props.obj.id);
            await axios.delete(`http://localhost:8080/api/employe/${this.props.obj.id}`)
          .then(response => {
            console.log('Employe successfully deleted !')
          })
          .catch((error) => {
            console.log(error)
          })
        }
         window.location.reload();
      }

    render(){
        return(
            <tr>
                <td>{this.props.obj.nom}</td>
                <td>{this.props.obj.prenom}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.adresse}</td>
                <td>{this.props.obj.telephone}</td>
                <td>{this.props.obj.grade}</td>
                <td>{this.props.obj.specialite}</td>
                <td>{this.props.obj.salaire}</td>
                <td>
                    <Link path={"edit-employe/:id"}
                        to={'/edit-employe/' + this.props.obj.id}
                    >
                        <button className="btn btn-primary" >Edit</button>
                    </Link>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={this.deleteEmploye}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Employe