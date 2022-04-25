import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import './PerfilPostagem.css'

function PerfilPostagem() {
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
    {postagens.map(postagem => (
        <Grid container xs={12}>
          <Grid item xs={10} className='float-card'>
          <Box m={4} className='back-post'>
          <Card variant="outlined" className='style-post'>
            <CardContent>

              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>

              <Box>
              <img src={postagem.foto} />
              </Box>

              <Box className='aling-title'>
              <Typography variant="body2" component="p" className='post-title'>
                {postagem.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {postagem.tema?.descricao}
              </Typography>
              </Box>
              
              
              <Box className='aling-title'>
              <Typography variant="body2" component="p" className='post-body'>
                {postagem.texto}
              </Typography>
              </Box>

              <Box className='aling-title'>
                {/* Add esse campo para mostrar o nome do User que criou a Postagem  */}
              <Typography variant="body2" component="p">
                - by. {postagem.usuario?.nome}
              </Typography>
              </Box>

            </CardContent>

            <CardActions>
              <Box display="flex" justifyContent="center" mb={2}>

                <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className='botton btn-light' size='small' color="primary" >
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary" className='botton btn-dark'>
                      Deletar
                    </Button>
                  </Box>
                </Link>

              </Box>
            </CardActions>

          </Card>
        </Box>
          </Grid>

        </Grid>
    ))
  }
    </>
  )
}

export default PerfilPostagem