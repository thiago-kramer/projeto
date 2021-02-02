import React, {Component} from "react";
import axios from "axios";
import listOfUsers from "../users";

class Body extends Component{

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            name: '',
            login: '',
            password: '',
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value} );
    }

    submitHandler = e => {
        console.log(this.state);
        axios.post("http://localhost:3000/users", this.state)
            .then(responnse => {
                console.log(responnse);
            })
            .catch(error => {
                console.log(error)
            })
    }

    async componentDidMount(){
        const response = await listOfUsers.get("");
        this.setState({ users: response.data});
    }

    render(){

        const {users, name, login, password} = this.state;

        return <div className="container">

            <div className="container header">
                <div className="row">
                    <div className="col-sm">
                        Lista de Usuarios
                    </div>
                </div>

                {users.map(user => (
                    <div className="row" key={user._id}>
                        <div className="col-sm">
                            {user.name}
                        </div>
                        <div className="col-sm">
                            {user.login}
                        </div>
                        <div className="col-sm">
                            {user.password}
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor="userNameInput" className="form-label">Nome completo do usuario</label>
                    <input type="text"
                           className="form-control"
                           name="name"
                           placeholder="Entre 2 a 200 caracteres..."
                           value={name}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="userLoginInput" className="form-label">Login do usuario</label>
                    <input type="text"
                           className="form-control"
                           name="login"
                           placeholder="Entre 2 a 100 caracteres..."
                           value={login}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="userPasswordInput" className="form-label">Senha do usuario</label>
                    <input type="password"
                           className="form-control"
                           name="password"
                           placeholder="Entre 2 a 100 caracteres..."
                           value={password}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    }

}

export default Body;