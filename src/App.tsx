import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'
import Home from './paginas/home/Home';

import {Grid} from '@material-ui/core'


import './App.css';

//let nome = 'Alinetks'


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  );
}

export default App;
