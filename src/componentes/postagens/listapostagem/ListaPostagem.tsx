import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import './ListaPostagem.css';

function ListaPostagem() {
  let history = useHistory()
  const [token, setToken] = useLocalStorage('token')
  const [postagens, setPostagens] = useState<Postagem[]>([])

  async function pegaPostagens() {
    await busca(`/postagens`, setPostagens, {
      headers: { 'Authorization': token }
    })
  }

  useEffect(() => {
    pegaPostagens()
  }, [postagens.length]) //length = comprimento

  useEffect(() => {
    if (token === ""){
      alert("Você precisa estar logado.")
      history.push("/login")
    }
  }, [token])

  return ( 
    <>
    {
      postagens.map(postagem =>(

      <Box className='back-post' display="flex" justifyContent="center">
        <Card variant="outlined" className='style-post'>
          <CardContent>

            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>

            <Typography variant="h5" component="h2" className='post-style'>
            {postagem.titulo}
            </Typography>

            <Typography variant="body2" component="p" className='post-body'>
            {postagem.texto}
            </Typography>

            <Typography variant="body2" component="p">
            {postagem.tema?.descricao}
            </Typography>
 
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" alignItems='center' mb={1.5}>

              <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" id='space' className="botton" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="botton" size='small' color="secondary">
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

export default ListaPostagem;