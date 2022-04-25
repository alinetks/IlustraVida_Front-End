import { Button, Container, FormControl, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import User from '../../../models/User';
import { busca, buscaId, put } from '../../../services/Service';
import { UserState } from '../../../store/tokens/tokensReducer';
import './PerfilAtualizar.css'

function PerfilAtualizar() {


    let history = useHistory()
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    const [user, setUser] = useState<User>(
        {
            id: +userId,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            sobre: ''
        })
    //
    useEffect(() => {
        if (token === "" && confirmarSenha === user.senha) {
            toast.error('Usuario precisa estar logado.', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    //
    useEffect(() => {
        if (userId !== '') {
            findByIdUser(userId)
        }
    }, [userId])
    //
    async function findByIdUser(id: string) {
        await buscaId(`usuarios/${user.id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }
    //
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    //
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(userId !== undefined){
        put(`/usuarios/atualizar`, user, setUser, {
            headers: {
                'Authorization': token
            }
        })
        toast.success('Usuario atualizado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });

        }else{
            toast.error('Dados inconsistentes. Verifique as informações.', {
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
            back()
    }

    function back() {
        history.push('/perfil')
    }

    //
    // async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //     e.preventDefault()

    //     if (userId !== '') {
    //         try {
    //             await put(`/usuarios/atualizar`, user, setUser, {
    //                 headers: {
    //                     'Authorization': token
    //                 }
    //             })
    //             toast.success('Perfil atualizado com sucesso.', {
    //                 position: 'top-right',
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: false,
    //                 draggable: false,
    //                 theme: 'colored',
    //                 progress: undefined,
    //             });
    //         } catch (error) {
    //             toast.info('Usuario deslogado.', {
    //                 position: 'top-right',
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: false,
    //                 draggable: false,
    //                 theme: 'colored',
    //                 progress: undefined,
    //             });
    //         }
    //     }

    //     back()
    // }

    // function back() {
    //     history.push('/perfil')
    // }
    //
    return (
        <div>
            <Container maxWidth="sm" className='largura'>
                <form onSubmit={onSubmit} className='atualizar-perfil'>
                    <Typography variant="h3" className='h1-perfil' component="h1" align="center" >Atualizar Perfil</Typography>
                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome Completo" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="E-mail" name="usuario" type='email' variant="outlined" margin="normal" fullWidth />
                    <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto" label="Foto" name="foto" variant="outlined" margin="normal" fullWidth />
                    <TextField value={user.sobre} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="sobre" label="Sobre mim" name="sobre" variant="outlined" margin="normal" fullWidth />
                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />


                    <FormControl>
                        <Button type="submit" variant="contained" color="primary">
                            Finalizar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </div>
    )
}

export default PerfilAtualizar;

