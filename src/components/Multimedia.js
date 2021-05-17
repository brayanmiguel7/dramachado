import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import Posts from './Posts';
import ContactsMini from './ContactsMini';
import Loading from './Loading';
import URL from '../const';

class Multimedia extends Component{

    state = {

        pageContent: [],
        allContent: [],
        loading: true,
        initRes: 0,
        limitRes: 3,
        total: 0

    }

    getTextContent = async() => {

        if(this.state.allContent.length <= 0){

            await axios.get(URL + 'textos/', { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(res => {

                this.setState({

                    total: res.data.length,
                    allContent: res.data,
                    loading: false

                });

                console.log('Data received from backend server.');

            });

        }

        this.state.allContent.map((text) => {

            for(var i = this.state.initRes; i <= this.state.limitRes; i++){

                if(text.position === i){

                    if(text.position === this.state.total){

                        $('#nextButton').css('display', 'none');

                    }

                    this.setState({

                        pageContent: [ ...this.state.pageContent, text],
                        loading: false

                    });

                }

            }

        });

    }

    handleNextPage = () => {

        this.setState(prev => ({

            initRes: prev.initRes + 4,
            limitRes: prev.limitRes + 3,
            pageContent: [],
            loading: true

        }));

        setTimeout(() => {

            this.getTextContent();

        }, 500);

    }

    handleBackPage = () => {

        this.setState(prev => ({

            initRes: prev.initRes - 4,
            limitRes: prev.limitRes - 3,
            pageContent: [],
            loading: true

        }));

        setTimeout(() => {

            this.getTextContent();

        }, 500);

    }

    componentDidMount() {

        this.getTextContent();

    }

    render(){

        return(

            this.state.loading ?

                <Loading />

            :

                <div className='row mx-0'>

                    <div className='col-12 col-md-8 px-0 pb-2'>
                        <Posts posts={ this.state.pageContent } nextPage={ this.handleNextPage } />
                        
                            { this.state.initRes === 0 ?
                                
                                <div className='col-12'>
                                    <div className='col-12 ml-auto d-block'>
                                        <button className='btn btn-green float-right' onClick={ this.handleNextPage }>Siguiente</button>
                                    </div>
                                </div>
                                
                                :

                                <div className='col-12'>
                                    <div className='col-12 ml-auto d-block'>
                                        <button className='btn btn-green' onClick={ this.handleBackPage }>Anterior</button>
                                        <button className='btn btn-green float-right' id='nextButton'
                                         onClick={ this.handleNextPage }>
                                            Siguiente
                                        </button>
                                    </div>
                                </div>
                            }
                        
                    </div>
                    <div className='col-md-3 px-0'>
                        <ContactsMini />
                    </div>

                </div>

        )

    }

}

export default Multimedia;