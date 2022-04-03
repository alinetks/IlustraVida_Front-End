import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import './ListaTema.css';

function ListaTema() {

  let history = useHistory()
  const [token, setToken] = useLocalStorage('token')
  const [temas, setTemas] = useState<Tema[]>([])

  async function pegaTemas() {
    await busca(`/temas`, setTemas, {
      headers: { 'Authorization': token }
    })
  }

  useEffect(() => {
    pegaTemas()
  }, [temas.length]) //length = comprimento

  useEffect(() => {
    if (token === ""){
      alert("Você precisa estar logado.")
      history.push("/login")
    }
  }, [token])

  return (
    <>
    {
      temas.map(tema =>(
        
      <Box m={2} className='back-tema' display="flex" justifyContent="center">
        <Card variant="outlined" className='ajust-tema'>
          <CardContent>
            <Typography gutterBottom component="h2">
              Tema
            </Typography>
            <Typography variant="h5" className='tema-style'>
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
  </>
);
}


export default ListaTema;