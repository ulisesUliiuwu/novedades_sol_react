import React from "react";
import { Link, Redirect } from "react-router-dom";

export default class EditarUsers extends React.Component {
  state = {
    users: [],
    editar: "",
  };

  componentDidMount() {
    fetch(
      "http://127.0.0.1:8000/api/clientsshow/" + this.props.location.state.id
    )
      .then((response) => response.json())
      .then((userJson) => this.setState({ users: userJson }));
  }

  dataField = (e) => {
    this.setState({
      users: {
        ...this.state.users,
        [e.target.name]: e.target.value,
      },
    });
  };

  subForm = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.users.name,
      app: this.state.users.app,
      apm: this.state.users.apm,
      email: this.state.users.email,
      phone: this.state.users.phone,
      password: this.state.users.password,
      fn: this.state.users.fn,
    };
    fetch("http://127.0.0.1:8000/api/clientsupdate/" + this.state.users.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ editar: "Edición exitosa" }));
  };

  render() {
    const { users, editar } = this.state;
    //console.log(users);

    if(editar){
      return <Redirect to="/users" />;
    }
    return (
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              
            </div>
            
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="/">
             
              <span>Página principal</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          

          <li className="nav-item">
            <a className="nav-link" href="/categories">
              <i className="fas fa-fw fa-list"></i>
              <span>Categorias</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/products">
              <i className="fas fa-fw fa-screwdriver"></i>
              <span>Products</span>
            </a>
          </li>

          
          <li className="nav-item">
            <a className="nav-link" href="/users">
              <i className="fas fa-fw fa-users"></i>
              <span>Usuarios</span>
            </a>
          </li>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container" style={{ maxWidth: "400px" }}>
              <br />
              <h1>Nuevo Usuario</h1>
              <br />
              {editar ? (
                <div className="alert alert-success" role="alert">
                  {editar}
                </div>
              ) : (
                <div></div>
              )}
              <form onSubmit={this.subForm}>
                <div className="form-group">
                  <label>Nombre: </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={users.name}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Apellido Paterno: </label>
                  <input
                    type="text"
                    name="app"
                    defaultValue={users.app}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Apellido Materno: </label>
                  <input
                    type="text"
                    name="apm"
                    defaultValue={users.apm}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Correo Electronico:</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={users.email}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña: </label>
                  <input
                    type="password"
                    name="password"
                    defaultValue={users.password}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Telefono: </label>
                  <input
                    type="phone"
                    name="phone"
                    defaultValue={users.phone}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Fecha de Nacimiento: </label>
                  <input
                    type="date"
                    name="fn"
                    defaultValue={users.fn}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>{" "}
                <Link to="/">
                  <button type="button" className="btn btn-danger">
                    Cancelar
                  </button>
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
    );
  }
}

// funcion para mostrar la contraseña
