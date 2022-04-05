import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from "react";
import UserLogin from "../../models/UserLogin";

import { login } from "../../services/Service";

import './Login.css';
import { addId, addToken } from "../../store/tokens/actions";
import { useDispatch } from "react-redux";

function Login() {
    let history = useHistory()

    const dispatch = useDispatch()

    const [token, setToken] = useState('')

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    // Crie mais um State para pegar os dados retornados a API
    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        token: '',
        foto: ""
    })

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (respUserLogin.token !== "") {

            // Verifica os dados pelo console (Opcional)
            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
            history.push('/home')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {

            /* Se atente para a Rota de Logar, e também substitua o método
            setToken por setRespUserLogin */

            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            alert("Usuário logado com sucesso")

        } catch (error) {
            alert("Dados do usuário inconsistentes")
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='boxform'>
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom className="h3" component='h3' align='center' style={{ fontWeight: 'bold' }}>
                            Entrar
                        </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='email' variant="outlined" name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant="outlined" name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' >
                            <Button type='submit' variant="contained">
                                Logar
                            </Button>
                        </Box>

                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar' className='text-decorator-none'>
                            <Typography variant="subtitle1" id="cadastre-se" gutterBottom align='center' style={{ fontWeight: 'bold' }}> Cadastre-se </Typography>
                        </Link>
                    </Box>

                </Box>
            </Grid>

            <Grid xs={6} className='imagem'>
            </Grid>
        </Grid>
    );
}

export default Login;