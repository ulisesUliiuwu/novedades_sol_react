import React from "react";
import { Link } from "react-router-dom";

export default class NuevaCategoria extends React.Component {
  state = {
    nombre: "",
  };

  dataField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
//ulises
  subForm = (e) => {
    e.preventDefault();
    let data = {  
      nombre: this.state.nombre,
    };
    fetch("http://127.0.0.1:8000/api/categoriasstore", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(this.setState({ alta: "Registro exitoso" }));
  };

  render() {
    const { alta } = this.state;
    //console.log(this.state);
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
            
            <div className="sidebar-brand-text mx-3">Novedades sol</div>
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
             
              <span>Productos</span>
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
            <div className="container" style={{ maxWidth: "400px" }}>
              <br />
              <h1>Nueva categoria</h1>
              <br />
              {alta ? (
                <div className="alert alert-success" role="alert">
                  {alta}
                </div>
              ) : (
                <div></div>
              )}
              <form onSubmit={this.subForm}>
                <div className="form-group">
                  <label>Nombre: </label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  AGREGAR
                </button>{" "}
                <Link to="/categories">
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
