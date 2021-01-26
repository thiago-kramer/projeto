import React, {Component} from "react";
import listOfUsers from "../users";

function onChange(ev){
    const {name, value} = ev.target;
    setValues({...values, [name]: value})
}

class Body extends Component{

    state = {
        users: [],
    }

    async componentDidMount(){
        const response = await listOfUsers.get("");
        this.setState({ users: response.data});
    }

    render(){

        const {users} = this.state;
        console.log(users);

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

            <form>
                <div className="mb-3">
                    <label htmlFor="userNameInput" className="form-label">Nome completo do usuario</label>
                    <input type="text" className="form-control" id="userNameInput" placeholder="Entre 2 a 200 caracteres..."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userLoginInput" className="form-label">Login do usuario</label>
                    <input type="text" className="form-control" id="userLoginInput" placeholder="Entre 2 a 100 caracteres..."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userPasswordInput" className="form-label">Senha do usuario</label>
                    <input type="password" className="form-control" id="userPasswordInput" placeholder="Entre 2 a 100 caracteres..."/>
                </div>
                <div className="mb-3">
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    }
}

export default Body;