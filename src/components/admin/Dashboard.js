import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import URL from '../../const';

export default class Dashboard extends Component{

    state = {

        id: 0,
        username: '',
        user_token: ''

    }

    getUserInfo = async(token) => {

        console.log(token);
        var data = {

            token

        }
        await axios.post(URL + '/users/getUser.php', data)
        .then(res => {

            this.setState({

                id: res.data['id'],
                username: res.data['username'],
                user_token: res.data['token']

            });
            console.log(this.state);

        })
        .catch(error => {

            console.log(error);

        });

    }

    componentDidMount() {

        const token = sessionStorage.getItem('clientAccessToken');
        if(sessionStorage.getItem('clientAccessToken')){

            console.log('Sesión funcionando.');

        } else {

            window.location = '/dramachado';

        }

        this.getUserInfo(token);

    }

    render(){

        return(

            <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-6 col-md-6'>
                        <h1>Dashboard</h1>
                    </div>
                    <div className='col-4 col-md-auto d-block ml-auto mr-4'>
                        <em>Bienvenido, { this.state.username }</em>
                    </div>
                </div>
                <div className='row mt-4 vh-75 d-flex borderx-orange mx-0'>
                    <div className='col-12 col-md-10 mx-auto mb-4'>
                        <h4 className='text-center'><em>Aquí podrás editar el contenido que se presenta dentro del sistema de
                         la Dra. Machado para así mantener al mismo siempre lo más actualizado posible.</em></h4>
                    </div>
                    <div className='col-12 col-md-10 mx-auto mt-4 text-center'>
                        <Link className='btn btn-green mb-2 mb-md-0 mx-md-2' to='/dramachado/nueva-publicacion'>Nueva Publicación</Link>
                        <Link className='btn btn-green' to='/dramachado/editar-contactos'>Editar Contactos</Link>
                    </div>
                </div>
            </div>

        );

    }

}