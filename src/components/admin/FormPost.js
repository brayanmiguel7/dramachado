import React, { Component } from "react";

export default class FormPost extends Component{

    componentDidMount(){

        if(sessionStorage.getItem('clientAccessToken')){

            console.log('Sesión funcionando.');

        } else {

            window.location = '/dramachado';

        }

    }

    render(){

        return(

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8 col-md-6'>
                        <h1>Nueva Publicación</h1>
                    </div>
                </div>
            </div>

        );

    }

}