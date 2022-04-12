import React from 'react';



function Home() {

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

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" href="/products">
            
            <span>Productos</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/categories">
            
            <span>Categorias</span></a>
        </li>

    

        <li className="nav-item">
          <a className="nav-link" href="/users">
            
            <span>Usuarios</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            <i className="fas fa-fw fa-users"></i>
            <span>Login</span>
          </a>
        </li>
            

      </ul>

      ----------------------------------------------------------------
      
             

        <script src="../vendor/jquery/jquery.min.js"></script>
        <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="../js/sb-admin-2.min.js"></script>

      </div>
  )
  
    
}

export default Home;

