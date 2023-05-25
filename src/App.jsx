import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import portada1 from './uf.png'



function App() {
  return (
    
    <body class="bg-white text-light">

      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul id='header' class="navbar-nav text-center text-light">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact us</a>
              </li>
              <a class="navbar-brand" href="#">
            Phoenix</a>
              <li class="nav-item">
                <a class="nav-link" href="#">Discord</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  TEAM
                </a>
                <ul class="dropdown-menu border border-danger">
                  <li><a class="dropdown-item" href="#">Go to team</a></li>
                  <li><a class="dropdown-item" href="#">Tik Tok</a></li>
                  <li><a class="dropdown-item" href="#">Instagram</a></li>
                  <li><a class="dropdown-item" href="#">Twitter</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
            
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Bienvenido a Phoenix</h1>
              <p class="lead">Aqui podras encontar amigos para poder juagar a Fortnite, LOL o Valorant, es muy fácil de ingresar, si lo desea apriete el siguiente boton y siga las siguientes instrucciones. <br /> <footer>NO PARA MENORES DE 14 AÑOS</footer></p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-danger btn-lg px-4 me-md-2 hjd">Inscribete</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contacto</button>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br />
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
            
            </div>
            <div class="col-lg-6 border-start border-danger">
              <h1 class="display-5 fw-bold lh-1 mb-3">Noticias destacadas</h1>
              <p class="lead">Noticias actuales</p>
              <div className="noticia">
                <h4>Las postulaciones siguen cerradas</h4>
                <h6>Sqwit</h6>
                <p>Sí demomento tenemos todo el esport en mantenimiento por la web y el sistema de postulaciones, no tardaremos mucho en arreglarlo, gracias por esperar. </p>
                <br />
                <footer>Fecha de publicacion: 16:52 25/05/2023</footer>
              </div>

            </div>
          </div>
        </div>
        
      </main>

      <div className="my-footer">
        <div className="body-list bg-transparent">
        <ul class="list-group list-group-flush bg-transparent">
          <li class="list-group-item"><a class="nav-link" href="#" onClick={"oha()"}>Home</a></li>
          <li class="list-group-item"><a class="nav-link" href="#">Inscribete</a></li>
          <li class="list-group-item"><a class="nav-link" href="#">Soporte</a></li>
          <li class="list-group-item"><a class="nav-link" href="#">Copyright</a></li>
          <li class="list-group-item"><a class="nav-link" href="#">Privacidad</a></li>
        </ul>
        </div>
      </div>

      <script>
        function oha() {
          alert("Hola")
        }
      </script>
    </body>
    
    

  );
}

export default App;
