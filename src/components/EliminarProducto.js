import React from "react";
import { Link } from "react-router-dom";

export default class EliminarProducto extends React.Component {
  state = {
    producto: [],
  };

  componentDidMount() {
    fetch(
      "http://127.0.0.1:8000/api/productosdelete/" +
        this.props.location.state.id,
      { method: "delete" }
    );
  }

  render() {
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
            <div className="sidebar-brand-text mx-3"> Novedades sol</div>
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
            <div className="container-fluid" style={{ maxWidth: "400px" }}>
              <br />
              <div
                className="alert alert-success"
                role="alert"
                style={{ maxWidth: "400px" }}
              >
                <h4 className="alert-heading">Producto eliminado</h4>
                <p>La actualización se realizo exitosamente</p>
              </div>

              <Link to="/products">
                <button type="button" className="btn btn-secondary btn-sm">
                  Regresar
                </button>
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
