import React from "react";
import { Link } from "react-router-dom";

export default class EditarProducto extends React.Component {
  state = {
    producto: [],
    categoria: [],
    editar: "",
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/categorias")
      .then((response) => response.json())
      .then((categoriaJson) => this.setState({ categoria: categoriaJson }));

    fetch(
      "http://127.0.0.1:8000/api/productosshow/" + this.props.location.state.id
    )
      .then((response) => response.json())
      .then((productoJson) => this.setState({ producto: productoJson }));
  }

  dataField = (e) => {
    this.setState({
      producto: {
        ...this.state.producto,
        [e.target.name]: e.target.value,
      },
    });
  };

  subForm = (e) => {
    e.preventDefault();
    let data = {
      nombre: this.state.producto.nombre,
      imagen: this.state.producto.imagen,
      descripcion: this.state.producto.descripcion,
      precio: this.state.producto.precio,
      categoria_id: this.state.producto.categoria_id,
    };
    fetch("http://127.0.0.1:8000/api/productosupdate/" + this.state.producto.id, {
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
    const { producto, categoria, editar } = this.state;
//    console.log(this.editar);

    //console.log(product);
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
            <div className="sidebar-brand-text mx-3">novedades sol</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-home"></i>
              <span>Página principal</span>
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
            <a className="nav-link" href="/sales">
              <i className="fas fa-fw fa-dollar-sign"></i>
              <span>Ventas</span>
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
              <h1>Modificar producto</h1>
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
                    name="nombre"
                    defaultValue={producto.nombre}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>imagen: </label>
                  <input
                    type="text"
                    
                    name="imagen"
                    defaultValue={producto.imagen}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>descripcion: </label>
                  <input
                    type="text"
                    name="descripcion"
                    defaultValue={producto.descripcion}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>precio : </label>
                  <input
                    type="number"
                    name="precio"
                    defaultValue={producto.precio}
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="categories">Categoria: </label>
                  <select
                    name="categoria_id"
                    id="categoria"
                    className="form-control"
                    onChange={this.dataField}
                  >
                    {categoria.map((categoria, i) => (
                      <option value={categoria.id} key={i}>
                        {categoria.nombre === producto.categoria
                          ? "---" + categoria.nombre + "---"
                          : categoria.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  Actualizar
                </button>{" "}
                <Link to="/products">
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
