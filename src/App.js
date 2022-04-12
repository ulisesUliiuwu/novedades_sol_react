import React from "react";
import "./App.css";
import EliminarCategoria from "./components/EliminarCategoria";
import NuevaCategoria from "./components/NuevaCategoria";
import EditarCategoria from "./components/EditarCategoria";
import EliminarProducto from "./components/EliminarProducto";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";



import Users from "./pages/Users";
import NuevoUser from "./components/NuevoUser";
import LoginUser from "./pages/Login";
import RemoveToken from "./pages/CloseSesion";
import EditarUsers from "./components/EditarUsuario";
import EliminarUsuario from "./components/EliminarUsuario";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/products" component={Products} />
          <Route path="/users" component={Users} />

         

          <Route path="/eliminar-categoria" component={EliminarCategoria} />
          <Route path="/nueva-categoria" component={NuevaCategoria} />
          <Route path="/editar-categoria" component={EditarCategoria} />

          <Route path="/eliminar-producto" component={EliminarProducto} />
          <Route path="/nuevo-producto" component={NuevoProducto} />
          <Route path="/editar-producto" component={EditarProducto} />


          <Route path="/nuevo-usuario" component={NuevoUser} />
          <Route path="/login" component={LoginUser} />
          <Route path="/logout" component={RemoveToken} />
          <Route path="/editar-usuario" component={EditarUsers} />
          <Route path="/eliminar-usuario" component={EliminarUsuario} />


          


          
        </Switch>
      </Router>
    </>
  );
}

export default App;
