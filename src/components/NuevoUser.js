import React from "react";
import { Link, Redirect } from "react-router-dom";

export default class NuevoUser extends React.Component{
    state={
        name:'',
        app:'',
        apm:'',
        email:'',
        phone:'',
        password:'',
        fn:''
    }

    dataField = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    subForm = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            app: this.state.app,
            apm: this.state.apm,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            fn: this.state.fn

        };
        fetch("http://127.0.0.1:8000/api/clientsstore",
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
            .then(this.setState({ alta: "Registro exitoso" }))
    }

    render(){
        const {alta} = this.state

        if(alta){
            return <Redirect to="/users" />
        }
        return(
            <div id="wrapper">
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                    </div>
                    <div className="sidebar-brand-text mx-3">novedades sol</div>
                </a>

                <hr className="sidebar-divider my-0" />
                <hr className="sidebar-divider" />
                <li className="nav-item">
                    <a className="nav-link" href="/categories">
                       
                        <span>Categorias</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/products">
                        
                        <span>Products</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users">
                            
                        <span>Usuarios</span></a>
                </li>

            </ul>


            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">


                    <div className="container" style={{ maxWidth: "400px" }}>
                        <br />
                        <h1>Nuevo Usuario</h1>
                        <br />
                        {alta ? <div className="alert alert-success" role="alert">{alta}</div> : <div></div>}
                        <form onSubmit={this.subForm}>
                            <div className="form-group">
                                <label>Nombre: </label>
                                <input type="text" name="name" className="form-control form-control-sm" onChange={this.dataField} />
                            </div>
                            <div className="form-group">
                                <label>Apellido Paterno: </label>
                                <input type="text" name="app" className="form-control form-control-sm" onChange={this.dataField} />
                            </div>
                            <div className="form-group">
                                <label>Apellido Materno: </label>
                                <input type="text" name="apm" className="form-control form-control-sm" onChange={this.dataField} />
                            </div>
                            <div className="form-group">
                                <label>Correo Electronico:</label>
                                <input type="email" name="email" className="form-control form-control-sm" onChange={this.dataField} />
                            </div>
                            <div className="form-group">
                                <label>Contraseña: </label>
                                <input type="password" name="password" className="form-control form-control-sm" onChange={this.dataField} />
                            </div>
                            <div className="form-group">
                                <label>Telefono: </label>
                                <input type="phone" name="phone" className="form-control form-control-sm" onChange={this.dataField} />
                            </div>
                            <div className="form-group">
                                <label>Fecha de Nacimiento: </label>
                                <input type="date" name="fn" className="form-control form-control-sm" onChange={this.dataField} />
                            </div>
                           

                            <br />
                            <button type="submit" className="btn btn-primary">Registrar</button>
                            {" "}
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