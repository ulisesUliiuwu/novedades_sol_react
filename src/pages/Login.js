import React from "react";
import { Link } from "react-router-dom";



export default class LoginUser extends React.Component{
    state={
        email:'',
        password:'',
        user:[]
    }

    componentDidMount() {
    fetch("http://127.0.0.1:8000/api/clients")
    
          .then((res) => res.json())
          .then((usersJson) => this.setState({ users: usersJson }));
      }

    dataField = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    subForm = (e) => {
        e.preventDefault();
        let data = {
            email: this.state.email,
            password: this.state.password,
            };
        fetch("http://127.0.0.1:8000/api/login ",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(this.setState({ alta: "Inicio de sesión exitoso" }))
    }

    render(){
        const {alta, token}=this.state
       
        localStorage.setItem('token', token);
        
        setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.clear();
        }, 100000);

        return(
            <div id="wrapper">
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

                <div className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                       
                    </div>
                    <div className="sidebar-brand-text mx-3">novedades sol</div>
                </div>

                <hr className="sidebar-divider my-0" />


                <li className="nav-item active">
                    <a className="nav-link" href="/">
                       
                        <span>Página principal</span></a>
                </li>
            </ul>


            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">


                    <div className="container" style={{ maxWidth: "400px" }}>
                        <br />
                        <h1>Inicio de Sesión</h1>
                        <br />
                        {alta ? <div className="alert alert-success" role="alert">{alta}</div> : <div></div>}
                        <form onSubmit={this.subForm}>
                            <div className="form-group">
                                <label>Correo Electronico:</label>
                                <input type="email" name="email" className="form-control form-control-sm" defaultValue={'raul@gmail.com'} onChange={this.dataField} />
                            </div>
                            <div className="form-group">
                                <label>Contraseña: </label>
                                <input type="password" name="password" className="form-control form-control-sm" defaultValue={'raul'} onChange={this.dataField} />
                            </div>                  

                            <br />
                            <Link to="/" style={
                                {
                                    textDecoration: "none",
                                    display: "inline-block",
                                }
                            }>
                            <button type="submit" className="btn btn-primary">Registrar</button>
                            {" "}
                            </Link>
                            <Link to="/">
                                <button type="button" className="btn btn-danger">Cancelar</button>
                            </Link>
                        </form>
                       
                    </div>
                </div>
                <script src="../vendor/jquery/jquery.min.js"></script>
                <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="../js/sb-admin-2.min.js"></script>
            </div>
        </div>
        )
    }
}

// export const RemoveToken = () => {
//     localStorage.removeItem('token', token);
//     window.location.href = '/login';

//     const {token} = this.state
// }