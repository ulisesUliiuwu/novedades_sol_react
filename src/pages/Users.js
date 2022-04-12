import React from "react";
import { Link } from "react-router-dom";

export default class Users extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/clients")
      .then((res) => res.json())
      .then((userJson) => this.setState({ users: userJson }));
  }

  render() {
    const { users } = this.state;
    //console.log(users);
    if (localStorage.getItem("token") === null) {
      window.location.href = "/login";
    }
    return (
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div className="sidebar-brand-text mx-3">novedades Sol</div>
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
             
              <span>Categorias</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/products">
             
              <span>Products</span>
            </a>
          </li>

         

          <li className="nav-item">
            <a className="nav-link" href="/users">
              
              <span>Usuarios</span>
            </a>
          </li>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <br></br>
              <h3 className="text-center">Lista de Usuarios </h3>
              <p style={{ textAlign: "right" }}>
                
              </p>
              <hr></hr>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Correo Electronico</th>
                    <th>Telefono</th>
                    <th>Status</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        {user.name} {user.app} {user.apm}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.status}</td>
                      <td>
                        <Link
                          to={{
                            pathname: "/editar-usuario",
                            state: { id: user.id },
                          }}
                        >
                          <button
                            type="button"
                            className="btn btn-outline-warning btn-sm"
                          >editar
                         
                          </button>
                        </Link>
                        {"  "}
                        <Link
                          to={{
                            pathname: "/eliminar-usuario",
                            state: { id: user.id },
                          }}
                        >
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                          >agregar
                            <i className="fas fa-fw fa-trash" />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link to="/nuevo-usuario">
                  <button type="button" className="btn btn-outline-success btn-sm">AGREGAR <i className=""/></button>
                </Link>
              
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
