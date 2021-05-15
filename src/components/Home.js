import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DraMachadoCV from './img/cv_dramachado.jpeg';
import Isologo from './img/isologo.png';
import IsologoWhite from './img/isologo_white.png';
import DraMachado from './img/dramachado_banner_photo.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import CheckIcon from '@material-ui/icons/Check';

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

            <div className='container-fluid mx-0 px-0'>
                <div className='row col-12 col-sm-12 mx-0 px-0'>

                    <div className='col-12 bg-dark-blue mx-auto px-0'>

                        <div className='col-8'>
                            <img src={ IsologoWhite } width='800' id='isologoHome' alt='Isologo de la Dra. Aisquel Machado en color blanco' />
                        </div>
                        <div className='col-4 text-center px-0'>
                            <img src={ DraMachado } width='300' className='img-dramachado img-fluid' alt='Fotografía de la Dra. Aisquel Machado con su uniforme' />
                        </div>

                    </div>
                    <div className='col-12 bg-green py-3'>
                        <div className='col-12 text-center'>
                            <h1>Aisquel Machado</h1>
                            <h3>MÉDICO PSIQUIATRA</h3>
                        </div>
                        <div className='col-12 mx-auto px-0'>
                            <ul className='list-group list-group-horizontal-sm list-bg-transparent justify-content-center'>
                                <li className='list-group-item'>
                                    <CheckIcon />Especialista en neuroinmunología
                                </li>
                                <li className='list-group-item'>
                                    <CheckIcon />Terapia familiar y de pareja
                                </li>
                                <li className='list-group-item'>
                                    <CheckIcon />Psicoterapia cognitiva conductual
                                </li>
                                <li className='list-group-item'>
                                    <CheckIcon />Trastorno del ánimo
                                </li>
                                <li className='list-group-item'>
                                    <CheckIcon />Depresión - Ansiedad - Bipolaridad
                                </li>
                            </ul>
                            <ul className='list-group list-group-horizontal-sm list-bg-transparent justify-content-center'>
                                <li className='list-group-item'>
                                    <CheckIcon />Trastornos neurodegenerativos en adultos mayores
                                </li>
                                <li className='list-group-item'>
                                    <CheckIcon />Demencias
                                </li>
                                <li className='list-group-item'>
                                    <CheckIcon />Trastorno de desarrollo en niños, niñas y adolescentes
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row col-12 py-3 bg-yellow mx-0 px-0'>
                        <div className='col-12 d-flex mx-auto align-items-center' style={{ overflowX: 'auto' }}>
                            <div className='d-none d-md-block col-md-1'></div>
                            <div className='col-md-2 text-center justify-content-center'>
                                <div className='circle justify-content-center mx-auto'>
                                    2002
                                </div>
                                <strong>Médico Cirujano</strong>
                            </div>
                            <div className='col-md-2 text-center justify-content-center'>
                                <div className='circle justify-content-center mx-auto'>
                                    2005
                                </div>
                                <strong>Magister PNL</strong>
                            </div>
                            <div className='col-md-2 text-center justify-content-center'>
                                <div className='circle justify-content-center mx-auto'>
                                    2009
                                </div>
                                <strong>Médico Psiquiatra</strong>
                            </div>
                            <div className='col-md-2 text-center justify-content-center'>
                                <div className='circle justify-content-center mx-auto'>
                                    2010
                                </div>
                                <strong>Especialidad Investigación</strong>
                            </div>
                            <div className='col-md-2 text-center justify-content-center'>
                                <div className='circle justify-content-center mx-auto'>
                                    2015
                                </div>
                                <strong>Especialidad Obesología</strong>
                            </div>
                            <div className='col-md-1'></div>
                        </div>
                    </div>
                    <div className='row col-12 bg-yellow px-0 mx-0 py-3'>
                        <div className='col-auto ml-5 border-bottom-green'>
                            <h3>¿Cuándo acudir a una consulta?</h3>
                        </div>
                        <div className='col-12 col-md-10 mt-3 ml-5'>
                            <div className='col-7 d-block ml-auto'>
                                <p>Una consulta psiquiátrica es igual a cualquier otra consulta médica, con la diferencia de que los síntomas que aquí se tratan son aquellos que perturban tu vida.</p>
                                <p>La necesidades del paciente determinan la duración de la sesión.</p>
                                <p>Pregunte al psiquiatra cualquier inquietud, ya que esto genera confianza en el tratamiento y en su médico.</p>
                                <p><em>Existe una brecha entre padecer y recibir ateción psiquiátrica. Ubica servicios públicos de Salud Mental. <strong>BUSCA AYUDA</strong></em></p>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className='row col-12'>
                        <div className='col-sm-6 pr-0 pr-sm-3 text-center border-sm-right border-yellow'>
                            <div className='col-12 mt-3 mx-auto text-center p-2 bg-green'>
                                <h3>LABORAL</h3>
                            </div>
                            <div className='col-12 p-3 text-justify'>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> <strong>Médico/Terapeuta</strong><br />
                                    Servicio de Psiquiatría Hospital Militar "Dr. Francisco Valbuena".<br /> Maracaibo - Estado Zulia
                                </p>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> <strong>Jefa del Servicio de Psiquiatría AD HONOREM</strong><br />
                                    Casa de La Misericordia.<br /> Maracaibo - Estado Zulia
                                </p>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> <strong>Directora Ejecutiva</strong><br />
                                    Grupo Clínico "Dra. Lilia Meléndez de Nucette".<br /> Maracaibo - Estado Zulia
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 pr-0 pr-sm-2 pl-sm-3 text-center'>
                            <div className='col-12 mt-3 mx-auto text-center p-2 bg-blue text-white'>
                                <h3>PROFESIONAL</h3>
                            </div>
                            <div className='col-12 p-3 text-justify'>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> Especialista en neuroinmunología
                                </p>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> Terapia familiar y de pareja<br />
                                    Psicoterapia cognitiva conductual
                                </p>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> Trastorno del ánimo<br />
                                    Depresión - Ansiedad - Bipolaridad
                                </p>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> Trastornos neurodegenerativos en adultos mayores - Demencias
                                </p>
                                <p>
                                    <TurnedInIcon className='color-yellow' /> Trastornos de desarrollo en niños, niñas y adolescentes
                                </p>
                            </div>
                        </div>
                    </div>
                    */}

                </div>
            </div>

        )

    }

}

export default Home;