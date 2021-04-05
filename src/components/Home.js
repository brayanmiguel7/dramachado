import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DraMachadoImg from './img/dramachado.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Home extends Component{

    //LImita la cantidad de caracteres que se muestra dentro de un div
    ellipsisBox(element, max) {

        var limit_text = $(element).text();
        if(limit_text.length > max){

            let limit = limit_text.substr(0, max) + '...';
            $(element).text(limit);

        }

    }

    componentDidMount() {

        if(window.screen.width < 667){

            this.ellipsisBox('#text', 140);

        }

    }

    render() {

        return(

            <div className='height-100'>
                <div className='row justify-content-center container-carousel'>

                    <div className='col-11 col-sm-10 d-flex text-center bg-blue-media border-radius'>

                        <div id='container-main-text' className='col-7 col-sm-7 mt-auto mb-auto'>

                            <p className='m-0' id='text' style={{ minHeight: '60px' }}>
                                <em>
                                    Bienvenidos y bienvenidas.
                                    Aquí puedes descargar audios referentes al mundo
                                     de la psicología narrados por la reconocida psiquiatra Aisquel Machado.
                                    Este portal es una nueva ventana a la exploración y al saber de la psicología y psiquiatría.
                                     <Link to='/dramachado/multimedia'> Pincha aquí</Link> y descarga todo el conocimiento de la Dra. Machado de forma gratuita y organizada.
                                </em>
                            </p>
                            <Link to='/dramachado/multimedia'>Ver Más</Link>

                        </div>
                        <div className='col-5 col-sm-4 text-center bg-blue border-radius-sm ml-auto mr-0 over-h p-0 d-flex align-content-center'>
                            <img className='img-dramachado m-auto' src={ DraMachadoImg } alt='Dra. Machado' />
                        </div>

                    </div>

                </div>
            </div>

        )

    }

}

export default Home;