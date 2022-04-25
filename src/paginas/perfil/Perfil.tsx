import React, { useEffect, useState } from 'react'
import { Box, Button, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { UserState } from '../../store/tokens/tokensReducer'

import User from '../../models/User'
import { buscaId } from '../../services/Service'

import './Perfil.css'
import { toast } from 'react-toastify'
import PerfilModal from './modal/PerfilModal'
import PerfilPostagem from './perfilpost/PerfilPostagem'

function Perfil() {

    let history = useHistory()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState['id']>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        sobre: '',
    })

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado.', {
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

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Grid container>
            <Grid container className='card-principal'>
                <Grid item xs={12} md={5}>
                    <Box className='card-container-imagem texto' display='flex' flexWrap='wrap'>
                        <img className='card-imagem'
                            src={user.foto}
                            alt={user.nome} />
                        <h1>{user.nome}</h1>
                        <Box boxShadow={3} className="btn-light">
                            <PerfilModal />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Box className='card-container-info texto'>
                        <Box>
                            <h1>Sobre:</h1>
                        </Box>

                        <p className='card-container-texto'>
                            {user.sobre}
                        </p>

                    </Box>
                </Grid>
            </Grid>
            <Grid container className='card-secundario'>
                <PerfilPostagem />
            </Grid>
        </ Grid>
    )
}

export default Perfil