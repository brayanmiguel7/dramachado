import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isologo from './img/isologo.png';
import CV from './img/cv_dramachado.jpeg';
import { Menu as MenuIcon } from '@material-ui/icons';
import $ from 'jquery';
import axios from 'axios';
import URL from '../const';
import './css/NavBar.css';

class NavBar extends Component{

    componentDidMount() {

        localStorage.clear();

        $('.navbar li a:first').addClass('active');

        $('.navbar li a').each((i, e) => {

            if(i == localStorage.getItem('index')){

                var classes = localStorage.getItem('classes').split(' ');
                $('.navbar li a').removeClass('active');
                e.classList.add(classes[0], classes[1]);

            }

            $(e).click(() => {

                $('.navbar li a').removeClass('active');
                e.classList.add('active');
                localStorage.setItem('classes', e.classList);
                localStorage.setItem('index', i);

            })

        });

    }

    componentWillUnmount() {

        localStorage.clear();

    }

    sessionClose = async() => {

        console.log('Cerrando...');
        var token = sessionStorage.getItem('clientAccessToken');

        var data = {

            token

        }
        
        await axios.post(URL + '/users/close.php', data)
        .then(res => {

            console.log(res.data);

            if(res.data){

                sessionStorage.removeItem('clientAccessToken');

                setTimeout(() => {

                    window.location = '/dramachado';

                }, 1000);

            }

        })
        .catch(error => {

            console.log(error);

        });

    }

    handleCanvas = () => {

        $('.container-menu-canvas').toggleClass('showCanvas');

    }

    render(){

        return(

            <header className='w-100 fixed p-0'>
            
                <nav className='navbar bg-white navbar-expand p-0 navbar-border'>

                    <a className='navbar-brand p-0 ml-0 ml-sm-4' href='/dramachado'>

                        <img className='isologo' src={ isologo } alt='Isologo Dra. Machado' />

                    </a>

                    <div className='container-menu ml-auto'>

                        <ul className='navbar-nav'>

                            <li className='nav-item'>
                                <Link className='nav-link' to='/dramachado'>Inicio</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to={ CV } target='_blank' download>Currículum</Link>
                            </li>
                            {/*
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/dramachado/contacts'>Contactos</Link>
                                </li>
                            */}
                            <li className='nav-item'>
                                <Link className='nav-link' to='/dramachado/multimedia'>Multimedia</Link>
                            </li>

                            { sessionStorage.getItem('clientAccessToken') ?  
                            
                                <li className='nav-item'>
                                    <button type='button' className='btn btn-orange' style={{ 'padding': '8px' }}
                                    onClick={ this.sessionClose }>
                                        Cerrar Sesión
                                    </button>
                                </li>

                                :

                                ''
                        
                            }

                        </ul>

                    </div>

                    <button type='button' className='button-canvas' onClick={ this.handleCanvas }>
                        <MenuIcon />
                    </button>

                </nav>

                <nav className='container-menu-canvas'>

                    <ul>

                        <li>
                            <Link to='/dramachado'>Inicio</Link>
                        </li>
                        <li>
                            <Link to={ CV } target='_blank' download>Currículum</Link>
                        </li>
                        {/*
                            <li>
                                <Link to='/dramachado/contacts'>Contactos</Link>
                            </li>
                        */}
                        <li>
                            <Link to='/dramachado/multimedia'>Multimedia</Link>
                        </li>

                    </ul>

                </nav>
            
            </header>

        )

    }

}

export default NavBar;