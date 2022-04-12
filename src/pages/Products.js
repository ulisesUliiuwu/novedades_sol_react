import React from "react";
import { Link } from 'react-router-dom'
import '../css/sb-admin-2.min.css'
import '../vendor/fontawesome-free/css/all.min.css'

export default class Products extends React.Component {
  state = {
    productos: []
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/productos")
      .then((res) => res.json())
      .then((productosJson) => this.setState({ productos: productosJson }));
  }

  render() {
    const {productos} = this.state;

    if(localStorage.getItem('token') === null){
      window.location.href = '/login';      
    }
    
    return (
      <div id="wrapper">
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
           
            <div className="sidebar-brand-text mx-3">Novedades sol</div>
          </a>

          <hr className="sidebar-divider my-0" />


          <li className="nav-item active">
            <a className="nav-link" href="/">
              
              <span>Página principal</span></a>
          </li>

          <hr className="sidebar-divider" />

          

          <li className="nav-item">
            <a className="nav-link" href="/categories">
            
              <span>Categorias</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/products">
              
              <span>Productos</span></a>
          </li>


          <li className="nav-item">
            <a className="nav-link" href="/users">
              
              <span>Usuarios</span></a>
          </li>

        </ul>


        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">


            <div className="container-fluid">
              <br></br>
              <h3 className="text-center">PRODUCTOS EN VENTA</h3>
              <p style={{ textAlign: 'right' }}>
                
              </p>
              <hr></hr>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((productos, i) =>
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{productos.nombre}</td>
                      <td>{productos.imagencia}</td>
                      <td>{productos.descripcion}</td>
                      <td>{productos.precio}</td>
                      <td>{productos.categoria_id}</td>
                      <td>
                        <Link to={{pathname:'/editar-producto',state:{id:productos.id}}}>
                          <button type="button" className="btn btn-outline-warning btn-sm">EDITAR<i className=""/></button>
                        </Link>
                        {'  '}
                        <Link to={{pathname:'/eliminar-producto',state:{id:productos.id}}}>
                          <button type="button" className="btn btn-outline-danger btn-sm">ELIMINAR<i className=""/></button>
                        </Link>
                        
                      </td>
                    </tr>)}
                </tbody>
              </table>
              <Link to="/nuevo-producto">
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