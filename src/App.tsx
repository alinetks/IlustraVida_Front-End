import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'
import Home from './paginas/home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Grid} from '@material-ui/core'


import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

//let nome = 'Alinetks'


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <div style={{minHeight: '100vh'}}>
          
        <Route exact path='/'>
            <Login />
          </Route>
          
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/cadastrar'>
            <CadastroUsuario />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

        </div>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
