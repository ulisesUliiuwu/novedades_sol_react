import React from "react";
//import { Link } from "react-router-dom";

export default class RemoveToken extends React.Component{
    state={
        token:'',
        user:[]
    }
    
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/users')
          .then((res) => res.json())
          .then((userJson) => this.setState({user:userJson}))
      }

      dataField = (e) => { this.setState({ [e.target.name]: e.target.value }) }

      subForm = (e) => {
          e.preventDefault();
          let data = {
              token: this.state.token,
          };
          fetch("https://ferreteria-dsm53.herokuapp.com/api/logout",
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
              .then(this.setState({ alta: "Cerrando Sesion" }))
      }
  
      render(){
        localStorage.removeItem('token');
        localStorage.clear();
        
          const {alta} = this.state
          //console.log(user)
          return(
              <div id="wrapper">
              <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  
                  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                      <div className="sidebar-brand-icon rotate-n-15">
                          <i className="fas fa-hammer"></i>
                      </div>
                      <div className="sidebar-brand-text mx-3">Ferretería</div>
                  </a>
  
                  <hr className="sidebar-divider my-0" />
  
  
                  <li className="nav-item active">
                      <a className="nav-link" href="/">
                          <i className="fas fa-fw fa-home"></i>
                          <span>Página principal</span></a>
                  </li>
  
                  <hr className="sidebar-divider" />
  
                  <div className="sidebar-heading">
                      Menú
                  </div>
  
                  <li className="nav-item">
                      <a className="nav-link" href="/categories">
                          <i className="fas fa-fw fa-list"></i>
                          <span>Categorias</span></a>
                  </li>
  
                  <li className="nav-item">
                      <a className="nav-link" href="/products">
                          <i className="fas fa-fw fa-screwdriver"></i>
                          <span>Products</span></a>
                  </li>
  
                  <li className="nav-item">
                      <a className="nav-link" href="/sales">
                          <i className="fas fa-fw fa-dollar-sign"></i>
                          <span>Ventas</span></a>
                  </li>
  
                  <li className="nav-item">
                      <a className="nav-link" href="/users">
                          <i className="fas fa-fw fa-users"></i>
                          <span>Usuarios</span></a>
                  </li>
  
              </ul>
  
  
              <div id="content-wrapper" className="d-flex flex-column">
  
                  <div id="content">
  
  
                      <div className="container" style={{ maxWidth: "400px" }}>
                          <br />
                          <h1>Cierre de Sesion</h1>
                          <br />
                          {alta ? <div className="alert alert-success" role="alert">{alta}</div> : <div></div>}
                          <form onSubmit={this.subForm}>
                              
                          </form>
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
          )
      }
}