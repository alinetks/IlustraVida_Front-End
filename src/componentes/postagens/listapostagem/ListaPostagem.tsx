import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {
  let history = useHistory()
  const [postagens, setPostagens] = useState<Postagem[]>([])
  const token = useSelector<UserState, UserState ["tokens"]>(
    (state) => state.tokens
)

useEffect(() => {
  if (token == ""){
    toast.error('Você precisa estar logado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  });
    history.push("/login")
  }
}, [token])

  async function pegaPostagens() {
    await busca(`/postagens`, setPostagens, {
      headers: { 'Authorization': token }
    })
  }

  useEffect(() => {
    pegaPostagens()
  }, [postagens.length]) //length = comprimento


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