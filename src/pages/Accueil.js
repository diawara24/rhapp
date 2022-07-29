import React, { Component } from "react";

class Accueil extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: ''
        }
    }

    componentDidMount(){
        this.setState({user: JSON.parse(localStorage.getItem("user"))});
    }

    render(){
        return(
            <div>
                {this.state.user?
                    <h1>Hello {this.state.user.displayName} Welcome to my RH app</h1>
                :
                    <h1>Welcome to my RH app</h1>
                }
                
            </div>
        )
    }
}

export default Accueil