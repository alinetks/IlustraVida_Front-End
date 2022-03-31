import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'
import Home from './paginas/home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Grid} from '@material-ui/core'


import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastrarPostagem from './componentes/postagens/cadastrarPostagem/CadastrarPostagem';
import CadastrarTema from './componentes/temas/cadastrarTema/CadastrarTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';

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

          <Route path='/temas'>
            <ListaTema />
          </Route>

          <Route path='/postagens'>
            <ListaPostagem />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastrarPostagem />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastrarPostagem />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastrarTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastrarTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

        </div>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
