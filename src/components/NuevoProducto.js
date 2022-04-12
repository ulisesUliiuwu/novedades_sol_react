import React from "react";
import { Link } from "react-router-dom";

export default class NuevaCategoria extends React.Component {
  state = {
    nombre: "",
    imagen: "",
    descripcion: "",
    precio: "",
    categoria_id: "",
    categorias: [],
    alta: "",
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/categorias")
      .then((response) => response.json())
      .then((categoriasJson) => this.setState({ categorias: categoriasJson }));
  }

  dataField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  subForm = (e) => {
    e.preventDefault();
    let data = {
      nombre: this.state.nombre,
      imagen: this.state.imagen,
      descripcion: this.state.descripcion,
      precio: this.state.precio,
      categoria_id: this.state.categoria_id,
      
    };
    fetch("http://127.0.0.1:8000/api/productosstore", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      
        this.setState({
          alta: "Registro exitoso, regrese al panel principal del producto",
        })
      
  };

  render() {
    const { categorias, alta } = this.state;
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
          <h1 className="text-center">Agregar nuevo producto</h1>
            <div className="container" style={{ maxWidth: "400px" }}>
              <br />
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
                <div className="form-group">
                  <label>Imagen: </label>
                  <input
                    type="text"
                    
                    name="imagen"
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Descripcion: </label>
                  <input
                    type="text"
                    name="descripcion"
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label>Precio: </label>
                  <input
                    type="number"
                    name="precio"
                    className="form-control form-control-sm"
                    onChange={this.dataField}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="categories">Categoria: </label>
                  <select
                    name="categoria_id"
                    id="categorias"
                    className="form-control"
                    onChange={this.dataField}

                  >
                    <option>------</option>
                    {categorias.map((categoria, i) => (
                      <option value={categoria.id} key={i}>
                        {categoria.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  Agregar
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
