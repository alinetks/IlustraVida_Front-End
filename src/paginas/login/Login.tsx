import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from "react";
import UserLogin from "../../models/UserLogin";

import { login } from "../../services/Service";

import './Login.css';
import { addId, addToken } from "../../store/tokens/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

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
        sobre: "",
        token: ""
    })

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: "",
        sobre: "",
        token: '',
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
            toast.success('Usuario logado com sucesso.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });

        } catch (error) {
            toast.error('Erro ao logar, verifique as informações.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            }
    }

    return (
        <Grid container justifyContent="center" alignItems="center" className='form-back'>
            <Grid xs={8} md={5}>
                <Box className="container-form-login" alignItems='center' justifyContent='center'>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom className="h3" component='h3' align='center' id='txt-entrar' style={{ fontWeight: 'bold' }}>
                            Entrar
                        </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='email' variant="outlined" name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant="outlined" name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' >
                            <Button type='submit' variant="contained" className="btnLogin">
                                Logar
                            </Button>
                        </Box>

                    </form>
                    <Box justifyContent='center' marginTop={5}>
                        <Box>
                            <Typography variant="subtitle1" gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='text-decorator-none'>
                            <Typography variant="subtitle1" id="cadastre-se" gutterBottom align='center' style={{ fontWeight: 'bold' }}> Cadastre-se </Typography>
                        </Link>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;