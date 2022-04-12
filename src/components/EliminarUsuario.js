import React from "react";
import { Link } from "react-router-dom";

export default class EliminarUsuario extends React.Component {
    state = {
        user: [],
    };
    
    componentDidMount() {
        fetch(
        "http://127.0.0.1:8000/api/clientsdelete/" + this.props.location.state.id,
        { method: "delete" }
        );
    }

    render() {
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
                <div className="sidebar-brand-text mx-3">novedades sol</div>
              </a>
    
              <hr className="sidebar-divider my-0" />
    
              <li className="nav-item active">
                <a className="nav-link" href="/">
                </a>
              </li>
    
              <hr className="sidebar-divider" />
    
              <div className="sidebar-heading">Menú</div>
    
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
                <div className="container-fluid" style={{ maxWidth: "400px" }}>
                  <br />
                  <div
                    className="alert alert-success"
                    role="alert"
                    style={{ maxWidth: "400px" }}
                  >
                    <h4 className="alert-heading">Usuario eliminado</h4>
                    <p>La actualización se realizo exitosamente</p>
                  </div>
    
                  <Link to="/users">
                    <button type="button" className="btn btn-secondary btn-sm">
                      Regresar
                    </button>
                  </Link>
                  <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                      <div className="copyright text-center my-auto">
                        <span>Copyright &copy; UTVT 2022</span>
                      </div>
                    </div>
                  </footer>
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