import axios from 'axios';
import React, { Component } from 'react';
import { Audiotrack as AudioIcon } from '@material-ui/icons/';
import $ from 'jquery';
import URL from '../const';

class Post extends Component{

    state = {

        audio: []

    }

    getAudio = async(id) => {

        let data = {

            id: id

        }
        await axios.post(URL + 'textos/audios/', data)
        .then(res => {

            this.setState({

                audio: res.data[0]

            });

        })

    }

    componentDidMount(){

        const { post } = this.props;
        this.getAudio(post.id);

    }

    handlePlayer = () => {

        $('audio').toggleClass('d-block');
        $('em').toggleClass('d-none');

    }

    render() {

        const { post } = this.props;
        const { audio } = this.state;
        return(

            <div className='row m-auto border-middle'>

                <div className='col-md-8 m-auto p-4'>

                    <h3 className='mb-4'>{ post.title }</h3>
                    <p>
                        { post.content }
                    </p>

                    <button className='btn btn-blue border mb-2' onClick={ this.handlePlayer }>
                        <AudioIcon />
                    </button><em className='audio-d-text ml-2'>Clic aquí para reproducir el texto</em>
                    <audio className='d-none m-auto mt-2' src={ audio.url } controls></audio>

                </div>

            </div>

        )

    }

}

export default Post;